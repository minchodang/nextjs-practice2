import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>hello </h1>
      <button>
        <Link href="/about">about</Link>
      </button>
    </>
  );
}
