import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center mt-[18%] h-screens">
      <h2 className="text-4xl text-red-600">Not Found posts</h2>
      <p className="m-4 text-xl text-black">
        Could not find requested resource
      </p>
      <Link className="px-4 py-2 m-4 bg-yellow-700 rounded-full " href="/">
        Return Home
      </Link>
    </div>
  );
}
