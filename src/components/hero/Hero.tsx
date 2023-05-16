import { Link } from "react-router-dom"
import ButtonPrimary from "../Button/ButtonPrimary"
import hero1 from '/assets/hero1.svg';


function Hero() {
  return (
    <div className='hero pb-8'>
        <div className='flex flex-col-reverse md:flex-row w-full md:items-center'>
            <div className='w-full md:w-1/2'>
                <div className='mb-7 hero-text dark:text-black'>
                  <h3 className='text-3xl md:text-5xl mb-4 text-white'>Your entire digital presence. In one Link in bio.</h3>
                  <p className='text-xl md:text-2xl text-black'>Connect and Organize, Your Digital Presence 
                    with link<span className="text-[#ffa741]">Zen </span>- The Ultimate Digital Asset Management Tool.</p>
                  
                </div>
                <div>
                    <Link to='/login'>
                      <ButtonPrimary name="Get Started" />
                    </Link>
                </div>
            </div>
            <div className='w-full md:w-1/2'>
                <div>
                    <img src={hero1} alt="build" className='h-64 lg:h-96 jump' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero