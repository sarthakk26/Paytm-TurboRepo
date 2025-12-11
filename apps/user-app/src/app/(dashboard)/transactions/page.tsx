import { getAllTransactions } from "@/lib/action/getTransactions";
import { TransactionsTable } from "@/components/TransactionsTable";

export default async function TransactionsPage() {
  const transactions = await getAllTransactions(20, 0);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Your Transactions
          </h1>
        </div>
        <TransactionsTable transactions={transactions} />
      </div>
    </div>
  );
}
