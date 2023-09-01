import BagSVG from '@/assets/svgs/bag';
import Logo from '@/assets/svgs/logo';
import MagnifyGlassSVG from '@/assets/svgs/magnifyGlass';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import ProductSection from './components/ProductSection';
import BarsSVG from '@/assets/svgs/bars';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  
  return (
    <div>
      <div className="h-11 flex items-center justify-between lg:justify-center z-50 fixed bg-white w-full bg-opacity-90 backdrop-blur-sm">
        <div className="mr-6 text-xl">
          <Logo width={44} height={20} />
        </div>
        <div className="hidden lg:flex space-x-10 text-xs text-black font-semibold">
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
          <MagnifyGlassSVG height={20} width={44} />
          <BagSVG height={20} width={44} />
          <div className='flex lg:hidden'>
            <BarsSVG height={20} width={44}/>
          </div>
        </div>
      </div>

      <Head>
        <title>Apple</title>
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
