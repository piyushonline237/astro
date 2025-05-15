"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const zodiacSigns = [
  { name: "Aries", dates: "Mar 21 - Apr 19", image: "/images/aries.png" },
  { name: "Taurus", dates: "Apr 20 - May 20", image: "/images/taurus.png" },
  { name: "Gemini", dates: "May 21 - Jun 20", image: "/images/gemini.png" },
  { name: "Cancer", dates: "Jun 21 - Jul 22", image: "/images/cancer.png" },
  { name: "Leo", dates: "Jul 23 - Aug 22", image: "/images/leo.png" },
  { name: "Virgo", dates: "Aug 23 - Sep 22", image: "/images/virgo.png" },
  { name: "Libra", dates: "Sep 23 - Oct 22", image: "/images/libra.png" },
  { name: "Scorpio", dates: "Oct 23 - Nov 21", image: "/images/scorpio.png" },
  { name: "Sagittarius", dates: "Nov 22 - Dec 21", image: "/images/sagittarius.png" },
  { name: "Capricorn", dates: "Dec 22 - Jan 19", image: "/images/capricorn.png" },
  { name: "Aquarius", dates: "Jan 20 - Feb 18", image: "/images/aquarius.png" },
  { name: "Pisces", dates: "Feb 19 - Mar 20", image: "/images/pisces.png" },
]

export default function HomePageHoroscope() {
  const [activeTab, setActiveTab] = useState("daily")

  return (
    <section className="py-16 bg-gradient-to-r from-[#e65c00] to-[#F9D423]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Daily Horoscope</h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Discover what the stars have in store for you today
          </p>
        </div>

        <Tabs defaultValue="daily" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-transparent rounded-md overflow-hidden shadow-md border border-white/30">
            <TabsTrigger
              value="daily"
              onClick={() => setActiveTab("daily")}
              className={`px-4 py-2 transition-colors ${
                activeTab === "daily"
                  ? "bg-purple-600 text-white"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Daily
            </TabsTrigger>
            <TabsTrigger
              value="weekly"
              onClick={() => setActiveTab("weekly")}
              className={`px-4 py-2 transition-colors ${
                activeTab === "weekly"
                  ? "bg-purple-600 text-white"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Weekly
            </TabsTrigger>
            <TabsTrigger
              value="monthly"
              onClick={() => setActiveTab("monthly")}
              className={`px-4 py-2 transition-colors ${
                activeTab === "monthly"
                  ? "bg-purple-600 text-white"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Monthly
            </TabsTrigger>
          </TabsList>

          {["daily", "weekly", "monthly"].map((period) => (
            <TabsContent key={period} value={period} className="mt-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {zodiacSigns.map((sign, index) => (
                  <motion.div
                    key={`${sign.name}-${period}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link href={`/horoscope/${sign.name.toLowerCase()}${period === "daily" ? "" : `/${period}`}`}>
                      <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out transform border border-white/30 hover:border-purple-300 bg-transparent backdrop-blur-sm">
                        <CardContent className="p-4 text-center">
                          <div className="flex justify-center mb-2">
                            <Image
                              src={sign.image}
                              alt={sign.name}
                              width={80}
                              height={80}
                              className="w-16 h-16 object-contain"
                            />
                          </div>
                          <h3 className="font-semibold text-white">{sign.name}</h3>
                          <p className="text-xs text-white/80">{sign.dates}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-8">
          <Link
            href="/horoscope"
            className="text-white underline hover:text-yellow-100 inline-flex items-center"
          >
            View detailed horoscope readings <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
