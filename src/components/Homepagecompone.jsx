export const Homepagecompone = () => {
  return (
    <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row mt-10 py-5 lg:px-10 xl:px-10 2xl:px-10 px-4">
      <div className="lg:px-14 xl:px-14 2xl:px-14 lg:w-1/2 xl:w-1/2 2xl:w-1/2 w-full flex-col justify-center ">
        <h1 className="text-2xl font-bold" style={{'color':'#e48c71'}} data-aos="fade-up">MUDIT BAR & RESTAURANT</h1>
        <h1 className="font-bold mt-10 text-5xl" data-aos="fade-up">WE SPEAK THE</h1>
        <h1 className="text-5xl font-bold " data-aos="fade-up">GOOD FOOD</h1>
        <p className="font-bold mt-3 text-base " data-aos="fade-up">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla.
        </p>
        <a
          href="/account/login"
          className="inline-block py-2 mx-0 px-2 text-center border-black border-2 rounded font-bold w-60 mt-5 text-black" style={{'backgroundColor':'#f1d4ca'}}  data-aos="fade-up">
          DISCOVER OUR MENU
        </a>
      </div>
      <div className="lg:w-1/2 xl:w-1/2 2xl:w-1/2 w-full mt-10 lg:mt-0 xl:mt-0 2xl:mt-0 pr-10 " data-aos="flip-right">
        <img
          alt="No alt"
          src="https://assets.website-files.com/60ec04708eb66b625fc4fb1e/6117c1e7a6a7d528d6f344b5_hero.jpg"
          className="border-2 border-black" style={{'transform':'rotate(-6deg)'}} data-aos="fade-up"
        />
      </div>
    </div>
  )
}
export default Homepagecompone;