import { DB } from "@/db";
import SnippetEditForm from "@/components/snippet-edit-form";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: Promise<{ id: string }>;
}

const SnippetEditPage = async (props: Props) => {
  const { id } = await props.params;

  const snippet = await DB.snippet.findFirst({
    where: {
      id: parseInt(id),
    },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
};

export default SnippetEditPage;
