import { DB } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await DB.snippet.findMany();

  const renderSnippet = snippets.map((snippet) => {
    return (
      <Link
        href={`/snippets/${snippet.id}`}
        key={snippet.id}
        className="flex justify-between items-center p-2 border rounded"
      >
        <div>{snippet.title}</div>
        <div>View</div>
      </Link>
    );
  });

  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link href="/snippets/new" className="p-2 border rounded">
          New
        </Link>
      </div>
      <div className="flex flex-col gap-2">{renderSnippet}</div>
    </div>
  );
}
