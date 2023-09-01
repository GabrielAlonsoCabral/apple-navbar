import Image, { ImageProps } from "next/image";

interface IProductSectionProps{
    title:string
    description:string
    imagePath:ImageProps['src']
    imageAlt:string
}
export default function ProductSection({
    title,
    description,
    imagePath,
    imageAlt
}:IProductSectionProps){
    return (<section
      className='bg-white p-8 min-h-screen flex flex-col'
      >

        <div className='flex flex-1 flex-col justify-center lg:max-w-6xl lg:mx-auto'>
          <div
          className='grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8'>
            <div
            className='flex flex-col gap-8 justify-center'
            > 
              <h1
              className='text-5xl xl:text-7xl font-bold text-black'
              >{title}
              </h1>
              <p
                className='text-lg font-semibold text-zinc-400'
              >
                <span className='text-black'>Lorem ipsum</span>.
                {description}
              </p>
            </div>
            <div>
              <div
              className='relative w-full h-[40rem]'>
                <Image
                  src={imagePath}
                  alt={imageAlt}
                  fill
                  style={{objectFit:'contain'}}
                />

              </div>
            </div>
          </div>
        </div>
        
      </section>
    )
}