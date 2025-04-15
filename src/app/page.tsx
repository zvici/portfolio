import AboutMe from "@/components/about-me/about-me";
import Header from "@/components/header/header";
import Welcome from "@/components/welcome/welcome";

export default function Home() {
  return (
    <div className="text-white">
      <Header />
      <Welcome />
      <AboutMe />
    </div>
  );
}
