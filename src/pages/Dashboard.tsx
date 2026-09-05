import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import CampaignCard from "../components/CampaignCard";
import { apiFetch } from "../services/api";
import type { Campaign } from "../types/campaign";

function Dashboard() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const data = await apiFetch("/campaigns");

        setCampaigns(data.campaigns || data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <>
      <main className="mx-auto max-w-7xl p-6">

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              Dashboard
            </h1>

            <p className="text-gray-600">
              Manage your campaigns and donations.
            </p>
          </div>

          <Link
            to="/campaigns/create"
            className="rounded-lg bg-black px-5 py-3 text-white"
          >
            Create Campaign
          </Link>
        </div>

        {loading ? (
          <Loading />
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

export default Dashboard;
