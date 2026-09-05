import { Link } from "react-router-dom";
import type { Campaign } from "../types/campaign";

interface Props {
  campaign: Campaign;
}

function CampaignCard({ campaign }: Props) {
  const percentage =
    campaign.targetAmount > 0
      ? Math.min(
          (campaign.collectedAmount /
            campaign.targetAmount) *
            100,
          100
        )
      : 0;

  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">

      {campaign.image && (
        <img
          src={campaign.image}
          alt={campaign.title}
          className="mb-4 h-48 w-full rounded-lg object-cover"
        />
      )}

      <h2 className="text-xl font-bold">
        {campaign.title}
      </h2>

      <p className="mt-2 text-gray-600">
        {campaign.description}
      </p>

      <div className="mt-4">

        <div className="flex justify-between text-sm">
          <span>
            ₹{campaign.collectedAmount}
          </span>

          <span>
            ₹{campaign.targetAmount}
          </span>
        </div>

        <div className="mt-2 h-2 rounded bg-gray-200">
          <div
            className="h-2 rounded bg-green-500"
            style={{
              width: `${percentage}%`,
            }}
          />
        </div>

      </div>

      <Link
        to={`/campaigns/${campaign._id}`}
        className="mt-4 inline-block rounded-lg bg-black px-4 py-2 text-white"
      >
        View Campaign
      </Link>

    </div>
  );
}

export default CampaignCard;