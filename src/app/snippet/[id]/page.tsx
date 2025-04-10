import { deleteSnippet } from "@/actions/action";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/script";
import Link from "next/link";
import React from "react";
import { notFound } from "next/navigation";

export default async function ViewSnippetPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  //   const { id } = await params;
  const id = (await params).id;

  await new Promise((r) => setTimeout(r, 2000));

  const snippet = await prisma.snippet.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!snippet) {
    // return (
    //   <div className="h-screen w-full flex justify-center items-center">
    //     <p className="text-2xl font-bold">No snippet found!!</p>
    //   </div>
    // );
    notFound();
  }

  const deleteSnippetAction = deleteSnippet.bind(null, snippet.id);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Title : {snippet.title}</h1>

        <Link href={"/"}>
          <Button variant={"default"} className="cursor-pointer">
            Home
          </Button>
        </Link>
      </div>

      <div className="w-full bg-[#EBEBEB] border border-gray-700 rounded-sm h-auto p-2 min-h-60">
        <pre>
          <code>{snippet.code}</code>
        </pre>
      </div>

      <div className="space-x-3 flex">
        <Link href={`/snippet/${snippet.id}/edit`} className="cursor-pointer">
          <Button variant={"default"}>Edit</Button>
        </Link>

        <form action={deleteSnippetAction}>
          <Button
            type="submit"
            variant={"destructive"}
            className="cursor-pointer"
          >
            Delete
          </Button>
        </form>
      </div>
    </div>
  );
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const snippets = await prisma.snippet.findMany();

  // 2, 11, 12, 13
  return snippets.map((snippet) => {
    return { id: snippet.id.toString() };
  });
}