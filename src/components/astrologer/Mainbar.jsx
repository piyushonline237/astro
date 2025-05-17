"use client";
import { useState } from "react";

export default function Mainbar() {
  const astrologers = [
    {
      id: 1,
      name: "Acharya Vikram",
      specialty: "Vedic Astrology",
      experience: "15 years",
      rating: 4.9,
      reviews: 1248,
      price: "₹20/min",
      languages: ["English", "Hindi"],
      status: "online",
      image: "/images/vedicastrology.png",
      description:
        "Expert in Vedic astrology with specialization in career and business predictions. Has helped thousands of clients find their true path.",
    },
    {
      id: 2,
      name: "Divya Sharma",
      specialty: "Tarot Reading",
      experience: "8 years",
      rating: 4.7,
      reviews: 856,
      price: "₹15/min",
      languages: ["English", "Hindi", "Punjabi"],
      status: "online",
      image: "/images/tarotreading.png",
      description:
        "Intuitive tarot reader who connects deeply with spiritual energies. Specializes in relationship and love readings.",
    },
    {
      id: 3,
      name: "Guru Rajneesh",
      specialty: "Numerology",
      experience: "12 years",
      rating: 4.8,
      reviews: 1032,
      price: "₹18/min",
      languages: ["English", "Hindi", "Gujarati"],
      status: "busy",
      image: "/images/numerology.png",
      description:
        "Master numerologist who can reveal the hidden meanings behind your birth date and name. Provides accurate life path guidance.",
    },
    {
      id: 4,
      name: "Maya Joshi",
      specialty: "Palmistry",
      experience: "10 years",
      rating: 4.6,
      reviews: 742,
      price: "₹16/min",
      languages: ["English", "Hindi", "Bengali"],
      status: "offline",
      image: "/images/palmistry.png",
      description:
        "Skilled palmist who can read the past, present, and future from your palm lines. Specializes in health and wealth predictions.",
    },
    {
      id: 5,
      name: "Dr. Karan Malhotra",
      specialty: "Vastu Shastra",
      experience: "20 years",
      rating: 4.9,
      reviews: 1567,
      price: "₹25/min",
      languages: ["English", "Hindi", "Tamil"],
      status: "online",
      image: "/images/vastushastra.png",
      description:
        "Renowned Vastu expert who has helped transform thousands of homes and offices for better energy flow and prosperity.",
    },
    {
      id: 6,
      name: "Sheetal Agarwal",
      specialty: "Face Reading",
      experience: "7 years",
      rating: 4.5,
      reviews: 623,
      price: "₹14/min",
      languages: ["English", "Hindi", "Marathi"],
      status: "online",
      image: "/images/facereading.png",
      description:
        "Talented face reader who can analyze personality traits and life patterns from facial features. Provides insightful guidance.",
    },
    {
      id: 7,
      name: "Pandit Ramesh",
      specialty: "Kundli Matching",
      experience: "25 years",
      rating: 4.8,
      reviews: 2145,
      price: "₹22/min",
      languages: ["English", "Hindi", "Sanskrit"],
      status: "busy",
      image: "/images/kundlimatching.png",
      description:
        "Traditional astrologer specializing in marriage compatibility and kundli matching. Has helped thousands of couples find harmony.",
    },
    {
      id: 8,
      name: "Neha Gupta",
      specialty: "Psychic Reading",
      experience: "9 years",
      rating: 4.7,
      reviews: 912,
      price: "₹19/min",
      languages: ["English", "Hindi"],
      status: "offline",
      image: "/images/psychicreading.png",
      description:
        "Gifted psychic with the ability to connect with energies beyond the physical realm. Provides clarity on life's most challenging questions.",
    },
  ];

  const specialties = [
    "Vedic Astrology",
    "Tarot Reading",
    "Numerology",
    "Palmistry",
    "Vastu Shastra",
    "Face Reading",
    "Kundli Matching",
    "Psychic Reading",
  ];
  const languages = [
    "English",
    "Hindi",
    "Punjabi",
    "Gujarati",
    "Bengali",
    "Tamil",
    "Marathi",
    "Sanskrit",
  ];
  const statuses = ["online", "offline", "busy"];

  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState([]);

  const handleCheckboxChange = (value, setFn, stateArray) => {
    if (stateArray.includes(value)) {
      setFn(stateArray.filter((item) => item !== value));
    } else {
      setFn([...stateArray, value]);
    }
  };

  const filteredAstrologers = astrologers.filter((astrologer) => {
    const matchSpecialty =
      selectedSpecialties.length === 0 ||
      selectedSpecialties.includes(astrologer.specialty);

    const matchLanguage =
      selectedLanguages.length === 0 ||
      astrologer.languages.some((lang) => selectedLanguages.includes(lang));

    const matchStatus =
      selectedStatus.length === 0 || selectedStatus.includes(astrologer.status);

    return matchSpecialty && matchLanguage && matchStatus;
  });

  return (
    <div className="flex p-4 gap-6">
      {/* Sidebar Filters */}
      <div className="w-64 rounded-lg shadow p-4 h-fit">
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">Specialty</h2>
          {specialties.map((specialty) => (
            <div key={specialty} className="mb-1">
              <input
                type="checkbox"
                id={specialty}
                checked={selectedSpecialties.includes(specialty)}
                onChange={() =>
                  handleCheckboxChange(specialty, setSelectedSpecialties, selectedSpecialties)
                }
              />
              <label htmlFor={specialty} className="ml-2">{specialty}</label>
            </div>
          ))}

          <h2 className="text-lg font-bold mt-4 mb-2">Languages</h2>
          {languages.map((lang) => (
            <div key={lang} className="mb-1">
              <input
                type="checkbox"
                id={lang}
                checked={selectedLanguages.includes(lang)}
                onChange={() =>
                  handleCheckboxChange(lang, setSelectedLanguages, selectedLanguages)
                }
              />
              <label htmlFor={lang} className="ml-2">{lang}</label>
            </div>
          ))}

          <h2 className="text-lg font-bold mt-4 mb-2">Status</h2>
          {statuses.map((stat) => (
            <div key={stat} className="mb-1">
              <input
                type="checkbox"
                id={stat}
                checked={selectedStatus.includes(stat)}
                onChange={() =>
                  handleCheckboxChange(stat, setSelectedStatus, selectedStatus)
                }
              />
              <label htmlFor={stat} className="ml-2 capitalize">{stat}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Astrologer Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredAstrologers.map((astrologer) => (
            <div key={astrologer.id} className="p-4 border rounded-xl shadow-md">
              <img
                src={astrologer.image}
                alt={astrologer.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-bold">{astrologer.name}</h2>
              <p className="text-gray-600">{astrologer.specialty}</p>
              <p className="text-sm text-gray-500">Experience: {astrologer.experience}</p>
              <p className="text-sm text-gray-500">
                Languages: {astrologer.languages.join(", ")}
              </p>
              <p className="text-yellow-600 font-semibold">
                Rating: {astrologer.rating} ⭐
              </p>
              <p className="text-green-600 font-semibold">{astrologer.price}</p>
              <p className="text-sm mt-2">{astrologer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
