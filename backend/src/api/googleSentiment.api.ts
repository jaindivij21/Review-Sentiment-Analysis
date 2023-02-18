import axios from "axios";
import { IReviewSentiment } from "../interface/review.interface";

class GoogleSentiment {
  private readonly googleEndpoint =
    "https://language.googleapis.com/v1beta2/documents:";

  public async getReviewSentiment(
    review: string
  ): Promise<IReviewSentiment> {
    const response = await axios.post(
      `${this.googleEndpoint}${"annotateText"}?key=${
        process.env.GOOGLE_API_KEY
      }`,
      {
        document: {
          content: review,
          type: "PLAIN_TEXT",
        },
        features: {
          extractSyntax: false,
          extractEntities: false,
          extractDocumentSentiment: true,
          extractEntitySentiment: true,
          classifyText: false,
        },
      }
    );
    return response.data;
  }
}

const googleSentiment = new GoogleSentiment();
export default googleSentiment;
