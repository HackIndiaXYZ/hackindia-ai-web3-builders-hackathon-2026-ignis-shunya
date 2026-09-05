import { Link } from "react-router-dom";
import type { Campaign } from "../../types/campaign";

interface CampaignCardProps {
  campaign: Campaign;
}

function CampaignCard({ campaign }: CampaignCardProps) {
  const progress = Math.min(
    Math.round((campaign.raisedAmount / campaign.targetAmount) * 100),
    100
  );

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-48 items-center justify-center bg-emerald-50">
        <div className="text-5xl">🤝</div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            {campaign.category}
          </span>

          <span className="text-xs text-slate-500">
            {campaign.location}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-semibold text-slate-900">
          {campaign.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
          {campaign.description}
        </p>

        <div className="mt-6">
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-slate-900">
              ₹{campaign.raisedAmount.toLocaleString("en-IN")}
            </span>

            <span className="text-slate-500">
              of ₹{campaign.targetAmount.toLocaleString("en-IN")}
            </span>
          </div>

          <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-emerald-600 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-2 flex justify-between text-xs text-slate-500">
            <span>{progress}% funded</span>
            <span>{campaign.beneficiaries} beneficiaries</span>
          </div>
        </div>

        <Link
          to={`/campaign/${campaign.id}`}
          className="mt-6 block rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          View Campaign
        </Link>
      </div>
    </article>
  );
}

export default CampaignCard;