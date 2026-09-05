export interface Campaign {
  _id: string;
  title: string;
  description: string;
  targetAmount: number;
  collectedAmount: number;
  image?: string;
  createdAt: string;
  status: "active" | "completed";
}