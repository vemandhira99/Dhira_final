import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import AkashicHero from "@/components/sections/akashic/AkashicHero";
import AkashicProblem from "@/components/sections/akashic/AkashicProblem";
import AkashicIntro from "@/components/sections/akashic/AkashicIntro";
import AkashicCapabilities from "@/components/sections/akashic/AkashicCapabilities";
import AkashicModules from "@/components/sections/akashic/AkashicModules";
import AkashicInAction from "@/components/sections/akashic/AkashicInAction";
import AkashicProven from "@/components/sections/akashic/AkashicProven";
import AkashicComparison from "@/components/sections/akashic/AkashicComparison";
import AkashicTechStack from "@/components/sections/akashic/AkashicTechStack";
import AkashicClosing from "@/components/sections/akashic/AkashicClosing";

export default function AkashicPage() {
  return (
    <>
      <Nav />
      <main className="bg-background overflow-clip">
        <AkashicHero />
        <AkashicProblem />
        <AkashicIntro />
        <AkashicCapabilities />
        <AkashicModules />
        <AkashicInAction />
        <AkashicProven />
        <AkashicComparison />
        <AkashicTechStack />
        <AkashicClosing />
      </main>
      <Footer />
    </>
  );
}
