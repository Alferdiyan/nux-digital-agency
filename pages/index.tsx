import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Service from '../components/Service';
import bgnoise from '../public/img/BgNoise.png';

export default function Home() {
    return (
        <div className="">
            <Head>
                <title>Nux - Studi Agency Landing Page</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Navbar />
                <Hero />
                <Service />
                {/* <Project/> */}
                {/* <WorldClient/> */}
                {/* <AboutUs/> */}
                {/* <Testimonial/> */}
                {/* <CTA/> */}
                {/* <Contact/> */}
            </main>

            <footer className="">
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className="">
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            width={72}
                            height={16}
                        />
                    </span>
                </a>
            </footer>
        </div>
    );
}
