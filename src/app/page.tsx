import Link from "next/link";

export default function Home() {
  //const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      Hier entsteht etwas wirklich schönes! Bis dahin arbeite ich noch an der <Link href="/api/">API</Link>
    </main>
  );
}

