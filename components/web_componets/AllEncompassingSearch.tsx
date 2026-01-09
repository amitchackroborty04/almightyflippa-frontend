// import Image from 'next/image'
// import React from 'react'

// const AllEncompassingSearch = () => {
//   return (
//     <section className='bg-black py-16'>
//       <div className=' container mx-auto flex justify-between'>
//         <div  className='w-[48%] px-[32px] pt-[32px] rounded-[12px]'
//          style={{ background: "linear-gradient(0deg, #131313 0%, #4A3A16 100%)" }}
//         >
//           <div className="w-[48px] h-[48px] mb-6">
//             <Image src="/assets/arrow_image.png" alt="Phone Mockup" width={1000} height={1000} className="w-full h-full object-cover" />
//           </div>
//              <h3 className='text-[32px] text-[#FFFFFF] leading-[120%] font-bold uppercase '>All-encompassing search</h3>
//             <h6 className='text-[18px] text-[#E7E7E7] font-semibold mt-4'>Search Everything. Discover Anything.</h6>
//             <p className='text-base text-[#E7E7E7] font-medium mt-[32px]'>Search across every game, show, and playlist.Find your favorites in an instant.Discover new content with ease.Everything you love, just a search away.</p>
//             <div className=' h-[544px] mt-[80px]'>
//               <Image src="/assets/dubbole_mobile1.png" alt="Phone Mockup" width={1000} height={1000} className="w-full h-full object-cover" />
//             </div>
//         </div>
//        <div  className='w-[48%] px-[32px]  rounded-[12px]'
//          style={{ background: "linear-gradient(0deg, #131313 0%, #4A3A16 100%)" }}
//         >
//             <div className=' h-[544px] mb-[80px]'>
//               <Image src="/assets/dubbole_mobile2.png" alt="Phone Mockup" width={1000} height={1000} className="w-full h-full object-cover" />
//             </div>
//           <div className="w-[48px] h-[48px] mb-6">
//             <Image src="/assets/arrow_image.png" alt="Phone Mockup" width={1000} height={1000} className="w-full h-full object-cover" />
//           </div>
//              <h3 className='text-[32px] text-[#FFFFFF] leading-[120%] font-bold uppercase '>All-encompassing search</h3>
//             <h6 className='text-[18px] text-[#E7E7E7] font-semibold mt-4'>Search Everything. Discover Anything.</h6>
//             <p className='text-base text-[#E7E7E7] font-medium mt-[32px]'>Search across every game, show, and playlist.Find your favorites in an instant.Discover new content with ease.Everything you love, just a search away.</p>
          
//         </div>
//       </div>
//     </section>
//   )
// }

// export default AllEncompassingSearch

import Image from 'next/image'
import React from 'react'

const AllEncompassingSearch = () => {
  return (
    <section className='bg-black py-16'>
      <div className='container mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16'>
        
        {/* Left Column */}
        <div
          className='w-full lg:w-1/2 px-8 pt-8 rounded-[12px]'
          style={{ background: 'linear-gradient(0deg, #131313 0%, #4A3A16 100%)' }}
        >
          <div className="w-[48px] h-[48px] mb-6">
            <Image
              src="/assets/arrow_image.png"
              alt="Arrow"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className='text-[32px] text-white leading-[120%] font-bold uppercase'>All-encompassing search</h3>
          <h6 className='text-[18px] text-[#E7E7E7] font-semibold mt-4'>Search Everything. Discover Anything.</h6>
          <p className='text-base text-[#E7E7E7] font-medium mt-8'>
            Search across every game, show, and playlist. Find your favorites in an instant. Discover new content with ease. Everything you love, just a search away.
          </p>
          <div className='h-[300px] md:h-[400px] lg:h-[544px] mt-8'>
            <Image
              src="/assets/dubbole_mobile1.png"
              alt="Phone Mockup"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column */}
        <div
          className='w-full lg:w-1/2 px-8 pb-8 rounded-[12px]'
          style={{ background: 'linear-gradient(0deg, #131313 0%, #4A3A16 100%)' }}
        >
          <div className='h-[300px] md:h-[400px] lg:h-[544px] mb-[80px]'>
            <Image
              src="/assets/dubbole_mobile2.png"
              alt="Phone Mockup"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[48px] h-[48px] mb-6">
            <Image
              src="/assets/arrow_image.png"
              alt="Arrow"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className='text-[32px] text-white leading-[120%] font-bold uppercase'>All-encompassing search</h3>
          <h6 className='text-[18px] text-[#E7E7E7] font-semibold mt-4'>Search Everything. Discover Anything.</h6>
          <p className='text-base text-[#E7E7E7] font-medium mt-8'>
            Search across every game, show, and playlist. Find your favorites in an instant. Discover new content with ease. Everything you love, just a search away.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AllEncompassingSearch
