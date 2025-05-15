import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Daily Horoscope | AstroGuide",
  description: "Get your daily, weekly, and monthly horoscope predictions for all zodiac signs.",
}

const zodiacSigns = [
  {
    name: "Aries",
    dates: "Mar 21 - Apr 19",
    image: "/images/aries.png",
    element: "Fire",
    ruling: "Mars",
    compatibility: "Libra, Leo",
    lucky: "1, 8, 17",
  },
  {
    name: "Taurus",
    dates: "Apr 20 - May 20",
    image: "/images/taurus.png",
    element: "Earth",
    ruling: "Venus",
    compatibility: "Scorpio, Cancer",
    lucky: "2, 6, 9",
  },
  {
    name: "Gemini",
    dates: "May 21 - Jun 20",
    image: "/images/gemini.png",
    element: "Air",
    ruling: "Mercury",
    compatibility: "Sagittarius, Aquarius",
    lucky: "3, 12, 21",
  },
  {
    name: "Cancer",
    dates: "Jun 21 - Jul 22",
    image: "/images/cancer.png",
    element: "Water",
    ruling: "Moon",
    compatibility: "Capricorn, Taurus",
    lucky: "4, 13, 22",
  },
  {
    name: "Leo",
    dates: "Jul 23 - Aug 22",
    image: "/images/leo.png",
    element: "Fire",
    ruling: "Sun",
    compatibility: "Aquarius, Gemini",
    lucky: "5, 9, 14",
  },
  {
    name: "Virgo",
    dates: "Aug 23 - Sep 22",
    image: "/images/virgo.png",
    element: "Earth",
    ruling: "Mercury",
    compatibility: "Pisces, Cancer",
    lucky: "6, 15, 24",
  },
  {
    name: "Libra",
    dates: "Sep 23 - Oct 22",
    image: "/images/libra.png",
    element: "Air",
    ruling: "Venus",
    compatibility: "Aries, Sagittarius",
    lucky: "7, 16, 25",
  },
  {
    name: "Scorpio",
    dates: "Oct 23 - Nov 21",
    image: "/images/scorpio.png",
    element: "Water",
    ruling: "Pluto, Mars",
    compatibility: "Taurus, Cancer",
    lucky: "8, 17, 26",
  },
  {
    name: "Sagittarius",
    dates: "Nov 22 - Dec 21",
    image: "/images/Sagittarius.png",
    element: "Fire",
    ruling: "Jupiter",
    compatibility: "Gemini, Aries",
    lucky: "9, 18, 27",
  },
  {
    name: "Capricorn",
    dates: "Dec 22 - Jan 19",
    image: "/images/Capricorn.png",
    element: "Earth",
    ruling: "Saturn",
    compatibility: "Cancer, Taurus",
    lucky: "10, 19, 28",
  },
  {
    name: "Aquarius",
    dates: "Jan 20 - Feb 18",
    image: "/images/Aquarius.png",
    element: "Air",
    ruling: "Uranus, Saturn",
    compatibility: "Leo, Libra",
    lucky: "11, 20, 29",
  },
  {
    name: "Pisces",
    dates: "Feb 19 - Mar 20",
    image: "/images/Pisces.png",
    element: "Water",
    ruling: "Neptune, Jupiter",
    compatibility: "Virgo, Scorpio",
    lucky: "12, 21, 30",
  },
]

export default function HoroscopePage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-[#1a2a6c] via-[#b21f1f] to-[#fdbb2d] py-12 text-white">
      <div className="container mx-auto px-4">
        {/* Centering the header and description with flex */}
        <div className="flex flex-col items-center justify-center text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 text-transparent bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text">
            Daily Horoscope
          </h1>
          <p className="text-lg text-gray-200">
            Discover what the stars have in store for you today
          </p>
        </div>

        <Tabs defaultValue="daily" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 max-w-md mx-auto bg-white/20 backdrop-blur-sm rounded-md text-white">
            <TabsTrigger
              value="daily"
              className="data-[state=active]:bg-white/30 hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              Daily
            </TabsTrigger>
            <TabsTrigger
              value="weekly"
              className="data-[state=active]:bg-white/30 hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              Weekly
            </TabsTrigger>
            <TabsTrigger
              value="monthly"
              className="data-[state=active]:bg-white/30 hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              Monthly
            </TabsTrigger>
          </TabsList>

          {["daily", "weekly", "monthly"].map((period) => (
            <TabsContent key={period} value={period} className="mt-0 fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {zodiacSigns.map((sign) => (
                  <Link
                    key={sign.name}
                    href={`/horoscope/${sign.name.toLowerCase()}${period === "daily" ? "" : `/${period}`}`}
                  >
                    <Card className="hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer h-full border border-white/30 bg-white/10 backdrop-blur-sm rounded-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <Image
                            src={sign.image || "/placeholder.svg"}
                            alt={sign.name}
                            width={120}
                            height={120}
                            className="w-20 h-20 mr-4 rounded-full"
                          />
                          <div>
                            <h2 className="text-xl font-semibold text-white">{sign.name}</h2>
                            <p className="text-sm text-gray-200">{sign.dates}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-sm mb-4 text-gray-100">
                          <div>
                            <span className="font-medium text-white">Element:</span> {sign.element}
                          </div>
                          <div>
                            <span className="font-medium text-white">Ruling Planet:</span> {sign.ruling}
                          </div>
                          <div>
                            <span className="font-medium text-white">Compatibility:</span> {sign.compatibility}
                          </div>
                          <div>
                            <span className="font-medium text-white">Lucky Numbers:</span> {sign.lucky}
                          </div>
                        </div>

                        <p className="text-gray-100 line-clamp-3">
                          {period === "daily" &&
                            `Today is a great day for ${sign.name}. You may find new opportunities in your career and personal growth. Focus on your strengths and be open to unexpected changes.`}
                          {period === "weekly" &&
                            `This week brings significant changes for ${sign.name}. You may need to balance work and personal life. Pay attention to your health and relationships with loved ones.`}
                          {period === "monthly" &&
                            `This month is a time of transformation for ${sign.name}. Focus on long-term goals and personal growth. New opportunities may arise in your career and relationships.`}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </main>
  )
}
