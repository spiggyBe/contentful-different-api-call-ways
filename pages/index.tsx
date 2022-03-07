import Head from "next/head"
import MediaSection from "../src/components/MediaSection/MediaSection"
import EcosystemSection from "../src/components/EcosystemSection/EcosystemSection"
import { DownloadSection } from "../src/components/DownloadSection/DownloadSection"
import getContentfulDatagetStaticProps from "../src/helpers/getContentfulDatagetStaticProps"
import { IEcosystemSection } from "../@types/generated/contentful"

export async function getStaticProps() {

  //Ecosystem section: data from Contentful by getStaticProps
  const ecosystemSectionData = await getContentfulDatagetStaticProps('ecosystemSection')

  return {
    props: {
      ecosystemSectionItems: ecosystemSectionData.items
    },
    revalidate: 10,
  }
}

interface IHomeAllProps {
  ecosystemSectionItems: IEcosystemSection[]
}

const Home: React.FC<IHomeAllProps> = ({ ecosystemSectionItems }) => {

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metasportfans.space" />
        <title>Metasport Fans - become a superfan</title>
        <meta property="og:title" content="Metasport" />
        <meta name="description" content="Metasport Fans - become a superfan" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#EA70E5" />
        <link
          rel="preload"
          href="/fonts/FontGilroy/Gilroy-Regular.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/FontGilroy/Gilroy-Bold.otf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <MediaSection />
      <EcosystemSection ecosystemSectionItems={ecosystemSectionItems} />
      <DownloadSection />
    </>
  )
}

export default Home