import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { apiFetch } from "../services/api";
import type { Campaign } from "../types/campaign";

function CampaignDetails() {
  const { id } = useParams();

  const [campaign, setCampaign] =
    useState<Campaign | null>(null);

  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(true);
  const [donating, setDonating] = useState(false);

  useEffect(() => {
    const loadCampaign = async () => {
      try {
        const data = await apiFetch(
          `/campaigns/${id}`
        );

        setCampaign(data.campaign || data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadCampaign();
  }, [id]);

  const handleDonation = async (
    e: FormEvent
  ) => {
    e.preventDefault();

    if (!amount || Number(amount) <= 0) {
      return;
    }

    try {
      setDonating(true);

      await apiFetch("/donations", {
        method: "POST",

        body: JSON.stringify({
          campaignId: id,
          amount: Number(amount),
        }),
      });

      setAmount("");

      alert("Donation successful!");

    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Donation failed"
      );
    } finally {
      setDonating(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (!campaign) {
    return <p>Campaign not found.</p>;
  }

  return (
    <>
      <main className="mx-auto max-w-4xl p-6">

        {campaign.image && (
          <img
            src={campaign.image}
            alt={campaign.title}
            className="mb-6 h-80 w-full rounded-xl object-cover"
          />
        )}

        <h1 className="text-4xl font-bold">
          {campaign.title}
        </h1>

        <p className="mt-4 text-gray-600">
          {campaign.description}
        </p>

        <div className="mt-6 rounded-xl border p-6">

          <div className="flex justify-between">
            <span>
              Raised: ₹{campaign.collectedAmount}
            </span>

            <span>
              Goal: ₹{campaign.targetAmount}
            </span>
          </div>

          <form
            onSubmit={handleDonation}
            className="mt-6 flex gap-3"
          >

            <input
              type="number"
              value={amount}
              onChange={(e) =>
                setAmount(e.target.value)
              }
              placeholder="Enter amount"
              className="flex-1 rounded-lg border p-3"
            />

            <button
              disabled={donating}
              className="rounded-lg bg-green-600 px-6 text-white"
            >
              {donating ? "Processing..." : "Donate"}
            </button>

          </form>

        </div>

      </main>
    </>
  );
}

export default CampaignDetails;
