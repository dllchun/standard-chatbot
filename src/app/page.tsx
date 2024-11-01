// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to My Chat App</h1>
      {/* Links to different sections */}
      <div className="space-x-4">
        <Link href="/playground">
          <span className="text-blue-500 hover:underline cursor-pointer">
            Go to Playground
          </span>
        </Link>
        <Link href="/chat-log">
          <span className="text-blue-500 hover:underline cursor-pointer">
            Go to Chat Log
          </span>
        </Link>
        <Link href="/analytics">
          <span className="text-blue-500 hover:underline cursor-pointer">
            Go to Analytics
          </span>
        </Link>
      </div>
    </main>
  );
}
