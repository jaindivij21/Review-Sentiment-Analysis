export interface IReviewSentiment {
  sentences: ISentenceSentiment[];
  tokens: [];
  entities: IEntitySentiment[];
  documentSentiment: ISentimentScore;
  language: string;
  categories: [];
}

export interface IEntitySentiment {
  name: string;
  type:
    | "UNKNOWN"
    | "PERSON"
    | "LOCATION"
    | "ORGANIZATION"
    | "EVENT"
    | "WORK_OF_ART"
    | "CONSUMER_GOOD"
    | "OTHER"
    | "PHONE_NUMBER"
    | "ADDRESS"
    | "DATE"
    | "NUMBER"
    | "PRICE";
  metadata: {
    mid: string;
    wikipedia_url: string;
  };
  salience: number;
  mentions: IMention[];
  sentiment: ISentimentScore;
}

interface IMention {
  text: {
    content: string;
    beginOffset: number;
  };
  type: string;
  sentiment: ISentimentScore;
}

export interface ISentenceSentiment {
  text: {
    content: string;
    beginOffset: number;
  };
  sentiment: ISentimentScore;
}

interface ISentimentScore {
  magnitude: number;
  score: number;
}
