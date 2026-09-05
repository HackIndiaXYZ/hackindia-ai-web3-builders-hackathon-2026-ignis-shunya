import { useEffect, useState } from "react";
import CampaignCard from "../components/CampaignCard";
import Loading from "../components/Loading";
import { apiFetch } from "../services/api";
import type { Campaign } from "../types/campaign";

function Campaigns() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCampaigns = async () => {
      try {
        const data = await apiFetch("/campaigns");

        setCampaigns(data.campaigns || data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadCampaigns();
  }, []);

  return (
    <>
      <main className="mx-auto max-w-7xl p-6">

        <h1 className="mb-6 text-3xl font-bold">
          All Campaigns
        </h1>

        {loading ? (
          <Loading />
        ) : campaigns.length === 0 ? (
          <p>No campaigns found.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {campaigns.map((campaign) => (
              <CampaignCard
                key={campaign._id}
                campaign={campaign}
              />
            ))}

          </div>
        )}

      </main>
    </>
  );
}

export default Campaigns;
