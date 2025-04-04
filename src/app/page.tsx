import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/script";
import { SnippetType } from "@/lib/types";
import Link from "next/link";

export default async function Home() {
  const snippets: SnippetType[] = await prisma.snippet.findMany();

  return (
    <div className="min-h-screen">
      <h1 className="font-bold text-4xl pb-2 block border-b-2 border-gray-600">
        Home
      </h1>

      <div className="flex items-center justify-between mt-4">
        <h1 className="text-xl font-semibold">Snippets</h1>

        <Link href={"/snippet/new"}>
          <Button className="cursor-pointer">Add New Snippet</Button>
        </Link>
      </div>

      <div className="h-screen border border-gray-700 mt-6 rounded-lg p-4">
        {snippets.map((snippet) => (
          <div
            key={snippet.id}
            className="bg-[#EBEBEB] border border-gray-700 w-full rounded-lg p-2 flex items-center justify-between px-10 mt-2"
          >
            <span className="">
              <span className="text-xl font-semibold">Title : </span>
              {snippet.title}
            </span>

            <Link href={`/snippet/${snippet.id}`}>
              <Button variant={"default"} className="cursor-pointer">
                View
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}