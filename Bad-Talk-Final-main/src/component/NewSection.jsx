import { BaggageClaim, CaseUpper, CheckCheck, GhostIcon } from 'lucide-react'
import React from 'react'
import connect from "../assets/connect.jpeg"
import intern from "../assets/intern.jpg"
import swag from "../assets/t-shirt.png"

export default function NewSection() {
  return (
    <main className='h-full md:h-[85vh] mt-3 w-full flex flex-col justify-between gap-12 p-4 lg:p-16' id="bad">
        <article className='flex text-sm flex-col gap-8 lg:ml-32 md:ml-32'>
            <div className='flex flex-col gap-8 text-center md:text-left'>
            <h3 className='text-white font-bold text-4xl '>Connect, Learn, and Grow!</h3>
    {/* <p className='text-white/60 max-w-3xl'>Dive into the electrifying world of B.A.D. Talks, where innovation meets inspiration.</p> */}
    <p className='text-white/60 max-w-xl'>
    Join us at B.A.D. Talks, an event dedicated to nurturing innovation and entrepreneurial growth. Connect with top CEOs as they share their success stories, challenges, and visions for the future. Engage with a vibrant community committed to excellence, progress, and the continuous pursuit of knowledge. This is your chance to learn from industry leaders and gain valuable insights.</p>
    <p className='text-white/60 max-w-xl'>

    Don’t miss this opportunity to network and be inspired to achieve your own entrepreneurial dreams. Experience the power of shared knowledge and innovation at B.A.D. Talks, where ideas flourish and growth is nurtured. Be part of a movement that drives success and transformation.
    </p>
            </div>
      
        </article>
   
        <div className='h-full lg:h-32 flex flex-col lg:flex-row  items-start sm:items-center pl lg:items-end px-4 py-12 lg:py-4 lg:p-0 gap-4 lg:gap-0   w-full  rounded-3xl bg-white relative'>
            <h4 className='py-3 px-12 font-semibold text-black text-xl  xl:text-3xl uppercase'>By joining B.A.D. Talks, you'll gain access to:</h4>
            <div className='flex items-center  justify-center gap-4 pl-8'>
            <div className='h-24 w-24 min-w-24 bg-black lg:absolute rounded-full -top-1/2 right-8 border flex items-center justify-center ' > <img src={swag}  className='rounded-full h-full w-full 'alt="img" />
            <span className=' hidden lg:absolute lg:block top-24 font-semibold max-w-32  text-black'>Super Cool Swags</span></div>
    <p className='text-black lg:hidden md:text-2xl font-semibold'>Super Cool Swags</p>
            </div>
            <div className='flex items-center justify-center gap-4 pl-8'>
            <div className='h-24 w-24 min-w-24 bg-black lg:absolute rounded-full -top-1/2 right-52 border flex items-center justify-center' > <img src={connect} className='rounded-full h-full w-full '  alt="image" />
            <span className='hidden lg:absolute lg:block top-24 font-semibold max-w-32  text-black text-center'>Great Connections</span></div>
      
      <p className='text-black lg:hidden md:text-2xl font-semibold '>
        Great Connections</p>
            </div>
            <div className='flex items-center  justify-center gap-4 pl-8 sm:pl-24'>
            <div className='h-24 w-24 min-w-24 bg-black lg:absolute rounded-full -top-1/2 right-96 border flex items-center justify-center' >
             <img src= {intern} className='rounded-full h-full w-full '  alt="image" />
             <span className='hidden lg:absolute lg:block top-24 font-semibold max-w-32  text-black text-center'>Internship Oppurtunities</span></div>
<p className='text-black lg:hidden md:text-2xl font-semibold p-4'>Internship opportunity</p>
            </div>
        </div>

      
    </main>    
  )
}
