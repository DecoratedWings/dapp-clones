import { MainFilter } from "../components/NFT/Filters/MainFilter";
import InfoBanner from "../components/info/InfoBanner";
import {
  collection_preview,
  collection_title,
} from "../components/info/InfoContent";
import ExploreDescriptionComponent from "../components/info/ExploreDescriptionComponent";
import PageTitle from "../components/PageTitle";

interface MarketProps {}
export default function Market(props: MarketProps) {
  return (
    <>
      <InfoBanner title={collection_title} preview={collection_preview}>
        <ExploreDescriptionComponent />
      </InfoBanner>
      <PageTitle title="NFT Collections" />
      <MainFilter />
    </>
  );
}
