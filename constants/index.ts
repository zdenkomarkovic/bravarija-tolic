import { IconType } from "react-icons";
import { GrStatusGood } from "react-icons/gr";
import { TbRulerMeasure2 } from "react-icons/tb";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineBorderColor } from "react-icons/md";
import { IoConstructOutline } from "react-icons/io5";
import { GiTireIronCross } from "react-icons/gi";
import { GiGate } from "react-icons/gi";
import { Gi3dStairs } from "react-icons/gi";
import { FaPersonShelter } from "react-icons/fa6";
import { PiPicnicTable } from "react-icons/pi";
import { LiaIndustrySolid } from "react-icons/lia";

export const navList = [
  {
    title: "Početna",
    link: "/",
  },
  {
    title: "Proizvodi",
    list: [
      {
        title: "Proizvodi",
        link: "/proizvodi",
      },
      {
        title: "Čelične konstrukcije",
        link: "/proizvodi#celicnekonstrukcije",
      },
      {
        title: "Stepeništa",
        link: "/proizvodi#stepenista",
      },
      {
        title: "Ograde",
        link: "/proizvodi#ograde",
      },
      {
        title: "Rasveta i dekoracija",
        link: "/proizvodi#rasveta",
      },
    ],
  },

  {
    title: "Kontakt",
    link: "/kontakt",
  },
];

export interface Cards1Data {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const cards1Data: Cards1Data[] = [
  {
    id: 1,
    icon: GrStatusGood,
    title: "Kvalitetni materijali",
    text: "Koristimo isključivo visokokvalitetne metale i premaze otporne na vremenske uslove.",
  },
  {
    id: 2,
    icon: TbRulerMeasure2,
    title: "Precizna izrada",
    text: "Svaki element prolazi kroz strogu kontrolu kvaliteta kako bismo osigurali dug vek trajanja.",
  },
  {
    id: 3,
    icon: MdOutlineBorderColor,
    title: "Prilagođena rešenja",
    text: "Radimo isključivo po narudžbini, omogućavajući klijentima da biraju dizajn, dimenzije i završnu obradu.",
  },
  {
    id: 4,
    icon: GrUserExpert,
    title: "Iskustvo i stručnost",
    text: "Naš tim čine iskusni inženjeri i majstori sa bogatim portfoliom realizovanih projekata.",
  },
];

export interface Cards2Data {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const cards2Data: Cards2Data[] = [
  {
    id: 1,
    icon: GiTireIronCross,
    title: "Čelične konstrukcije",
    text: "Projektovanje i izrada čeličnih konstrukcija za stambene, poslovne i industrijske objekte.",
  },
  {
    id: 2,
    icon: IoConstructOutline,
    title: "Kovane i moderne ograde",
    text: "Izrada unikatnih kovanih ograda sa dekorativnim detaljima, kao i minimalističkih modernih ograda.",
  },
  {
    id: 3,
    icon: GiGate,
    title: "Kapije (klizne i klasične)",
    text: "Projektujemo i izrađujemo klizne, krilne i automatske kapije za dvorišta, poslovne objekte i industrijske komplekse.",
  },
  {
    id: 4,
    icon: Gi3dStairs,
    title: "Stepeništa i rukohvati",
    text: "Izrada unutrašnjih i spoljašnjih metalnih stepeništa, rukohvata i gelendera.",
  },
  {
    id: 5,
    icon: FaPersonShelter,
    title: "Nadstrešnice i pergole",
    text: "Izrada nadstrešnica za ulaze, parkinge, terase i balkone, kao i čeličnih pergola za dvorišne prostore.",
  },
  {
    id: 6,
    icon: PiPicnicTable,
    title: "Metalni nameštaj i dekorativni elementi",
    text: "Izrađujemo industrijski nameštaj, dekorativne panele, police, stolove i druge unikatne metalne elemente za enterijere i eksterijere.",
  },
  {
    id: 7,
    icon: LiaIndustrySolid,
    title: " Industrijska i građevinska bravarija",
    text: "Izrada raznih metalnih komponenti za industrijske objekte, hale, skladišta i građevinske projekte.",
  },
];

export interface Cards2DataText {
  text: string;
}
export const cards2DataText: Cards2DataText = {
  text: "Bravarija Tolić nudi širok spektar bravarskih i metalskih usluga, prilagođenih različitim potrebama klijenata. Svaki projekat izrađujemo po meri, vodeći računa o kvalitetu, estetici i dugotrajnosti.",
};

export const konstrukcije: string[] = [
  "/konstrukcija.jpg",
  "/konstrukcija (2).jpg",
  "/konstrukcija (3).jpg",
  "/konstrukcija (4).jpg",
  "/konstrukcija (5).jpg",
  "/konstrukcija (6).jpg",
  "/konstrukcija (7).jpg",
  "/konstrukcija (8).jpg",
];
export const ograde: string[] = [
  "/ograde.jpg",
  "/ograde (2).jpg",
  "/ograde (3).jpg",
];
export const stepenice: string[] = ["/stepenice.jpg", "/stepenice (2).jpg"];
export const rasveta: string[] = ["/rasveta.jpg", "/rasveta (2).jpg"];
