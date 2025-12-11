import { Card } from "@repo/ui";
import { getBalance } from "@/lib/action/getBalance";

export const BalanceCard =  async() => {
  const balance = await getBalance();
  const totalBalance = balance;
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-medium text-gray-600 mb-4">Total Balance</h2>
        <div className="flex items-center gap-4">
          <span className="text-4xl font-bold text-gray-900">
            ₹ {totalBalance.amount}
          </span>
        </div>
      </div>
    </div>
  );
};
