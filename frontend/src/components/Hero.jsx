import React from 'react';

const Hero = () => {
  return (
    <>
      <section class="px-3 py-5  lg:py-10 ">
        <div class="grid lg:grid-cols-1 items-center justify-items-center gap-5 mt-20 bg-white">
          <div class="order-2 lg:order-1 flex flex-col justify-center items-center">
            <p class="text-4xl font-bold md:text-7xl text-orange-600">
              NYA LEVERSANSER
            </p>
            <p class="text-4xl font-bold md:text-7xl">Hela sommaren!</p>
            <p class="mt-2 text-sm md:text-lg font-bold">Bara hos Hakim!</p>
            {/* <button class="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800">
              Shop Now
            </button> */}
          </div>
          <div class="order-1 lg:order-2">
            <img
              class="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]"
              src="/powerking.jpg"
              alt=""
            ></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
