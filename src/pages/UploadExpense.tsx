import ExpenseUpload from "../components/admin/ExpenseUpload";

function UploadExpense() {
  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="mx-auto max-w-3xl px-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            Expense Management
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            Add an Expense
          </h1>

          <p className="mt-4 text-slate-600">
            Submit a receipt and review the AI-assisted expense
            analysis before verification.
          </p>
        </div>

        <div className="mt-10">
          <ExpenseUpload />
        </div>
      </div>
    </main>
  );
}

export default UploadExpense;