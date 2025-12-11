import { Card } from "@repo/ui";

interface Contact {
  id: number;
  name: string | null;
  number: string;
}

export const RecentContacts = ({ contacts }: { contacts: Contact[] }) => {
  return (
    <Card title="Recent Contacts">
      <div className="pt-4 pb-7 grid grid-cols-5 gap-y-4 gap-x-2 pb-2">
        {contacts.length === 0 ? (
          <div className="text-slate-500 text-sm col-span-5 text-center py-8">
            No recent contacts
          </div>
        ) : (
          // 1. Change slice to 10 to allow exactly 2 full rows (5x2)
          contacts.slice(0, 10).map((contact) => (
            <div
              key={contact.id}
              className="flex flex-col items-center justify-start gap-1 cursor-pointer hover:opacity-80 transition-opacity"
            >
              {/* Avatar Circle */}
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm pt-1">
                {(contact.name?.slice(0, 1) || contact.number.slice(0, 1)).toUpperCase()}
              </div>
              
              {/* Name/Number */}
              <div className="text-[12px] text-slate-600 font-medium text-center leading-tight w-full overflow-hidden text-ellipsis whitespace-nowrap">
                {contact.name || contact.number}
              </div>
            </div>
          ))
        )}
      </div>
    </Card>
  );
};