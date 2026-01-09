import Image from "next/image";

export function RealTimeConnection() {
  return (
    <section className="relative w-full px-4 py-16 md:py-10 bg-black">
      <div className="container mx-auto">
        <div>
          <div className="w-[115px] h-[33px] mb-4">
            <Image src="/assets/minibutton.png" alt="Two Phones" width={1000} height={1000} className="w-full h-full object-cover" />
          </div>
          <div className="flex justify-between mb-[56px]">
            <div >
              <h3 className="text-[40px] text-[#FFFFFF] font-semibold leading-[120%] w-[504px] uppercase"> <span className="text-[#FBB41D]">Features</span> That Keep You in the Game</h3>
            </div>
            <div className="w-[412px]" >
              <p className="text-base text-[#E7E7E7] font-normal leading-[150%]">Built to match the way you play. Instant access, zero interruptions. Smart tools that adapt in real time. So the game never slows down.</p>
            </div>
          </div>
        </div>
        <div
          className=" overflow-hidden rounded-[24px] px-10"
          style={{
            background:
              "linear-gradient(84.54deg, #FBB41D 0.86%, #7E5D18 95.33%)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ">
            {/* Left - Two Phones */}
            <div className="w-full h-[654px]">
              <Image
                src="/assets/mobile.png"
                alt="Two Phones"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right - Content */}
            <div className="flex flex-col space-y-6">
              <div className="inline-flex items-center gap-2 w-fit bg-white/10 rounded-full px-3 py-1">
                <span className="text-2xl text-white">🔗</span>
              </div>

              <h2 className="text-2xl md:text-[32px] font-bold leading-[120%] text-[#FFFFFF]">
                REAL-TIME CONNECTION
              </h2>

              <div className="space-y-[32px]">
                <p className="text-[18px] text-[#E7E7E7] font-semibold  leading-[150%]">
                  Effortlessly keep your playlists, recent activity, favorites,
                  and settings synced across every device. Start on one screen
                  and continue on another. Everything stays exactly the way you
                  like it.
                </p>

                <p className="text-[18px] text-[#E7E7E7] font-semibold  leading-[150%]">
                  Any change you make on one device updates across all others in
                  real time. Smooth, seamless, and surprisingly simple. No extra
                  steps. Just instant continuity, everywhere you play.
                </p>

                <p className="text-[18px] text-[#E7E7E7] font-semibold  leading-[150%]">
                  Sync works when all devices are signed in using the same Apple
                  account. This helps keep your data consistent and secure. Just
                  sign in once and everything stays connected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
