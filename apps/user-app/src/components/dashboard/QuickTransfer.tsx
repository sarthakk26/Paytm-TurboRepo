"use client";
import { Card } from "@repo/ui";
import { Button } from "@repo/ui";
import { TextInput } from "@repo/ui";
import { useState } from "react";
import { p2pTransfer } from "../../lib/action/p2pTransfer";
import { toast } from "sonner";

export const QuickTransfer = () => {
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");

  const handleTransfer = async () => {
    if (!number || !amount) {
      toast.error("Please fill in all fields");
      return;
    }

    const toastId = toast.loading("Processing...");

    try {
      // Note: DB stores amount directly (no /100 needed based on your setup)
      const result = await p2pTransfer(number, Number(amount));

      if (result && result.message !== "Transfer successful") {
        toast.dismiss(toastId);
        toast.error(result.message);
        return;
      }

      toast.dismiss(toastId);
      toast.success("Transfer successful!");
      setAmount("");
      setNumber("");
      // Optional: You could trigger a router.refresh() here to update the balance
    } catch (e: any) {
      toast.dismiss(toastId);
      toast.error(e.message || "Transfer failed");
    }
  };

  return (
    <Card title="Quick Transfer">
      <div className="flex flex-col gap-2 pt-2">
        <TextInput
          placeholder="Enter the Number"
          onChange={(val) => setNumber(val)}
          label=""
        />
        <TextInput
          placeholder="Enter the amount"
          onChange={(val) => setAmount(val)}
          label=""
        />
        <div className="pt-2">
          <Button onClick={handleTransfer}>Send Money</Button>
        </div>
      </div>
    </Card>
  );
};
