import About2 from "@/components/About2";
import BackgroundImage from "@/components/BackgroundImage";
import Cards1 from "@/components/Cards1";
import Cards2 from "@/components/Cards2";
import CardWithImage from "@/components/CardWithImage";
import HeroOneImg from "@/components/HeroOneImg";
import PozoviteNasOdmah from "@/components/PozoviteNasOdmah";
import { cards1Data, cards2Data, cards2DataText } from "@/constants/index";

export default function Home() {
  return (
    <div className="">
      <HeroOneImg />
      <About2 image={"/about.jpg"} altText={"bravarija tolic"} />
      <PozoviteNasOdmah />
      {/* <CardWithImage /> */}
      <BackgroundImage image={"/bgImage2.jpg"} altText={"bravarija tolic"} />
      <Cards1 title={"Zašto odabrati nas?"} data={cards1Data} />
      {/* <Cards2
        title={"Elektroinstalacije i elektro ormani"}
        data={cards2Data}
        text={cards2DataText}
      /> */}

      <BackgroundImage image={"/bgImage.jpg"} altText={"bravarija tolic"} />
    </div>
  );
}
