'use client';

import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Benefits from '@/components/Benefits';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>FinansPro - Leasing i Dotacje dla Przedsiębiorców</title>
        <meta name="description" content="Kompleksowe wsparcie finansowe dla przedsiębiorców. Pomożemy Ci uzyskać leasing oraz dotacje unijne na rozwój Twojej firmy." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="leasing, dotacje, finansowanie, przedsiębiorcy, leasing operacyjny, dotacje unijne" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
