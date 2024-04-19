'use client';

import { useRouter } from 'next/navigation';

const Start = () => {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Never get caught in the rain again</h1>
      <p>Stay ahead of the weather with our accurate forecasts</p>
      <button type="button" onClick={() => router.push('/start')} ></button>
    </main>
  );
};

export default Start;
