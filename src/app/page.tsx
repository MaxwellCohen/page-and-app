import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hi from app dir
      <div>
        <Link href="/about">About is an app router page</Link>

      </div>
      <div>
        everything else is a page router <br></br>
        <Link href="/test">test  is a page router page</Link>
      </div>
    </div>
  );
}
