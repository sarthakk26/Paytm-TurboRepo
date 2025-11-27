import { Card } from "@repo/ui";

export const BalanceCard = ({
  amount,
  locked,
}: {
  amount: number;
  locked: number;
}) => {
  return (
    //removed /100 from all 3 
    <Card title="Balance">
      <div className="flex justify-between border-b border-slate-300 pb-2">
        <div>Unlocked balance</div>
        <div>{amount} INR</div>
      </div>
      <div className="flex justify-between border-b border-slate-300 py-2">
        <div>Total Locked Balance</div>
        <div>{locked} INR</div>
      </div>
      <div className="flex justify-between border-b border-slate-300 py-2">
        <div>Total Balance</div>
        <div>{(locked + amount)} INR</div>
      </div>
    </Card>
  );
};
