import HeroSub from '../../assets/hero-sub.svg';
import HeroPet from '../../assets/hero-pet.svg';
import ButtonHeroPet from '../../assets/tombol-hero-pet.svg';
import { useEffect, useState } from 'react';


const Hero = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setNumber(count + 1);

  }, [count])

  return (
    <section id="home" className="flex items-center xl:h-screen">
      <div className="container mx-auto mt-24 sm:mt-32 xl:mt-20">
        <div className="flex w-full items-center justify-between gap-6">
          <div className="flex w-[85%] flex-col justify-between gap-4 sm:w-[45%] lg:gap-6 xl:w-1/2" data-aos="fade-right"
            data-aos-delay="200">
            <h1 className="text-lg font- font-extrabold lg:text-xl xl:text-[2.5rem] xl:font-black xl:leading-[3.5rem]">
              Gelombang Kesenangan Hewan Peliharaan Anda, Hanya di Sini!
            </h1>
            <p className="opacity-80 w-[90%] text-[10px] font-medium md:text-xs lg:text-base 2xl:text-lg">
              Selamat datang di Pet Haven, tempat di mana gelombang kebahagiaan
              hewan peliharaan Anda bertemu dengan kualitas terbaik!
            </p>
            <div className="flex gap-2 lg:gap-6">
              <a href="#"
                className="scale flex w-[45%] items-center justify-center rounded-md bg-secondary p-2 px-3 text-[8px] font-semibold text-primary md:text-[10px] lg:text-sm xl:w-[30%] 2xl:text-base">Mulai
                Sekarang!</a>
              <div className="flex items-center gap-2 sm:gap-1 md:gap-2">
                <img src={ButtonHeroPet} alt="" className="w-1/5 cursor-pointer" />
                <p className="text-[8px] font-semibold text-primary md:text-[10px] lg:text-sm 2xl:text-base">
                  Tonton Video Kami
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 lg:gap-4">
              <img src={HeroSub} alt="" className="w-[45%] xl:w-[35%]" />
              <button type='button' className="text-xs cursor-pointer font-bold text-primary lg:text-sm xl:text-base">
                {number} Berbagai Hewan
              </button>
            </div>
          </div>
          <div className="mt-1 hidden w-[50%] sm:block xl:mt-2" data-aos="fade-left">
            <img src={HeroPet} alt="" className="w-full" />
            <div>
              <p>Jumlah: {count}</p>
              <button onClick={() => setCount(count + 1)}>Tambah</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
