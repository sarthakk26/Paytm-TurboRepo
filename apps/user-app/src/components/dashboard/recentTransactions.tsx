import { Card } from "@repo/ui";

interface Transaction {
  id: string;
  type: "deposit" | "sent" | "received";
  amount: number;
  date: Date;
  status: string;
  description: string;
}

export const RecentTransactions = ({ transactions }: { transactions: Transaction[] }) => {
  if (!transactions.length) {
    return (
      <Card title="Recent Transactions">
        <div className="py-8 text-center">
          <p className="text-slate-500 text-sm">No recent transactions</p>
        </div>
      </Card>
    );
  }

  return (
    <Card title="Recent Transactions">
      <div className="pt-2 flex flex-col gap-4">
        {transactions.map((t) => (
          <div key={t.id} className="flex justify-between items-center border-b border-slate-100 pb-2 last:border-b-0">
            <div className="flex items-center gap-4">
              {/* Icon based on transaction type */}
              <div className={`p-2 rounded-full ${
                t.type === 'deposit' ? 'bg-green-100 text-green-600' :
                t.type === 'received' ? 'bg-green-100 text-green-600' :
                'bg-red-100 text-red-600'
              }`}>
                {t.type === 'deposit' && <BankIcon />}
                {t.type === 'received' && <ReceiveIcon />}
                {t.type === 'sent' && <SendIcon />}
              </div>
              
              <div>
                <div className="text-sm font-semibold text-slate-800">
                  {t.description}
                </div>
                <div className="text-xs text-slate-500">
                  {new Date(t.date).toDateString()}
                </div>
              </div>
            </div>

            <div className={`font-semibold ${
               t.type === 'sent' ? 'text-slate-800' : 'text-green-600'
            }`}>
              {t.type === 'sent' ? '-' : '+'} ₹{t.amount}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

// Simple Icons
const BankIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7"/><path d="M19 21V7"/><path d="M2 7h20"/><path d="M12 2 2 7h20z"/></svg>
);
const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
);
const ReceiveIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13"/><path d="m22 2-7 20-4-9-9-4Z"/></svg>
); 