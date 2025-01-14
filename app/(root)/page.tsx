import Image from "next/image";
import Hello from "../components/hello";

export default async function Home() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  if (!response.ok) throw new Error("Failed to fetch api data");
  const characters = await response.json();

  console.log("Which component am I?");

  return (
    <main>
      <h1 className="font-bold font-inter text-3xl">Home characters</h1>
      <Hello />
      {characters.results.map(
        (char: { id: string; name: string; image: string }) => (
          <div key={char.id}>
            <h4 className="text-lg font-space-grotesk">{char.name}</h4>
            <Image src={char.image} width={200} height={200} alt={char.name} />
          </div>
        )
      )}
    </main>
  );
}
