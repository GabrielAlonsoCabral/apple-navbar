import BagSVG from '@/assets/svgs/bag';
import Logo from '@/assets/svgs/logo';
import MagnifyGlassSVG from '@/assets/svgs/magnifyGlass';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import ProductSection from './components/ProductSection';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <div className="h-11 flex items-center justify-center z-50 fixed bg-white w-full bg-opacity-90 bg-scroll">
        <div className="mr-6">
          <Logo width={44} height={16} />
        </div>
        <div className="flex space-x-10 text-xs text-black font-semibold">
          <div className="">Loja</div>
          <div className="">Mac</div>
          <div className="">iPad</div>
          <div className="">iPhone</div>
          <div className="">Watch</div>
          <div className="">AirPods</div>
          <div className="">TV e Casa</div>
          <div className="">Entretenimento</div>
          <div className="">Acessórios</div>
          <div className="">Suporte</div>
        </div>
        <div className="ml-6 flex space-x-2">
          <MagnifyGlassSVG height={17} width={44} />
          <BagSVG height={17} width={44} />
        </div>
      </div>

      <Head>
        <title>Scrolling dark mode transition</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <ProductSection
        title="Magic Keyboard. Apple Pencil. Endless possibilities"
        imageAlt="Magic Keyboard"
        imagePath={'/assets/ipad-1.png'}
        description="dolor sit amet consectetur adipisicing elit. Provident quae harum laborum ad quas consequatur dolores ducimus eligendi, placeat fugiat expedita nulla quis labore rerum, voluptates, ratione dolorum eveniet magnam!          "
      />
      <ProductSection
        title="Magic Keyboard. Apple Pencil. Endless possibilities"
        imageAlt="Magic Keyboard"
        imagePath={'/assets/ipad-1.png'}
        description="dolor sit amet consectetur adipisicing elit. Provident quae harum laborum ad quas consequatur dolores ducimus eligendi, placeat fugiat expedita nulla quis labore rerum, voluptates, ratione dolorum eveniet magnam!          "
      />
    </div>
  );
}
