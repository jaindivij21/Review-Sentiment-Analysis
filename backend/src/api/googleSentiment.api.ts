import axios from "axios";
import { IReviewSentiment } from "../interface/review.interface";

class GoogleSentiment {
  private readonly googleEndpoint =
    "https://language.googleapis.com/v1beta2/documents:";

  public async getReviewSentiment(
    review: string
  ): Promise<IReviewSentiment> {
    const response = await axios.post(
      `${this.googleEndpoint}${"annotateText"}`,
      {
        document: {
          content: review,
          type: "PLAIN_TEXT",
        },
        encodingType: "UTF8",
      }
    );
    return response.data;
  }
}

const googleSentiment = new GoogleSentiment();
export default googleSentiment;
