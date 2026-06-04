import Skills from "@/components/common/Skills";
import Copyright from "@/components/footers/Copyright";
import Footer3 from "@/components/footers/Footer3";
import Header1 from "@/components/headers/Header1";
import About from "@/components/common/About";



import Hero from "@/components/homes/home-2/Hero";
import Portofolio from "@/components/common/Portfolio";

import Testimonials from "@/components/common/Testimonials";
import TextAnim from "@/components/common/TextAnim";

import MetaComponent from "@/components/common/Metacomponent";

const metadata = {
  title:
    "Home 02 || Personal Portfolio Reactjs Template | Freelancer & Developer Portfolio",
  description:
    "Personal Portfolio Reactjs Template | Freelancer & Developer Portfolio",
};
export default function HomePage2() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <Hero />
      <TextAnim />
      <About />
      {/* <Experience /> */}
      <Skills />
      <Portofolio />

      <Testimonials />



      <Footer3 />
      <Copyright />
    </>
  );
}
