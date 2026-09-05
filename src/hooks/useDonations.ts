import { useEffect, useState } from "react";

import type { Donation } from "../types/donation";
import { getMockDonations } from "../services/mockApi";

function useDonations() {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadDonations() {
      try {
        setLoading(true);
        setError("");

        const data = await getMockDonations();

        setDonations(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to load donations."
        );
      } finally {
        setLoading(false);
      }
    }

    loadDonations();
  }, []);

  return {
    donations,
    loading,
    error,
  };
}

export default useDonations;