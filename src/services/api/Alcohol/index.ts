export type AlcoholResponse = {
  id: number;
  name: string;
};

export type AlcoholListResponse = {
  image: string;
} & AlcoholResponse;

export type AlcoholDetailResponse = {
  description: string;
} & AlcoholResponse;
