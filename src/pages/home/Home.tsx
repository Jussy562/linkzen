import SampleProfile from "../../components/SampleProfile/SampleProfile";
import Footer from "../../components/footer/footer";
import Hero from "../../components/hero/Hero"
import Navbar from "../../components/navbar/Navbar";

import SampleData from "../../store/data/sample"


function Home() {

  const {profile, header} = SampleData;
  return (
   <>
   <div className=' px-6 md:px-12  '>
    <Navbar />
   </div>
   
   <header className='py-4 md:py-8 px-6 md:px-12 header h-100vh'>
        <Hero />
   </header>
   <section className="py-12 md:py-24" >
      <div>
        HOW IT LOOK LIKE
      </div>
      <div className="flex justify-center items-center">
        <SampleProfile profile={profile} header={header} />
      </div>
   </section>
   <footer className="flex flex-row justify-center mt-20">
      <Footer />
   </footer>
   </>
  )
}

export default Home