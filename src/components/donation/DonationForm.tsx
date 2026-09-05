import { useState } from "react";

interface DonationFormProps {
  onSubmit: (amount: number) => void;
}

function DonationForm({ onSubmit }: DonationFormProps) {
  const [amount, setAmount] = useState("1000");

  const presets = ["100", "500", "1000", "2500"];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const numericAmount = Number(amount);

    if (!numericAmount || numericAmount <= 0) {
      return;
    }

    onSubmit(numericAmount);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-sm font-medium text-slate-700">
        Choose donation amount
      </p>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {presets.map((preset) => (
          <button
            key={preset}
            type="button"
            onClick={() => setAmount(preset)}
            className={`rounded-xl border px-4 py-3 text-sm font-semibold ${
              amount === preset
                ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                : "border-slate-200 text-slate-700"
            }`}
          >
            ₹{Number(preset).toLocaleString("en-IN")}
          </button>
        ))}
      </div>

      <label className="mt-5 block text-sm font-medium text-slate-700">
        Custom amount
      </label>

      <input
        type="number"
        min="1"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
        className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
      />

      <button
        type="submit"
        className="mt-6 w-full rounded-xl bg-emerald-600 px-5 py-3.5 font-semibold text-white hover:bg-emerald-700"
      >
        Continue Donation
      </button>
    </form>
  );
}

export default DonationForm;