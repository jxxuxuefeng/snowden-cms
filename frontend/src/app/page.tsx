import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center flex-col">
        <div className="font-medium text-8xl text-blue-500">HOME</div>
        <div className="mt-16">
          <Link href="/admin">Login</Link>
        </div>
      </div>
    </>
  );
}
