import { Card } from "@repo/ui";

interface StatusCardProps {
  title: string;
  amount: number;
  icon: React.ReactNode;
  color?: string; // e.g. "text-blue-600"
  bgColor?: string; // e.g. "bg-blue-100"
}

export const StatusCard = ({ title, amount, icon, color = "text-blue-600", bgColor = "bg-blue-50" }: StatusCardProps) => {
  return (
    <Card title={title}>
      <div className="flex items-center justify-between pt-4">
        <div>
          <div className="text-2xl font-bold text-slate-800">
            ₹ {amount.toLocaleString('en-IN')}
          </div>
        </div>
        {/* The Icon Container: Soft background + Strong Icon */}
        <div className={`p-3 rounded-full ${bgColor} ${color} flex items-center justify-center`}>
          {icon}
        </div>
      </div>
    </Card>
  );
};