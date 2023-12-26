import InfoBanner from "./components/info/InfoBanner";
import { nft_title, nft_preview } from "./components/info/InfoContent";
import MarketDescriptionComponent from "./components/info/MarketDescriptionComponent";
import PageTitle from "./components/PageTitle";
import { NFTCarousel } from "./components/NFT/Carousel/NFTCarousel";
import { NFTCatCarousel } from "./components/NFT/Carousel/NFTCatCarousel";
import { Ranking } from "./components/NFT/NFTStats/Ranking";
import { ShowCase } from "./components/NFT/PrimaryComponent/ShowCase";

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

      <NFTCarousel />

    </main>
  );
}
