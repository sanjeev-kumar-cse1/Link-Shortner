import Image from "next/image";
// import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import Link from "next/link";



const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="text-3xl font-bold">The best URL shortener in the market</p>
          <p className="px-56 ">We are the most straight-forward URL shortener in the world. Most of the URL shortners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener </p>
          <div className='flex gap-3 justify-start'>
            <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Try Now</button></Link>
            <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>GitHub</button></Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" alt="an Image of a vector" src="/vector.jpg" fill={true} />
        </div>
      </section>
    </main>
  );
}
