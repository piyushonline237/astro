"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })

      // Reset message
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <main className="min-h-screen py-12 bg-gradient-to-br from-yellow-700 via-yellow-800 to-black text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-3 text-yellow-400 drop-shadow-lg">Contact Us</h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-white/80 text-lg max-w-2xl mx-auto"
          >
            We'd love to hear from you. Reach out to us with any questions or concerns.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full border border-yellow-400 bg-white/5 backdrop-blur-md">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6 text-yellow-300">Get in Touch</h2>

                <div className="space-y-6 text-white">
                  <div className="flex items-start">
                    <div className="bg-yellow-200 p-3 rounded-full mr-4">
                      <MapPin className="text-yellow-800" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">Our Location</h3>
                      <p className="text-white/80">123 Cosmic Avenue, Spiritual District, Mumbai, India - 400001</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-yellow-200 p-3 rounded-full mr-4">
                      <Phone className="text-yellow-800" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone Number</h3>
                      <p className="text-white/80">+91 98765 43210</p>
                      <p className="text-white/80">+91 12345 67890</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-yellow-200 p-3 rounded-full mr-4">
                      <Mail className="text-yellow-800" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">Email Address</h3>
                      <p className="text-white/80">support@astroguide.com</p>
                      <p className="text-white/80">info@astroguide.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-yellow-200 p-3 rounded-full mr-4">
                      <Clock className="text-yellow-800" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">Working Hours</h3>
                      <p className="text-white/80">Monday - Friday: 9:00 AM - 8:00 PM</p>
                      <p className="text-white/80">Saturday - Sunday: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="border border-yellow-400 bg-white/5 backdrop-blur-md">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6 text-yellow-300">Send Us a Message</h2>

                {isSubmitted ? (
                  <div className="bg-green-100 text-green-700 p-4 rounded-md mb-4">
                    Thank you for your message! We'll get back to you shortly.
                  </div>
                ) : null}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1 text-yellow-200">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="border border-yellow-400 bg-white/10 text-white placeholder-yellow-100"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1 text-yellow-200">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="border border-yellow-400 bg-white/10 text-white placeholder-yellow-100"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1 text-yellow-200">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="border border-yellow-400 bg-white/10 text-white placeholder-yellow-100"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-1 text-yellow-200">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                        className="border border-yellow-400 bg-white/10 text-white placeholder-yellow-100"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium mb-1 text-yellow-200">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      rows={5}
                      required
                      className="border border-yellow-400 bg-white/10 text-white placeholder-yellow-100"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2" size={18} />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <Card className="border border-yellow-400">
            <CardContent className="p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1651489278700!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AstroGuide Location"
              ></iframe>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  )
}
