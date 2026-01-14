import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cream">
      <h2 className="text-3xl font-dancing text-terracotta">Page Not Found</h2>
      <Link href="/" className="mt-4 text-woodBrown underline">
        Return Home
      </Link>
    </div>
  );
}
