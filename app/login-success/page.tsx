import { SessionInfo } from "@/components/session-info";

export default function LoginSuccessPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex items-center justify-center border border-black">
        <h3 className="text-2xl font-bold">Login Success page</h3>
        <SessionInfo />
      </div>
    </main>
  );
}
