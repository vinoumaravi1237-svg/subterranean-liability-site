import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{width:"100%",background:"#111",color:"#fff",padding:"12px 24px",display:"flex",gap:16,justifyContent:"center",fontWeight:600}}>
      <Link href="/">Home</Link>
      <Link href="/geotechnical">Geotechnical</Link>
      <Link href="/environmental">Environmental</Link>
      <Link href="/lcc">Life Cycle</Link>
      <Link href="/regression">Regression</Link>
    </nav>
  );
}
// pages/components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white px-8 py-4 flex gap-8 justify-center text-lg font-medium">
      <Link href="/">Home</Link>
      <Link href="/geotechnical">Geotechnical Liability</Link>
      <Link href="/environmental">Environmental Liability</Link>
      <Link href="/lcc">Life Cycle Liability</Link>
      <Link href="/regression">Regression Model</Link>
      <Link href="/conclusion">Conclusion</Link>
    </nav>
  );
}
// pages/components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white px-8 py-4 flex gap-8 justify-center text-lg font-medium">
      <Link href="/">Home</Link>
      <Link href="/geotechnical">Geotechnical</Link>
      <Link href="/environmental">Environmental</Link>
      <Link href="/lcc">Life Cycle</Link>
      <Link href="/regression">Regression</Link>
      <Link href="/conclusion">Conclusion</Link>
    </nav>
  );
}
