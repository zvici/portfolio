import AboutMe from "@/components/about-me/about-me";
import Header from "@/components/header/header";
import { HeroHighlight } from "@/components/layout/spotlight-grid";
import Welcome from "@/components/welcome/welcome";

export default function Home() {
  return (
    <div className="text-white">
      <HeroHighlight>
        <Header />
        <Welcome />
        <AboutMe />
      </HeroHighlight>
    </div>
  );
}
