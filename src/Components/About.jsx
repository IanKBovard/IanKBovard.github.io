const About = () => (
  <section className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-8'>
    <h2 className='font-bold text-lg md:text-3xl lg:text-4xl text-center text-nowrap'>
      Ingredients you can feel good about
    </h2>
    <div className='gap-16 items-center mx-auto lg:grid lg:grid-cols-5'>
      <div className='grid grid-cols-2 gap-4 mt-8 lg:col-span-2'>
        <img
          className='w-full rounded-lg'
          src='images/gimbap-preroll.jpg'
          alt='office content 1'
        />
        <img
          className='mt-4 w-full lg:mt-10 rounded-lg'
          src='images/chef.jpg'
          alt='office content 2'
        />
      </div>
      <div className='text-brand-black lg:col-span-3 mt-10'>
        <p className='text-justify md:text-2xl'>
          Rice Thief celebrates the deep yet sometimes unspoken love
          behind the food we cook for others. Inspired by the Korean
          food of her childhood, Chef Anna Lee lovingly prepares all
          food from scratch in service of a simple mission: to share
          delicious, heart-warming Korean food using quality local,
          non-GMO ingredients that you can feel good about.
        </p>
        <br />
        <p className='text-justify md:text-2xl italic'>
          Rice Thief, or bap do duk (밥도둑), refers to food so
          delicious that it steals the rice you must eat with it.
        </p>
      </div>
    </div>
  </section>
)

export default About

/* 
Alt text
const About = () => (
  <section className=''>
    <div className='gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-5 lg:py-16 lg:px-6'>
      <div className='grid grid-cols-2 gap-4 mt-8 lg:col-span-2'>
        <img
          className='w-full rounded-lg'
          src='images/gimbap.jpg'
          alt='office content 1'
        />
        <img
          className='mt-4 w-full lg:mt-10 rounded-lg'
          src='images/chef.jpg'
          alt='office content 2'
        />
      </div>
      <div className='text-brand-black sm:text-lg lg:col-span-3 sm:py-8'>
        <h2 className='mb-4 text-4xl tracking-tight font-extrabold'>
          Non-GMO + local ingredients
        </h2>
        <p className='mb-4 text-2xl'>
          We all have the right to feel good about the food we eat,
          and the choices we make about our food can make us feel good
          too.
        </p>
        <p className='mb-4 text-2xl'>
          Passionate about food and its impact on our well-being, Chef
          Anna Lee has made it her mission to source quality organic
          or non-GMO ingredients that honor the local farms,
          producers, and small businesses here in the PNW. She
          believes this is all part of the joy and privilege of
          cooking for others.
        </p>
        <p className='mb-4 text-2xl'>
          Whether it’s your first or fiftieth time eating Korean food,
          we hope you leave Rice Thief feeling good!
        </p>
      </div>
    </div>
  </section>
)
export default About
 */
