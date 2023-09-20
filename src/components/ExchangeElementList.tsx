import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowSvg } from "./ArrowSvg";
import { CryptoText } from "./CryptoText";
import { CollapseArrowSvg } from "./CollapseArrowSvg";

import { ExchangeType } from "../types";

type ExchangeElementListProps = {
  exchange: ExchangeType;
};

export const ExchangeElementList: FC<ExchangeElementListProps> = ({
  exchange,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div
      className={` grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 border-b border-[#333333] pt-6 first-of-type:border-y lg:first-of-type:pt-3 pb-6 lg:py-3 items-center text-[#CECECE] lg:hover:bg-[#111] hover:text-white transition-colors`}
    >
      <span className="flex justify-between lg:col-span-3">
        <Link href={exchange.url} target="_blank" className="flex items-center">
          <Image
            src={exchange.iconPath}
            alt={exchange.name}
            width={32}
            height={32}
            priority
            className="border-[#1D1D1D] border rounded-lg mr-2"
          />
          <CryptoText text={exchange.name} />
        </Link>
        <CollapseArrowSvg
          className={`w-[24px] lg:hidden ${!isCollapsed && "rotate-180"}`}
          onClick={() => setIsCollapsed(!isCollapsed)}
        />
      </span>
      <span
        className={`lg:col-span-3 text-[#95959f] ${
          isCollapsed && "hidden lg:block"
        }`}
      >
        <span className="col-span-3 text-xs text-[#95959f] font-mono block lg:hidden mb-2">
          Documentos
        </span>
        {exchange.docs.url ? (
          <Link
            href={exchange.docs.url}
            target="_blank"
            rel="noreferrer"
            className="underline text-[#CECECE] flex gap-1"
          >
            <CryptoText text={exchange.docs.text} />
            <ArrowSvg className="w-4 flex-shrink-0" />
          </Link>
        ) : (
          exchange.docs.text
        )}
      </span>

      <span
        className={`lg:col-span-2 ${isCollapsed && "hidden lg:block"} ${
          !exchange.last_update ? "text-[#95959f]" : ""
        }}`}
      >
        <span className="col-span-3 text-xs text-[#95959f] font-mono block lg:hidden mb-2">
          Última actualización
        </span>
        {exchange.last_update ? exchange.last_update : "-"}
      </span>

      <span
        className={`lg:col-span-4 text-[#95959f] ${
          isCollapsed && "hidden lg:block"
        }`}
      >
        <span className="col-span-3 text-xs text-[#95959f] font-mono block lg:hidden mb-2">
          Estado
        </span>
        {exchange.notes ? (
          exchange.notes.url ? (
            <a
              href={exchange.notes.url}
              target="_blank"
              rel="noreferrer"
              className="underline text-[#CECECE] flex gap-1"
            >
              <CryptoText text={exchange.notes.text} />
              <ArrowSvg className="w-4 flex-shrink-0" />
            </a>
          ) : (
            exchange.notes.text
          )
        ) : (
          "-"
        )}
      </span>
    </div>
  );
};
