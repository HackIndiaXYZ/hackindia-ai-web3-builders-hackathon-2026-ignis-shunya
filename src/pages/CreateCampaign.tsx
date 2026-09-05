import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../services/api";

function CreateCampaign() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [image, setImage] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (
    e: FormEvent
  ) => {
    e.preventDefault();

    if (!title || !description || !targetAmount) {
      setError("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await apiFetch("/campaigns", {
        method: "POST",

        body: JSON.stringify({
          title,
          description,
          targetAmount: Number(targetAmount),
          image,
        }),
      });

      navigate("/campaigns");

    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Failed to create campaign"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main className="mx-auto max-w-2xl p-6">

        <h1 className="mb-6 text-3xl font-bold">
          Create Campaign
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-xl border p-6"
        >

          {error && (
            <p className="text-red-500">
              {error}
            </p>
          )}

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Campaign title"
            className="w-full rounded-lg border p-3"
          />

          <textarea
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            placeholder="Campaign description"
            rows={5}
            className="w-full rounded-lg border p-3"
          />

          <input
            type="number"
            value={targetAmount}
            onChange={(e) =>
              setTargetAmount(e.target.value)
            }
            placeholder="Target amount"
            className="w-full rounded-lg border p-3"
          />

          <input
            value={image}
            onChange={(e) =>
              setImage(e.target.value)
            }
            placeholder="Image URL"
            className="w-full rounded-lg border p-3"
          />

          <button
            disabled={loading}
            className="w-full rounded-lg bg-black p-3 text-white"
          >
            {loading ? "Creating..." : "Create Campaign"}
          </button>

        </form>

      </main>
    </>
  );
}

export default CreateCampaign;
