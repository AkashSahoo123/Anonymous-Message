import React from "react";
import { signIn } from "next-auth/react";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { CardContent } from "../ui/card";
import { Button } from "../ui/button";
function DemoUserButton() {
  const { toast } = useToast();
  const router = useRouter();
  async function onDemoHandler() {
    const result = await signIn("credentials", {
      redirect: false,
      identifier:"AkashSahoo",
      password:123456,
    });
    if (result?.error) {
      toast({
        title: "Sign in failed",
        description: result.error,
        variant: "destructive",
      });
    }
    if (result) {
      router.replace("/dashboard");
    }
  }
  return (
    <CardContent className="space-y-4 flex flex-col items-center">
      <Button
        className="align-middle justify-around items-center mx-auto"
        onClick={onDemoHandler}
      >
        Click here to sign in as a demo user
      </Button>
    </CardContent>
  );
}

export default DemoUserButton;