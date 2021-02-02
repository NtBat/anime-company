import NextHead from "../src/components/NextHead";
import Header from "../src/components/Header";
import Featured from "../src/components/Featured";
import Caroussel from "../src/components/Caroussel";
import Footer from "../src/components/Footer";

function Home({ featured, upcoming, animes }) {
  return (
    <>
      <NextHead title="Home - AnimeCompany" />
      <Header />
      <Featured featured={featured} />
      <Caroussel featured={featured} upcoming={upcoming} animes={animes} />
      <Footer />
    </>
  );
}

Home.getInitialProps = async (ctx) => {
  const [featured, upcoming, animes] = await Promise.all([
    fetch("https://kitsu.io/api/edge/trending/anime?limit=20").then((r) =>
      r.json()
    ),
    fetch(
      "https://kitsu.io/api/edge/anime?page[limit]=20&filter[status]=upcoming&sort=-userCount"
    ).then((r) => r.json()),
    fetch(
      "https://kitsu.io/api/edge/trending/anime?limit=20&in_category=true&category=15"
    ).then((r) => r.json()),
  ]);

  return {
    featured: featured.data,
    upcoming: upcoming.data,
    animes: animes.data,
  };
};

export default Home;
