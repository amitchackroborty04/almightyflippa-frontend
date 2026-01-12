


// import Image from "next/image"

// export function VideoPlayer() {
//   const features = [
//     {
//       icon: "/assets/v1.png",
//       title: "Picture-In-Picture Mode",
//       description:
//         "Keep watching while you multitask. Play videos in a small, movable window while using other apps or browsing content.",
//     },
//     {
//       icon: "/assets/v2.png",
//       title: "Cast to Any Screen",
//       description:
//         "Watch on the big screen any time. Easily stream videos from your phone or tablet to your TV using popular casting options.",
//     },
//     {
//       icon: "/assets/v3.png",
//       title: "Multi-Language & Subtitles",
//       description:
//         "Enjoy content your way. Choose from multiple audio tracks and subtitles to match your language and preference.",
//     },
//     {
//       icon: "/assets/v4.png",
//       title: "Smart Playback Recovery",
//       description:
//         "No interruptions, no frustration. If your connection drops, player automatically resumes playback right where you left off.",
//     },
//   ]

//   return (
//     <section
//       className="relative w-full px-4 py-16 md:py-24"
//       style={{
//         background: "linear-gradient(84.54deg, #6D4E0D 0.86%, #E6A61D 95.32%)",
//       }}
//     >
//       <div className="container mx-auto">
//         <div className="overflow-hidden">
//           {/* Main Content */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16 lg:mb-24">
//             {/* Left Content */}
//             <div className="flex flex-col space-y-6 max-w-full lg:max-w-md">
//               <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
//                 A video player made
//                 <br />
//                 to feel effortless
//               </h2>
//               <p className="text-base sm:text-lg md:text-[18px] text-white font-normal leading-relaxed">
//                 No complex setup, no technical confusion. Just press play and enjoy a smooth, reliable video experience that works instantly.
//               </p>
//             </div>

//             {/* Right - Video Mockup */}
//             <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[260px]">
//               <Image
//                 src="/assets/video.png"
//                 alt="Phone Mockup"
//                 fill
//                 className="object-cover rounded-xl"
//               />
//             </div>
//           </div>

//           {/* Features Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((feature, idx) => (
//               <div
//                 key={idx}
//                 className="flex flex-col items-center text-center space-y-4 px-4 py-6 "
//               >
//                 <div className="w-16 h-16 rounded-2xl flex items-center justify-center ">
//                   <Image
//                     src={feature.icon}
//                     alt={feature.title}
//                     width={64}
//                     height={64}
//                     className="object-contain"
//                   />
//                 </div>
//                 <h3 className="font-bold text-white text-xl sm:text-2xl">{feature.title}</h3>
//                 <p className="text-white/90 text-sm sm:text-base leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


import Image from "next/image"

export function VideoPlayer() {
  const features = [
    {
      icon: "/assets/v1.png",
      title: "Picture-In-Picture Mode",
      description:
        "Keep watching while you multitask. Play videos in a small, movable window while using other apps or browsing content.",
    },
    {
      icon: "/assets/v2.png",
      title: "Cast to Any Screen",
      description:
        "Watch on the big screen any time. Easily stream videos from your phone or tablet to your TV using popular casting options.",
    },
    {
      icon: "/assets/v3.png",
      title: "Multi-Language & Subtitles",
      description:
        "Enjoy content your way. Choose from multiple audio tracks and subtitles to match your language and preference.",
    },
    {
      icon: "/assets/v4.png",
      title: "Smart Playback Recovery",
      description:
        "No interruptions, no frustration. If your connection drops, player automatically resumes playback right where you left off.",
    },
  ]

  return (
    <section
      className="relative w-full px-4 py-16 md:py-24"
      style={{
        background: "linear-gradient(84.54deg, #6D4E0D 0.86%, #E6A61D 95.32%)",
      }}
    >
      <div className="container mx-auto">
        <div className="overflow-hidden">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16 lg:mb-24">
            
            {/* Left Content */}
            <div className="flex flex-col space-y-6 max-w-full lg:max-w-md">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
                A video player made
                <br />
                to feel effortless
              </h2>
              <p className="text-base sm:text-lg md:text-[18px] text-white font-normal leading-relaxed">
                No complex setup, no technical confusion. Just press play and enjoy a smooth, reliable video experience that works instantly.
              </p>
            </div>

            {/* Right - Video Mockup (Mobile Friendly) */}
            <div
              className="
                relative w-full 
                aspect-[16/9] 
                sm:aspect-[16/9] 
                lg:aspect-auto 
                lg:h-[260px]
                flex items-center justify-center
              "
            >
              <Image
                src="/assets/video.png"
                alt="Video Player Preview"
                fill
                priority
                className="
                  object-contain 
                  lg:object-cover 
                  rounded-xl
                  drop-shadow-xl
                "
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center space-y-4 px-4 py-6"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white/10">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-white text-xl sm:text-2xl">
                  {feature.title}
                </h3>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
