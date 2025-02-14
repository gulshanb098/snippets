import { DB } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import * as actions from "@/actions";

interface Props {
  params: Promise<{ id: string }>;
}

const SnippetShowPage = async (props: Props) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const { id } = await props.params;

  // Fetch the snippet from the database
  const snippet = await DB.snippet.findFirst({
    where: {
      id: parseInt(id),
    },
  });

  if (!snippet) {
    return notFound();
  }

  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link href={`/snippets/${id}/edit`} className="p-2 border rounded">
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button className="p-2 border rounded">Delete</button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default SnippetShowPage;

// The generateStaticParams function is created to enable static site generation (SSG) for dynamic routes for [id] -> snippets/1, snippets/2, etc.
export const generateStaticParams = async () => {
  const snippets = await DB.snippet.findMany();

  return snippets.map((snippet) => {
    return {
      id: snippet.id.toString(),
    };
  });
};
