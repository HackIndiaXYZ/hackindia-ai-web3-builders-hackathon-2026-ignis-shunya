import { useEffect, useState } from "react";

import type { Campaign } from "../types/campaign";
import { getMockCampaigns } from "../services/mockApi";

function useCampaigns() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadCampaigns() {
      try {
        setLoading(true);
        setError("");

        const data = await getMockCampaigns();

        setCampaigns(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to load campaigns."
        );
      } finally {
        setLoading(false);
      }
    }

    loadCampaigns();
  }, []);

  return {
    campaigns,
    loading,
    error,
  };
}

export default useCampaigns;