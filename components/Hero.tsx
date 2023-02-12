import Image from 'next/image';
import React from 'react';
import start from '../public/img/Img.svg';
import elip from '../public/img/Ellipse 1.svg';
import nux from '../public/img/Nuxdsgn.svg';

export default function Hero() {
    return (
        <div>
            <div className="px-8 inline-flex">
                <h1 className="uppercase text-9xl font-extrabold">
                    super branding <br /> and creative <br /> ideas
                    <span>
                        <Image
                            src={start}
                            className="h-15 inline-flex align-baseline ml-6 "
                        ></Image>
                        <p className="text-sm w-60 font-semibold inline-flex pt-3 ml-6 align-top">
                            <span>
                                Nux Design creates distinctive brands, gorgeous
                                websites, and campaigns that deviate from the
                                ordinary.
                            </span>
                        </p>
                    </span>
                </h1>
            </div>
            <div>
                <ul className="flex border flex-nowrap bg-black text-white font-normal text-3xl gap-4 overflow-hidden ">
                    <li>UIDESIGN</li>
                    <Image src={elip}></Image>
                    <li>WEBFLOW</li>
                    <Image src={elip}></Image>
                    <li>USERRESAERCH</li>
                    <Image src={elip}></Image>
                    <li>ILLUSTRATION</li>
                    <Image src={elip}></Image>
                    <li>DIGITALMARKETING</li>
                    <Image src={elip}></Image>
                    <li>BRANDING</li>
                </ul>
                <div className="bg-yellow-400">
                    <Image src={nux} className="w-[1373px] "></Image>
                </div>
            </div>
        </div>
    );
}
