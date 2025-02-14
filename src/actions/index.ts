"use server";

import { DB } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createSnippet = async (
  actionState: { message: string },
  formData: FormData
) => {
  try {
    // Check the user's inputs and make sure they're valid
    const title = formData.get("title");
    const code = formData.get("code");

    if (typeof title !== "string" || title.length < 3) {
      return {
        message: "Title must be longer!",
      };
    }

    if (typeof code !== "string" || code.length === 0) {
      return {
        message: "Code must be longer!",
      };
    }

    // Create a new snippet in the database
    await DB.snippet.create({
      data: {
        title,
        code,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        message: error.message,
      };
    } else {
      return {
        message: "Something went wrong!",
      };
    }
  }

  // Used to revalidate once the snippet is created, so changes can be cached and displayed
  revalidatePath("/");
  // Redirect the user to the root page
  redirect("/");
};

export const editSnippet = async (id: number, code: string) => {
  await DB.snippet.update({
    where: { id },
    data: { code },
  });

  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
};

export const deleteSnippet = async (id: number) => {
  await DB.snippet.delete({
    where: { id },
  });

  revalidatePath("/");
  redirect("/");
};
