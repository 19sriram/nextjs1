import Image from "next/image";
import { getData } from "./lib/getData";

export default async function Home() {
  const users = await getData();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h3>Lists</h3>

        {users.map((u: any) => (
          <li key={u.id}>
            {u.name}
          </li>
        ))}
      </main>
    </div>
  );
}
