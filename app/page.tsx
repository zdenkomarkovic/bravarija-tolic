import About2 from "@/components/About2";
import BackgroundImage from "@/components/BackgroundImage";
import Cards1 from "@/components/Cards1";
import Cards2 from "@/components/Cards2";
import HeroOneImg from "@/components/HeroOneImg";
import PozoviteNasOdmah from "@/components/PozoviteNasOdmah";
import { cards1Data, cards2Data, cards2DataText } from "@/constants/index";

export default function Home() {
  return (
    <div className="">
      <HeroOneImg />
      <About2 image={"/about.jpg"} altText={"bravarija tolic"} />
      <PozoviteNasOdmah />
      <Cards2
        title={"Tolić Inženjering - usluge"}
        data={cards2Data}
        text={cards2DataText}
      />
      <BackgroundImage image={"/bgImage2.jpg"} altText={"bravarija tolic"} />
      <Cards1 title={"Zašto odabrati nas?"} data={cards1Data} />

      <BackgroundImage image={"/bgImage.jpg"} altText={"bravarija tolic"} />
    </div>
  );
}
