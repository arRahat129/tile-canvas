import FeaturedTiles from "@/components/FeaturedTiles/FeaturedTiles";
import Banner from "@/components/homepage/Banner";
import MarqueePage from "@/components/homepage/MarqueePage";

export default function Home() {
  return (
    <div>
        <Banner />
        <MarqueePage />
        <FeaturedTiles />
    </div>
  );
}
