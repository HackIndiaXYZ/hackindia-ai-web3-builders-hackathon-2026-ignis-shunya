import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import DonationForm from "../components/donation/DonationForm";
import { campaigns } from "../data/mockData";

function Donate() {
  const { campaignId } = useParams();
  const [donated, setDonated] = useState<number | null>(null);

  const campaign = campaigns.find(
    (item) => item.id === campaignId
  );

  if (!campaign) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <p>Campaign not found.</p>
      </main>
    );
  }

  if (donated !== null) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
        <div className="max-w-md rounded-3xl bg-white p-10 text-center shadow-sm">
          <CheckCircle2
            size={52}
            className="mx-auto text-emerald-600"
          />

          <h1 className="mt-5 text-3xl font-bold text-slate-900">
            Donation Ready
          </h1>

          <p className="mt-3 text-slate-600">
            Your demo donation of ₹
            {donated.toLocaleString("en-IN")} is ready for wallet
            confirmation.
          </p>

          <p className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-500">
            Blockchain transaction integration will replace this demo
            confirmation later.
          </p>

          <Link
            to="/dashboard"
            className="mt-6 block rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white"
          >
            Go to Donor Dashboard
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
              Make a Contribution
            </p>

            <h1 className="mt-3 text-4xl font-bold text-slate-900">
              Support {campaign.title}
            </h1>

            <p className="mt-4 leading-7 text-slate-600">
              Your contribution will be associated with this campaign
              and can later be tracked through the transparency flow.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-7 shadow-sm">
            <DonationForm onSubmit={setDonated} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Donate;