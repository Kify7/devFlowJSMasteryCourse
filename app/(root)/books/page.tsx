import React from "react";

async function Page() {
  const apiResponse = await fetch("http://localhost:3000/api/books");
  const books = await apiResponse.json();

  return (
    <main>
      <code>{JSON.stringify(books, null, 2)}</code>
    </main>
  );
}

export default Page;
