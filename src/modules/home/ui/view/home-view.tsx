"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client"; //import the auth client
import { useRouter } from "next/navigation";

const HomeView = () => {
  const router = useRouter(); //import the router to handle navigation
  const { data: session } = authClient.useSession();

  if (!session) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col p-4 gap-y-2">
      <p>
        You are logged in as <strong>{session.user.name}</strong> with email{" "}
        {session.user.email}
      </p>
      <Button
        onClick={() => {
          authClient.signOut({
            fetchOptions: {
              onSuccess: () => {
                router.push("/sign-in"); // Redirect to sign-in page after sign out
              },
            },
          });
        }}
      >
        Sign out
      </Button>
    </div>
  );
};

export default HomeView;
