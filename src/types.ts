import { StaticImageData } from 'next/image';

export type ExchangeType = {
    name: string;
    iconPath: StaticImageData;
    url: string;
    docs: {
        text: string;
        url?: string;
    };
    last_update?: string;
    notes?: {
        text: string;
        url?: string;
    };
}

export type ExchangesType = Array<ExchangeType>;

export type HomeProps = {
    exchanges: ExchangesType;
};