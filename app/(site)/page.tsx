'use client';

import { useRouter } from 'next/navigation';
import Fetch from "@/components/fetch";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Place location here</p>
      <h1>Fetch API data and place the temperature here</h1>
      <p>Fetch the API data and place the kind of weather here (kind as in mostly sunny etc.)</p>
      <Fetch />
      <button type="button" onClick={() => router.push('/start')} ></button>
    </main>
  );
}
