import Image from "next/image";
import styles from "./page.module.css";
import MainCarousel from "./components/NFT/Carousel/MainCarousel";
import InfoBanner from "./components/info/InfoBanner";
import { nft_title, nft_preview } from "./components/info/InfoContent";
import MarketDescriptionComponent from "./components/info/MarketDescriptionComponent";
import PageTitle from "./components/PageTitle";
import { NFTCarousel } from "./components/NFT/Carousel/NFTCarousel";
import { NFTCatCarousel } from "./components/NFT/Carousel/NFTCatCarousel";
import { MainFilter } from "./components/NFT/Filters/MainFilter";
import { Ranking } from "./components/NFT/NFTStats/Ranking";
import { ShowCase } from "./components/NFT/PrimaryComponent/ShowCase";
import SafeHydrate from "./components/SafeHydrate";

export default function Home() {
  return (
    <main>

      <InfoBanner title={nft_title} preview={nft_preview}>
        <MarketDescriptionComponent />
      </InfoBanner>
      <PageTitle title="Accessible NFT Marketplace" />

        <ShowCase />

      <Ranking />
      <NFTCatCarousel />
      <MainFilter />

      <NFTCarousel />

    </main>
  );
}
