import { useState } from "react";
import RiskSummary from "./RiskSummary";

function ExpenseUpload() {
  const [analyzed, setAnalyzed] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setAnalyzed(true);
  };

  return (
    <div className="rounded-3xl bg-white p-7 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">
        Upload Expense
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        Add expense evidence for AI-assisted analysis.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label className="text-sm font-medium text-slate-700">
            Campaign
          </label>

          <select className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3">
            <option>Flood Relief</option>
            <option>Education Support</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">
            Receipt
          </label>

          <input
            type="file"
            accept="image/*,.pdf"
            className="mt-2 w-full rounded-xl border border-dashed border-slate-300 p-4"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-slate-700">
              Amount
            </label>

            <input
              type="number"
              placeholder="7500"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Category
            </label>

            <select className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3">
              <option>Food</option>
              <option>Medical</option>
              <option>Transport</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-slate-900 px-5 py-3.5 font-semibold text-white hover:bg-slate-800"
        >
          Analyze Expense
        </button>
      </form>

      {analyzed && (
        <div className="mt-8 space-y-5 border-t border-slate-200 pt-8">
          <RiskSummary score={14} level="low" />

          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="font-semibold text-slate-900">
              AI Analysis
            </p>

            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p>✓ Receipt details detected</p>
              <p>✓ Expense category matches campaign</p>
              <p>✓ Amount appears consistent</p>
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
            <p className="font-semibold text-emerald-800">
              Blockchain proof ready
            </p>

            <p className="mt-2 text-sm text-emerald-700">
              The backend can now generate a document hash and
              submit the verification record on-chain.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExpenseUpload;