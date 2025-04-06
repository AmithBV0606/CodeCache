import CodeEditor from "@/components/code-editor";
import { prisma } from "@/lib/script";

export default async function EditSnippetPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // console.log("ID is :", id);

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

  return <CodeEditor snippet={snippet} />;
}