import About2 from "@/components/About2";
import BackgroundImage from "@/components/BackgroundImage";
import Cardlist from "@/components/Cardlist";
import Cards1 from "@/components/Cards1";
import Cards2 from "@/components/Cards2";
import Cards2Kosina from "@/components/Cards2Kosina";
import CardWithImage from "@/components/CardWithImage";
import HeroOneImg from "@/components/HeroOneImg";
import PozoviteNasOdmah from "@/components/PozoviteNasOdmah";
import PozoviteNasOdmahImage from "@/components/PozoviteNasOdmahImage";
import Testemonials from "@/components/Testimonials";
import { cards1Data, cards2Data, cards2DataText } from "@/constants/index";

export default function Home() {
  return (
    <div className="">
      <HeroOneImg />
      <About2 image={"/about.jpg"} altText={"bravarija tolic"} />
      <PozoviteNasOdmah />
      <CardWithImage />
      <BackgroundImage image={"/bgImage2.jpg"} altText={"bravarija tolic"} />
      <Cards1 title={"dodaj naslov"} data={cards1Data} />
      <Cards2
        title={"Elektroinstalacije i elektro ormani"}
        data={cards2Data}
        text={cards2DataText}
      />

      <BackgroundImage image={"/bgImage.jpg"} altText={"bravarija tolic"} />
    </div>
  );
}
