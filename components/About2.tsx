"use client";
import Image from "@/node_modules/next/image";
import React from "react";
import { motion } from "framer-motion";

const About2 = ({ image, altText }: { image: string; altText: string }) => {
  return (
    <div>
      <div className="container px-2 md:px-4 py-0 md:py-20 mx-auto  space-y-3 md:space-y-12">
        <div className=" flex flex-col-reverse md:flex-row gap-6 md:gap-20 items-center">
          <motion.div
            initial={{ scale: 0.2, opacity: 0 }} // Naizmenično levo/desno
            whileInView={{ scale: 1, opacity: 1 }} // Animira se ka centru
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden  md:w-1/3"
          >
            <Image
              src={image}
              width={500}
              height={800}
              alt={altText}
              className="object-cover h-full mb-4 md:mb-0"
            />
          </motion.div>{" "}
          <div className=" md:w-2/3 space-y-3 md:space-y-12">
            <h2 className="text-4xl font-bold md:text-6xl text-primary flex flex-col  text-center">
              Bravarija Tolić
            </h2>
            <p className=" first-letter:pl-6 text-lg md:text-3xl">
              Bravarija Tolić je porodična firma sa dugogodišnjim iskustvom u
              izradi čeličnih konstrukcija, ograda, kapija, stepeništa i drugih
              bravarskih rešenja. Kroz godine rada stekli smo reputaciju
              pouzdanog partnera, poznatog po preciznosti, kvalitetu i
              profesionalizmu. Naš tim vrhunskih inženjera i majstora posvećen
              je svakom projektu, bez obzira na njegovu veličinu i kompleksnost.
            </p>
            <h3 className="text-3xl font-bold md:text-5xl text-primary">
              Šta radimo?
            </h3>
            <p className=" first-letter:pl-6 text-lg md:text-3xl">
              Specijalizovani smo za izradu čeličnih konstrukcija, kovanih i
              modernih ograda, kapija, stepeništa, nadstrešnica i drugih
              metalnih elemenata. Svaki proizvod izrađujemo po meri, u skladu sa
              željama klijenata i specifičnostima prostora. Naš cilj je da
              spojimo funkcionalnost i estetiku, pružajući rešenja koja su
              dugotrajna i vizuelno atraktivna.
            </p>
          </div>
        </div>
        <h3 className="text-3xl font-bold md:text-5xl text-primary">
          Naš pristup
        </h3>
        <p className="first-letter:pl-6 text-lg md:text-3xl">
          Verujemo da je svaki projekat jedinstven, zbog čega veliku pažnju
          posvećujemo dogovoru sa klijentima i prilagođavanju rešenja njihovim
          potrebama. Bez obzira na to da li vam je potrebna klasična kovana
          ograda, moderna čelična konstrukcija ili specijalizovano bravarsko
          rešenje, možete računati na našu posvećenost i profesionalizam.
        </p>
      </div>
    </div>
  );
};

export default About2;
