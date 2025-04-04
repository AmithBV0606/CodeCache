import { deleteSnippet } from "@/actions/action";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/script";
import Link from "next/link";
import React from "react";

export default async function ViewSnippetPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  //   const { id } = await params;
  const id = (await params).id;

  const snippet = await prisma.snippet.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!snippet) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <p className="text-2xl font-bold">No snippet found!!</p>
      </div>
    );
  }

  const deleteSnippetAction = deleteSnippet.bind(null, snippet.id);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Title : {snippet.title}</h1>

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
          <Button type="submit" variant={"destructive"} className="cursor-pointer">
            Delete
          </Button>
        </form>
      </div>
    </div>
  );
}