"use server";

import { prisma } from "@/lib/script";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Create operation :
export async function createSnippet(
  prevState: { message: string },
  formData: FormData
) {
  try {
    const title = formData.get("title");
    const code = formData.get("code");

    if (typeof title !== "string" || title.length < 4) {
      return { message: "Title is required and must be longer" };
    }

    if (typeof code !== "string" || code.length < 8) {
      return { message: "Code is required and must be longer" };
    }

    const snippet = await prisma.snippet.create({
      data: {
        title,
        code,
      },
    });

    if (!snippet) {
      throw new Error("Unable to connect to our database!!");
    }

    revalidatePath("/");
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message };
    } else {
      return { message: "Some internal server error" };
    }
  }

  redirect("/");
}

// Update operation :
export async function updateSnippet(id: number, title: string, code: string) {
  await prisma.snippet.update({
    where: {
      id,
    },
    data: {
      title,
      code,
    },
  });

  revalidatePath(`/snippet/${id}`);
  redirect(`/snippet/${id}`);
}

// Delete operation :
export async function deleteSnippet(id: number) {
  await prisma.snippet.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/");
  redirect("/");
}