import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Eser Online</h3>
          <p className="text-blue-100 text-sm">
            Empowering Sri Lanka with premium fitness and wellness solutions.
            Designed and developed by the Eser Digital Team.
          </p>
          <p className="text-blue-100 text-sm">
            Your trusted partner for fitness and healthy living. Stay active.
            Stay inspired.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-50"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-50"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-50"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-lg">Useful Links</h3>
          <ul className="space-y-2 text-blue-100">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Our Mission
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Our Team
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-lg">Address</h3>
          <div className="bg-gray-200 rounded-lg h-48 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.846527955207!2d79.8933257907629!3d6.908947663972404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259f2be1deb4d%3A0x9e14b859d577d1f5!2sEser%20International%20BH%20Fitness(Head%20Office%20and%20Showroom)!5e0!3m2!1sen!2slk!4v1761426776467!5m2!1sen!2slk"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-blue-500 text-center text-blue-100 text-sm">
        © 2025 All Right Reserved
      </div>
    </footer>
  );
}
