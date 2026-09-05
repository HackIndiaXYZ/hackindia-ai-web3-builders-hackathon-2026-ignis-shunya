import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { apiFetch } from "../services/api";
import type { Donation } from "../types/donation";

function Donations() {
  const [donations, setDonations] =
    useState<Donation[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDonations = async () => {
      try {
        const data = await apiFetch("/donations/my");

        setDonations(data.donations || data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadDonations();
  }, []);

  return (
    <>
      <main className="mx-auto max-w-5xl p-6">

        <h1 className="mb-6 text-3xl font-bold">
          My Donations
        </h1>

        {loading ? (
          <Loading />
        ) : donations.length === 0 ? (
          <p>You haven't made any donations.</p>
        ) : (
          <div className="space-y-4">

            {donations.map((donation) => (
              <div
                key={donation._id}
                className="rounded-xl border p-5"
              >
                <h2 className="font-bold">
                  {donation.campaignTitle}
                </h2>

                <p>
                  Amount: ₹{donation.amount}
                </p>

                <p className="text-sm text-gray-500">
                  {new Date(
                    donation.createdAt
                  ).toLocaleDateString()}
                </p>
              </div>
            ))}

          </div>
        )}

      </main>
    </>
  );
}

export default Donations;
