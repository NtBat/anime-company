import NextHead from "../src/components/NextHead";
import Header from "../src/components/Header";
import Featured from "../src/components/Featured";
import Caroussel from "../src/components/Caroussel";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <>
      <NextHead title="Home - AnimeCompany" />
      <Header />
      <Featured />
      <Caroussel />
      <Footer />
    </>
  );
}
