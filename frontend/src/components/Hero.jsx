const Hero = () => {
  return (
    <>
      <section className="px-3 lg:py-10 ">
        <div className="grid lg:grid-cols-1 items-center justify-items-center gap-5 mt-20 bg-white">
          <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
            <p className="text-4xl font-bold md:text-7xl text-orange-600 pt-8">
              NYA LEVERANSER
            </p>
            <p className="text-4xl font-bold md:text-7xl">Hela sommaren!</p>
            {/* <button className="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800">
              Shop Now
            </button> */}
          </div>
          <div className="order-1 lg:order-2">
            <img
              className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]"
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
