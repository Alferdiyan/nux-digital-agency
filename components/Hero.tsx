import Image from 'next/image';
import React from 'react';
import start from '../public/img/Img.svg';

export default function Hero() {
    return (
        <div className="px-8 border inline-flex">
            <h1 className="uppercase text-9xl font-extrabold">
                super branding and creative ideas
                <span>
                    <Image
                        src={start}
                        className="h-15 border   inline-flex align-baseline ml-6 "
                    ></Image>
                    <p className="text-sm w-60 font-semibold inline-flex border pt-3 ml-6 align-top">
                        <span>
                            Nux Design creates distinctive brands, gorgeous
                            websites, and campaigns that deviate from the
                            ordinary.
                        </span>
                    </p>
                </span>
            </h1>
        </div>
    );
}
