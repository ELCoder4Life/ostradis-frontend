import LandingLayout from "@/components/landingPage/landingLayout";
import SEO from "@/components/seo";
import LandingHeader from "@/components/landingPage/landingHeader";
import LandingFooter from "@/components/landingPage/landingFooter";
import LandingCta from "@/components/landingPage/landingCta";
import { useEffect } from "react";
import LandingRoadmap from "@/components/landingPage/landingRoadmap";

export function Home() {}

export async function getServerSideProps(context) {
  return {
    props: { show_user_page: false },
  };
}

export default function PageWrapper(props) {
  useEffect(() => {
    // const pricingElement = document.getElementById("features");
    // if (pricingElement) {
    //   pricingElement.scrollIntoView({ behavior: "smooth" });
    // }
  }, []);
  return (
    <>
      {/* <LandingPage {...props} /> */}
      <LandingLayout>
        <SEO title="PagePe.com - Roadmap" />
        <LandingHeader isDashboard={true} from="index" navLinkEnable={true} />
        <main className="space-y-20 mb-0 pt-32">
          <LandingRoadmap />
          <LandingCta />
        </main>
        <LandingFooter />
      </LandingLayout>
    </>
  );
}
