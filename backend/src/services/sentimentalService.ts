import { PrismaClient } from "@prisma/client";

// Interfaces
import { IEntitySentiment } from "../interface/review.interface";

// Utils
import googleSentiment from "../api/googleSentiment.api";
import { getSentimentString } from "../helpers/sentimental";

// Sentimental Service
class SentimentalService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  // Method to create a sentimental and associated entities
  async createReviewSentimental(reviewContent: string) {
    // Make an API call to get the sentimental data
    const response =
      await googleSentiment.getReviewSentiment(
        reviewContent
      );

    const sentiment = await this.prisma.sentiments.create({
      data: {
        score: response.documentSentiment.score,
        magnitude: response.documentSentiment.magnitude,
        sentiment: getSentimentString(
          response.documentSentiment.score,
          response.documentSentiment.magnitude
        ),
        entities: {
          create: this.getEntityData(response.entities).map(
            (entity) => ({
              score: entity.score,
              magnitude: entity.magnitude,
              entity: entity.entity,
              name: entity.name,
              sentiment: entity.sentiment,
            })
          ),
        },
      },
      include: { entities: true },
    });

    return sentiment.id;
  }

  // Private Method to make the entities data
  private getEntityData(entities: IEntitySentiment[]) {
    return entities.map((entity) => ({
      score: entity.sentiment.score,
      magnitude: entity.sentiment.magnitude,
      entity: entity.type,
      name: entity.name,
      sentiment: getSentimentString(
        entity.sentiment.score,
        entity.sentiment.magnitude
      ),
    }));
  }
}

const sentimentalService = new SentimentalService();
export default sentimentalService;
