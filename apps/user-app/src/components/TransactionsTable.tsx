"use client"

import React from "react";

export const TransactionsTable = ({ transactions }: { transactions: any[] }) => {
  if (!transactions.length) {
    return <div className="p-4 text-center text-gray-500">No recent transactions</div>;
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500">
          <thead className="bg-gray-50 text-gray-700 uppercase font-medium border-b border-gray-200">
            <tr>
              <th className="px-6 py-4">Name / Entity</th>
              <th className="px-6 py-4">Date & Time</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Amount</th>
            </tr>
          </thead>
          
          <tbody className="divide-y divide-gray-100">
            {transactions.map((t) => {
              const dateObj = new Date(t.date);
              const isDebit = t.type === "sent"; 
              
              
              let displayName = "Unknown";
              let subtext = "";
              let statusColor = "bg-gray-100 text-gray-800";

              //(Deposit)
              if (t.type === "deposit") {
                displayName = "Wallet Load";
                subtext = `Via ${t.provider}`;
                statusColor = t.status === "Success" ? "bg-green-100 text-green-800" 
                              : t.status === "Processing" ? "bg-yellow-100 text-yellow-800" 
                              : "bg-red-100 text-red-800";
              } 
              //P2P (Sent/Received)
              else {
                displayName = t.user;
                subtext = t.type === "sent" ? "Sent P2P" : "Received P2P";
                statusColor = "bg-green-100 text-green-800"; 
              }

              return (
                <tr key={t.id} className="hover:bg-gray-50 transition-colors duration-150">
                  {/* Name Column */}
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{displayName}</div>
                    <div className="text-xs text-gray-400 capitalize">{subtext}</div>
                  </td>

                  {/* Date Column */}
                  <td className="px-6 py-4">
                    <div className="text-gray-900">{dateObj.toLocaleDateString()}</div>
                    <div className="text-xs text-gray-400">
                      {dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </td>

                  {/* Status Column */}
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor}`}>
                      {t.status}
                    </span>
                  </td>

                  {/* Amount Column */}
                  <td className={`px-6 py-4 text-right font-medium ${isDebit ? 'text-red-600' : 'text-green-600'}`}>
                    {isDebit ? '-' : '+'} ₹{t.amount}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};