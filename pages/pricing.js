import LandingLayout from "@/components/landingPage/landingLayout";
import SEO from "@/components/seo";
import LandingHeader from "@/components/landingPage/landingHeader";
import LandingFeature from "@/components/landingPage/landingFeature";
import LandingHowTo from "@/components/landingPage/landingHowTo";
import LandingHero from "@/components/landingPage/landingHero";
import LandingStats from "@/components/landingPage/landingStats";
import LandingPricing from "@/components/landingPage/landingPricing";
import LandingFooter from "@/components/landingPage/landingFooter";
import LandingCta from "@/components/landingPage/landingCta";
import { useEffect } from "react";

export function Home() {}

export async function getServerSideProps(context) {
  return {
    props: { show_user_page: false },
  };
}

export default function PageWrapper(props) {
  useEffect(() => {
    const pricingElement = document.getElementById("pricing");
    if (pricingElement) {
      pricingElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <>
      {/* <LandingPage {...props} /> */}
      <LandingLayout>
        <SEO title="PagePe.com - Pricing" />
        <LandingHeader isDashboard={true} from="index" navLinkEnable={true} />
        <main className="space-y-20 mb-0">
          <LandingHero />
          <LandingPricing />
          <LandingCta />
        </main>
        <LandingFooter />
      </LandingLayout>
    </>
  );
}
