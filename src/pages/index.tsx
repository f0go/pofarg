import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Space_Mono, Roboto } from "next/font/google";

import { ExchangesType, HomeProps } from "../types";

import { CryptoText } from "@/components/CryptoText";
import { ChevronSvg } from "@/components/ChevronSvg";

import { getLocalData } from "../lib/localData";
import { orderFunction } from "@/utils/utils";
import { ExchangeElementList } from "@/components/ExchangeElementList";

const space_mono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

export async function getStaticProps() {
  const exchanges: ExchangesType = await getLocalData();
  return {
    props: {
      exchanges,
    },
  };
}

export default function Home({ exchanges }: HomeProps) {
  const [order, setOrder] = useState<"asc" | "desc">("desc");

  const orderedExchanges = exchanges.sort(orderFunction(order));

  return (
    <>
      <Head>
        <title>Proof of Funds - Argentina</title>
      </Head>
      <main
        className={`font-mono min-h-screen max-w-screen-2xl mx-auto p-5 lg:p-8 pb-12 ${space_mono.variable} ${roboto.variable}`}
      >
        <header className=" grid grid-cols-1 lg:grid-cols-12 gap-6 text-[#F5F5F7]">
          <h1 className="text-2xl col-span-1 lg:col-span-3">PR00F OF FUNDS</h1>
          <h2 className="col-span-1 lg:col-span-5">
            <CryptoText
              hard
              text="LISTADO DE EXCHANGES ARGENTINOS DE CRIPTOMONEDAS Y SUS INFORMES DE TRANSPARENCIA"
            />
          </h2>
          <a
            href="/"
            className="sol w-[64px] lg:w-[96px] order-first lg:order-last lg:col-start-12 col-span-1 lg:col-span-2"
          >
            <div className="normal">
              <Image
                src="/img/sol.svg"
                alt="Argentina"
                width={96}
                height={96}
                priority
              />
            </div>
            <div className="wink">
              <Image
                src="/img/sol_guino.svg"
                alt="Argentina"
                width={96}
                height={96}
                priority
              />
            </div>
          </a>
        </header>

        <section className="mt-10 lg:mt-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-4">
            <span className="text-xs lg:col-span-3 text-[#95959f]">
              Exchange
            </span>
            <span className="text-xs col-span-3 text-[#95959f] hidden lg:block">
              Documentos
            </span>
            <span className="text-xs col-span-2 text-[#95959f] hidden lg:flex lg:gap-1 lg:items-center">
              Actualizado
              <ChevronSvg
                className={`w-5 flex-shrink-0 flex items-center cursor-pointer ${
                  order === "asc" && "rotate-180"
                }`}
                onClick={() => setOrder(order === "asc" ? "desc" : "asc")}
              />
            </span>
            <span className="text-xs col-span-4 text-[#95959f] hidden lg:block">
              Estado
            </span>
          </div>

          <div className="font-roboto">
            {orderedExchanges.map((exchange, index) => (
              <ExchangeElementList key={index} exchange={exchange} />
            ))}
          </div>
        </section>

        <footer className="mt-[48px] lg:mt-36 lg:flex lg:justify-between text-[#6E6E73]">
          <p className="text-[12px] leading-[14px]">
            <span>
              Agradecimientos a{" "}
              <a
                href="https://twitter.com/facumontanaro_"
                target="_blank"
                rel="noreferrer"
                className="underline inline-flex gap-1"
              >
                Facu Montanaro
              </a>{" "}
              por el diseño,{" "}
            </span>
            <span className="lg:block">
              <a
                href="https://twitter.com/AndreusCafe"
                target="_blank"
                rel="noreferrer"
                className="underline inline-flex gap-1"
              >
                Andrés Tonello
              </a>{" "}
              y{" "}
              <a
                href="https://twitter.com/_LautaroLopez"
                target="_blank"
                rel="noreferrer"
                className="underline inline-flex gap-1"
              >
                Lautaro López
              </a>{" "}
              por la implementación.
            </span>
          </p>
          <p className="text-[12px] leading-[14px] mt-[20px] lg:mt-0">
            Si queres colaborar con algún dato, escribime a{" "}
            <a
              href="https://twitter.com/f0go"
              target="_blank"
              rel="noreferrer"
              className="underline inline-flex gap-1"
            >
              @f0go
            </a>
          </p>
        </footer>
      </main>
    </>
  );
}
