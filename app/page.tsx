import { SessionInfo } from "@/components/session-info";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex items-center justify-center border border-black">
        <SessionInfo />
      </div>
    </main>
  );
}
