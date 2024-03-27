import { SignInPageClient } from "@/components/sign-in";
import { getCurrentUser } from "@/lib/session";

export default async function SignInPage() {
  const user = await getCurrentUser();

  return <SignInPageClient user={user} />;
}
