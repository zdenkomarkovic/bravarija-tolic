import ImageEditor from "@/components/ImageEditor";
import { konstrukcije, ograde, rasveta, stepenice } from "@/constants/index";
import React from "react";

const page = () => {
  return (
    <div className="py-24">
      <div className="container px-2 md:px-4 mx-auto  space-y-3 md:space-y-12">
        <h1 className="font-bold text-2xl md:text-6xl text-primary flex flex-col  text-center">
          Naši proizvodi – Kvalitet i preciznost
        </h1>
        <p className=" first-letter:pl-6 text-lg md:text-3xl">
          Bravarija Tolić izrađuje čelične konstrukcije, ograde, kapije,
          stepeništa, rukohvate, nadstrešnice, pergole, metalni nameštaj i
          industrijsku bravariju. Naši proizvodi kombinuju vrhunski kvalitet,
          dugotrajnost i moderan dizajn.
        </p>
        <p className=" first-letter:pl-6 text-lg md:text-3xl">
          Nudimo kovane i moderne ograde, klizne i krilne kapije, kao i metalna
          stepeništa i rukohvate prilagođene vašem prostoru. Takođe izrađujemo
          nadstrešnice i pergole za zaštitu terasa i ulaza, kao i industrijsku
          bravariju za hale i skladišta.
        </p>
        <div
          id="celicnekonstrukcije"
          className="pt-10 md:pt-20 space-y-3 md:space-y-12"
        >
          <h2 className="font-bold text-2xl md:text-5xl text-primary flex flex-col  text-center">
            Čelične konstrukcije – Sigurnost i dugotrajnost
          </h2>
          <p className=" first-letter:pl-6 text-lg md:text-3xl">
            Bravarija Tolić izrađuje čelične konstrukcije visokog kvaliteta,
            prilagođene stambenim, poslovnim i industrijskim objektima. Naše
            konstrukcije su izdržljive, stabilne i otporne na vremenske uslove,
            idealne za hale, nadstrešnice, magacine i druge objekte.
          </p>
          <p className=" first-letter:pl-6 text-lg md:text-3xl">
            Koristimo proverene materijale i precizne metode obrade, garantujući
            dug vek trajanja i sigurnost. Svaka konstrukcija izrađuje se po
            meri, prema vašim potrebama i tehničkim zahtevima.
          </p>{" "}
          <ImageEditor images={konstrukcije} />
        </div>

        <div id="stepenista" className="pt-10 md:pt-20 space-y-3 md:space-y-12">
          <h2 className="font-bold text-2xl md:text-5xl text-primary flex flex-col  text-center">
            Stepeništa – Sigurnost, funkcionalnost i stil
          </h2>
          <p className=" first-letter:pl-6 text-lg md:text-3xl">
            Bravarija Tolić izrađuje metalna stepeništa koja kombinuju čvrstoću,
            dugotrajnost i moderan dizajn. Naša stepeništa su idealna za
            stambene, poslovne i industrijske objekte, prilagođena vašim
            potrebama i estetskim zahtevima.
          </p>
          <p className=" first-letter:pl-6 text-lg md:text-3xl">
            Nudimo rešenja za unutrašnja i spoljašnja stepeništa, uz mogućnost
            kombinacije metala, drveta, stakla ili inoxa. Svaki projekat
            izrađujemo precizno, garantujući stabilnost, sigurnost i dug vek
            trajanja.
          </p>{" "}
          <ImageEditor images={stepenice} />
        </div>
        <div id="ograde" className="pt-10 md:pt-20 space-y-3 md:space-y-12">
          <h2 className="font-bold text-2xl md:text-5xl text-primary flex flex-col  text-center">
            Ograde – Sigurnost i estetika
          </h2>
          <p className=" first-letter:pl-6 text-lg md:text-3xl">
            Bravarija Tolić izrađuje kovane, moderne i klasične ograde koje
            kombinuju trajnost, funkcionalnost i atraktivan dizajn. Naše ograde
            su idealne za dvorišta, balkone, terase i poslovne objekte,
            pružajući zaštitu i estetski doprinos svakom prostoru.
          </p>
          <p className=" first-letter:pl-6 text-lg md:text-3xl">
            Koristimo kvalitetne materijale i precizne tehnike obrade,
            omogućavajući prilagođavanje dizajna, dimenzija i završne obrade
            prema vašim željama.
          </p>{" "}
          <ImageEditor images={ograde} />
        </div>
        <div id="rasveta" className="pt-10 md:pt-20 space-y-3 md:space-y-12">
          <h2 className="font-bold text-2xl md:text-5xl text-primary flex flex-col  text-center">
            Rasveta i dekoracija – Unikatni detalji za vaš prostor
          </h2>
          <p className=" first-letter:pl-6 text-lg md:text-3xl">
            Bravarija Tolić izrađuje metalne elemente rasvete i dekoracije koji
            unose stil i eleganciju u svaki prostor. Naša ponuda uključuje
            industrijske i moderne lampe, osvetljenje za eksterijere, unikatne
            metalne dekoracije i ukrasne panele.
          </p>
          <p className=" first-letter:pl-6 text-lg md:text-3xl">
            Koristimo visokokvalitetne materijale i preciznu izradu,
            omogućavajući personalizovane dizajne prilagođene vašim željama.
            Idealni su za domove, poslovne prostore i ugostiteljske objekte,
            pružajući spoj funkcionalnosti i estetike.
          </p>{" "}
          <ImageEditor images={rasveta} />
        </div>
      </div>
    </div>
  );
};

export default page;
