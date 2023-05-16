
interface Props {
    name:string;
    
}
function ButtonPrimary(props: Props) {
  return (
    <button   type="button" className="transition ease-in-out delay-100 w-auto text-white bg-[#fbb96d] hover:bg-[#ffa741] focus:ring-4 focus:outline-none focus:ring-[#d08ffb] font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-[#e0b0ff] dark:hover:bg-[#d08ffb]  dark:focus:ring-[#d08ffb] ">{props.name}</button>
  )
}

export default ButtonPrimary