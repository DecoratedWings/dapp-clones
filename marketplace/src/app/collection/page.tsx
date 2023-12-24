import { NFTCarousel } from "../components/NFT/Carousel/NFTCarousel";
import { NFTCatCarousel } from "../components/NFT/Carousel/NFTCatCarousel";
import { MainFilter } from "../components/NFT/Filters/MainFilter";
import { Ranking } from "../components/NFT/NFTStats/Ranking";
import { ShowCase } from "../components/NFT/PrimaryComponent/ShowCase";
import PageTitle from "../components/PageTitle";
import SafeHydrate from "../components/SafeHydrate";
import InfoBanner from "../components/info/InfoBanner";
import {
  nft_description,
  nft_preview,
  nft_title,
} from "../components/info/InfoContent";
import MarketDescriptionComponent from "../components/info/MarketDescriptionComponent";
import 'regenerator-runtime/runtime';

interface MarketProps {}
export default function Market(props: MarketProps) {
  return (
    <>
      <InfoBanner
        title={nft_title}
        preview={nft_preview}
      >
        <MarketDescriptionComponent/>
      </InfoBanner>

      <PageTitle title="Haptics Market" />

      <SafeHydrate>
        <ShowCase />
      </SafeHydrate>
      <Ranking />
      <NFTCatCarousel />
      <MainFilter />

      <NFTCarousel />
    </>
  );
}