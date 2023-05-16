import { FaTwitter, FaLinkedin, FaGithub, } from "react-icons/fa"

function Footer() {
  return (
    <div className="w-full bg-gray-300 py-40  rounded-t-xl px-10">
        <div className=" flex flex-col items-center mb-2">
            <p  className="flex items-center text-black 
            self-center text-sm mb-2 font-bold whitespace-nowrap ">

                link
                <span className='text-[#ffa741]' >ZEN</span>
            
            </p>
            <div className="flex flex-row gap-4">
              <FaTwitter className="text-2xl text-blue-400"/> 
              <FaLinkedin className="text-2xl text-blue-500"/> 
              <FaGithub className="text-2xl text-black"/>
            </div>

        </div>
        <hr />
        <div className="flex flex-row justify-center">
          <p>Powered by <span className="text-[#ffa741] font-bold">Baribor</span></p>
        </div>
    </div>
  )
}

export default Footer