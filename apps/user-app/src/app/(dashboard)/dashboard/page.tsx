import { getDashboardData } from "@/lib/action/getDashboardData";
import { StatusCard } from "@/components/dashboard/StatusCard";
import { RecentTransactions } from "@/components/dashboard/recentTransactions";
import { RecentContacts } from "@/components/dashboard/RecentContacts"; // <--- Import
import { QuickTransfer } from "@/components/dashboard/QuickTransfer"; // <--- Import

const WalletIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
  </svg>
);
const UnlockedIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
const LockedIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 9.9-1" />
  </svg>
);

export default async function Dashboard() {
  const data = await getDashboardData();
  if (!data || "error" in data) return <div>Error loading dashboard</div>;

  const { balance, transactions, contacts } = data;

  return (
    <div className="w-full max-w-screen-xl mx-auto px-8 space-y-6">
      <div className="text-2xl font-bold text-slate-800 mb-4">Dashboard</div>

      {/* Row 1: Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatusCard
          title="Total Balance"
          amount={balance.amount + balance.locked}
          icon={WalletIcon}
          color="text-blue-600"
          bgColor="bg-blue-100" // Soft Blue
        />
        <StatusCard
          title="Unlocked Balance"
          amount={balance.amount}
          icon={UnlockedIcon}
          color="text-green-600"
          bgColor="bg-green-100" // Soft Green
        />
        <StatusCard
          title="Locked Balance"
          amount={balance.locked}
          icon={LockedIcon}
          color="text-red-600"
          bgColor="bg-red-100" // Soft Red
        />
      </div>

      {/* Row 2: Actions & Contacts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left: Quick Transfer */}
        <div>
          <QuickTransfer />
        </div>
        {/* Right: Recent Contacts */}
        <div>
          {/* @ts-ignore */}
          <RecentContacts contacts={contacts} />
        </div>
      </div>

      {/* Row 3: Transactions */}
      <div className="grid gap-4">
        {/* @ts-ignore */}
        <RecentTransactions transactions={transactions} />
      </div>
    </div>
  );
}
