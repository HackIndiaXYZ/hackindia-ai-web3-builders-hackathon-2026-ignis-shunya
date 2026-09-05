import { campaigns, donations, expenses, verificationResults } from "../data/mockData";

export async function getMockCampaigns() {
  await new Promise((resolve) => setTimeout(resolve, 300));

  return campaigns;
}

export async function getMockCampaign(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 200));

  return campaigns.find((campaign) => campaign.id === id);
}

export async function getMockDonations() {
  await new Promise((resolve) => setTimeout(resolve, 200));

  return donations;
}

export async function getMockExpenses(campaignId: string) {
  await new Promise((resolve) => setTimeout(resolve, 200));

  return expenses.filter(
    (expense) => expense.campaignId === campaignId
  );
}

export async function getMockVerification(recordId: string) {
  await new Promise((resolve) => setTimeout(resolve, 200));

  return verificationResults.find(
    (result) => result.recordId === recordId
  );
}