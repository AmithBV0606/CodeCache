import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-4xl pb-2 block border-b-2 border-gray-600">Home</h1>

      <div className="flex items-center justify-between mt-4">
        <h1 className="text-xl font-semibold">Snippets</h1>

        <Link href={"/snippet/new"}>
          <Button className="cursor-pointer">Add New Snippet</Button>
        </Link>
      </div>
    </div>
  );
}