import loader from '/assets/loader.svg'

function Loader() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
        <p  className="flex items-center text-black self-center text-2xl font-bold whitespace-nowrap mb-4">
                    
            link
            <span className='text-[#ffa741]' >ZEN</span>
                      
        </p>
        <img src={loader}/>
    </div>
  )
}

export default Loader