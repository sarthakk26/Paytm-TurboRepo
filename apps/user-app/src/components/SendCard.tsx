"use client";
import { Button } from "@repo/ui";
import { Card } from "@repo/ui";
import { Center } from "@repo/ui";
import { TextInput } from "@repo/ui";
import { useState } from "react";
import { p2pTransfer } from "@/lib/action/p2pTransfer";
import { toast } from "sonner";

export function SendCard() {
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");

  const handleTransfer = async () => {
    if (!number || !amount) {
      toast.error("Please fill in all fields");
      return;
    }
    //Loading toast
    const toastId = toast.loading("Processing Transaction...");

    try {
      const result = await p2pTransfer(number, Number(amount));

      if (result && result.message !== "Transfer successful") {
        toast.dismiss(toastId);
        toast.error(result.message);
        return;
      }
      toast.dismiss(toastId);
      toast.success("Transfer successful!");
    } catch (err: any) {
      toast.dismiss(toastId);
      const errorMessage = err?.message || "Transaction failed";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="h-[90vh]">
      <Center>
        <Card title="Send">
          <div className="min-w-72 pt-2">
            <TextInput
              placeholder={"Number"}
              label={"Number"}
              onChange={(value) => {
                setNumber(value);
              }}
            />
            <TextInput
              placeholder={"Amount"}
              label="Amount"
              onChange={(value) => {
                setAmount(value);
              }}
            />
            <div className="pt-4 flex justify-center">
              <Button onClick={handleTransfer}>Send</Button>
            </div>
          </div>
        </Card>
      </Center>
    </div>
  );
}
