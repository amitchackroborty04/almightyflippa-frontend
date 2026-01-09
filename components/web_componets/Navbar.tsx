"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, User, Play, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"



export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Announcement Banner */}
      <div className="w-full bg-[#FBB41D] text-[#131313] text-center py-2 px-4 text-xs md:text-base font-normal">
        Scheduler's all-in-one task management platform increase productivity and maintain team unity.
      </div>

      {/* Main Navbar */}
      <nav className="w-full bg-[#131313] backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className=" container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
            <Image src="/assets/logo.png" alt="Logo" width={1000} height={1000}  className="w-[160px] h-[40px] object-cover"/>
            </Link>

          

            {/* Right Icons and Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* Desktop Icons */}
              <div className="hidden md:flex items-center gap-3">
                <button className="p-2 hover:bg-gray-900 rounded-lg transition-colors text-gray-400 hover:text-white">
                  <User size={20} />
                </button>
                <button className="p-2 hover:bg-gray-900 rounded-lg transition-colors text-gray-400 hover:text-white">
                  <Play size={20} />
                </button>
                <button className="p-2 hover:bg-gray-900 rounded-lg transition-colors text-gray-400 hover:text-white">
                  <Globe size={20} />
                </button>
              </div>

              {/* Mobile Menu Button */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon" className="hover:bg-transparent">
                    <Menu className="!h-7 !w-7 text-white" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[240px] bg-white border-gray-800">
                  <div className="flex flex-col gap-6 mt-8">
                    {/* Mobile Logo */}
                    <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <span className="text-black font-bold text-lg">⚡</span>
                      </div>
                      <span className="text-white font-bold">LABBY TV</span>
                    </Link>

                   

                    {/* Mobile Icons */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                      <button className="p-2 hover:bg-gray-900 rounded-lg transition-colors text-gray-400 hover:text-white flex-1">
                        <User size={20} />
                      </button>
                      <button className="p-2 hover:bg-gray-900 rounded-lg transition-colors text-gray-400 hover:text-white flex-1">
                        <Play size={20} />
                      </button>
                      <button className="p-2 hover:bg-gray-900 rounded-lg transition-colors text-gray-400 hover:text-white flex-1">
                        <Globe size={20} />
                      </button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
