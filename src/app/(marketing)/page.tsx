import HomeHero from "@/components/sections/home/HomeHero"
import IntegrationsBand from "@/components/sections/home/IntegrationsBand"
import ValueGrid from "@/components/sections/home/ValueGrid"
import Steps from "@/components/sections/home/Steps"
import ResourceTeasers from "@/components/sections/home/ResourceTeasers"
import BottomCTA from "@/components/sections/home/BottomCTA"
import Services from "@/components/sections/Services"

export default function Page(){
  return (
    <>
      <HomeHero />
      <IntegrationsBand />
      <ValueGrid />
      <Services />
      <Steps />
      <ResourceTeasers />
      <BottomCTA />
    </>
  )
}
