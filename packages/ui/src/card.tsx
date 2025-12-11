import React from "react";

export function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
      <h2 className="text-lg font-semibold text-slate-800">
        {title}
      </h2>
      <div>{children}</div>
    </div>
  );
}
