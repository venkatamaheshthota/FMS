export type CommunityType = {
  id: number;
  name: string;
  image: string;
  area?: string;
  description?: string;
  link?: string;
  business?: {
    name: string;
    type: string;
    desc: string;
    address: {
      street: string;
      city: string;
      zip: string;
    };
  }[];
  mapLink?: string;
};
