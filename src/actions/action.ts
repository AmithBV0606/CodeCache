"use server";

import { prisma } from "@/lib/script";
import { redirect } from "next/navigation";

// Create operation : 
export async function createSnippet(formData: FormData) {
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;

  const snippet = await prisma.snippet.create({
    data: {
      title,
      code,
    },
  });

  console.log(snippet);

  redirect("/");
}