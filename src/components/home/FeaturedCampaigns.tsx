import { Link } from "react-router-dom";
import CampaignCard from "../campaign/CampaignCard";
import { campaigns } from "../../data/mockData";

function FeaturedCampaigns() {
  const featuredCampaigns = campaigns.slice(0, 3);

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
              Featured Campaigns
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Support Causes That Matter
            </h2>

            <p className="mt-4 max-w-2xl text-lg text-slate-600">
              Explore campaigns and follow their journey toward
              transparent, verifiable impact.
            </p>
          </div>

          <Link
            to="/campaigns"
            className="hidden text-sm font-semibold text-emerald-600 md:block"
          >
            View all →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredCampaigns.map((campaign) => (
            <CampaignCard
              key={campaign.id}
              campaign={campaign}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCampaigns;