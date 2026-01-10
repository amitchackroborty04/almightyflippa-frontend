import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-primary px-4 py-6 md:py-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={1000}
              height={1000}
              className="w-[140px] sm:w-[160px] h-[36px] sm:h-[40px] object-cover"
            />
          </Link>
        </div>

        {/* Social buttons */}
        <div className="flex items-center gap-4">
          {/* show smaller buttons on mobile */}
          <button className="w-6 h-6 sm:w-[24px] sm:h-[24px]">
            <Image src="/assets/n1.png" alt="User" width={1000} height={1000} className="w-full h-full object-cover" />
          </button>
          <button className="w-6 h-6 sm:w-[24px] sm:h-[24px]">
            <Image src="/assets/n2.png" alt="User" width={1000} height={1000} className="w-full h-full object-cover" />
          </button>
          <button className="w-6 h-6 sm:w-[24px] sm:h-[24px]">
            <Image src="/assets/n3.png" alt="User" width={1000} height={1000} className="w-full h-full object-cover" />
          </button>
        </div>

       
      </div>
       {/* Copyright */}
        <div className="mt-4 md:mt-0 text-center text-sm text-primary-foreground/80">
          © LABBY TV. All rights reserved
        </div>
    </footer>
  );
}
