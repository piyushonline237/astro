'use client';

export default function Footerbar() {
  return (
    <footer className="text-white py-10 px-6" style={{ backgroundColor: '#130f40' }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-3 text-yellow-400">Our Location</h2>
          <p className="text-white/80 leading-relaxed">
            123 Cosmic Avenue,<br />
            Spiritual District,<br />
            Mumbai, India - 400001
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3 text-yellow-400">Phone Number</h2>
          <p className="text-white/80">+91 98765 43210</p>
          <p className="text-white/80">+91 12345 67890</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3 text-yellow-400">Email & Hours</h2>
          <p className="text-white/80">support@astroguide.com</p>
          <p className="text-white/80">info@astroguide.com</p>
          <p className="mt-3 text-white/80">Monday - Friday: 9:00 AM - 8:00 PM</p>
          <p className="text-white/80">Saturday - Sunday: 10:00 AM - 6:00 PM</p>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-white/60 border-t border-white/10 pt-6">
        &copy; {new Date().getFullYear()} <span className="font-semibold text-yellow-400">AstroGuide</span>. All rights reserved.
      </div>
    </footer>
  );
}
