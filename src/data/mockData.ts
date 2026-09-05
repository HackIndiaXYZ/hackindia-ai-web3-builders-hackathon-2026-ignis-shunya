import type { Campaign } from "../types/campaign";
import type { Donation } from "../types/donation";
import type { Expense } from "../types/expense";
import type { VerificationResult } from "../types/verification";

export const campaigns: Campaign[] = [
  {
    id: "C001",
    title: "Flood Relief",
    description:
      "Support flood-affected families with essential food, medical supplies and emergency assistance.",
    targetAmount: 100000,
    raisedAmount: 72500,
    beneficiaries: 250,
    category: "Disaster Relief",
    location: "Assam",
    status: "active",
  },
  {
    id: "C002",
    title: "Education Support",
    description:
      "Help students access books, learning materials and essential educational resources.",
    targetAmount: 75000,
    raisedAmount: 48000,
    beneficiaries: 120,
    category: "Education",
    location: "Bihar",
    status: "active",
  },
  {
    id: "C003",
    title: "Medical Support",
    description:
      "Provide essential medicines and healthcare assistance to underserved communities.",
    targetAmount: 50000,
    raisedAmount: 31200,
    beneficiaries: 90,
    category: "Healthcare",
    location: "Uttar Pradesh",
    status: "active",
  },
  {
    id: "C004",
    title: "Food Distribution",
    description:
      "Support community kitchens and essential grocery distribution programs.",
    targetAmount: 60000,
    raisedAmount: 44000,
    beneficiaries: 180,
    category: "Food",
    location: "Delhi",
    status: "active",
  },
  {
    id: "C005",
    title: "Clean Water Initiative",
    description:
      "Help communities gain access to clean drinking water and sanitation resources.",
    targetAmount: 90000,
    raisedAmount: 63000,
    beneficiaries: 300,
    category: "Water",
    location: "Rajasthan",
    status: "active",
  },
  {
    id: "C006",
    title: "Women Skill Development",
    description:
      "Support vocational training and livelihood opportunities for women.",
    targetAmount: 80000,
    raisedAmount: 52000,
    beneficiaries: 75,
    category: "Livelihood",
    location: "Madhya Pradesh",
    status: "completed",
  },
];

export const donations: Donation[] = [
  {
    id: "D001",
    campaignId: "C001",
    amount: 1000,
    status: "confirmed",
    transactionHash: "0x9a72f1b8c123abc456def789",
    createdAt: "2026-09-01T10:30:00Z",
  },
  {
    id: "D002",
    campaignId: "C002",
    amount: 500,
    status: "confirmed",
    transactionHash: "0x78ab92cdef123456",
    createdAt: "2026-08-28T14:15:00Z",
  },
];

export const expenses: Expense[] = [
  {
    id: "E001",
    campaignId: "C001",
    amount: 7500,
    vendor: "ABC Foods",
    category: "Food",
    description: "Rice, dal and essential grocery supplies.",
    receiptUrl: "#",
    riskScore: 14,
    riskLevel: "low",
    verificationStatus: "verified",
    blockchainTx: "0x8abc91def123456",
    createdAt: "2026-08-30T09:15:00Z",
  },
  {
    id: "E002",
    campaignId: "C001",
    amount: 18000,
    vendor: "Health Supplies Ltd.",
    category: "Medical",
    description: "Emergency medical supplies.",
    receiptUrl: "#",
    riskScore: 31,
    riskLevel: "medium",
    verificationStatus: "review",
    createdAt: "2026-08-31T11:00:00Z",
  },
];

export const verificationResults: VerificationResult[] = [
  {
    recordId: "CHA-1029",
    originalHash: "0x8a4f91cd772abc",
    currentHash: "0x8a4f91cd772abc",
    hashMatch: true,
    status: "verified",
    timestamp: "2026-08-30T09:15:00Z",
    blockchainTx: "0x8abc91def123456",
  },
  {
    recordId: "CHA-1030",
    originalHash: "0xab123456789",
    currentHash: "0xxyz987654321",
    hashMatch: false,
    status: "tampered",
    timestamp: "2026-08-31T11:00:00Z",
  },
];