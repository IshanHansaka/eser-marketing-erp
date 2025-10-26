import { CheckCircle } from 'lucide-react';
import Header from '../UI/Header';
import Footer from '../UI/Footer';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative px-8 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-800">
              Unleash Your <span className="text-blue-700">Strength</span>
              <br />
              with the Best Gear
            </h1>
            <p className="text-gray-600 text-lg max-w-md">
              From dumbbells to power racks, we&apos;ve got the tools to help
              you push past your limits. Train harder, recover faster, and feel
              stronger every day.
            </p>
            <button className="px-8 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 font-medium">
              Shop Now
            </button>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/images/landing-image1.png"
                alt="Fitness model"
                width={500}
                height={400}
              />
            </div>
            <div className="absolute top-10 right-10 w-16 h-16 rounded-lg flex items-center justify-center z-20">
              <Image
                src="/images/landing-image2.png"
                alt="Fitness model"
                width={80}
                height={80}
              />
            </div>
            <div className="absolute top-20 left-0 w-12 h-12 rounded-full">
              <Image
                src="/images/landing-image3.png"
                alt="Fitness model"
                width={80}
                height={80}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Best Selling Equipment Section */}
      <section className="px-8 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our <span className="text-blue-700">Best-Selling</span> Equipment
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-blue-50 p-8 flex items-center justify-center h-64">
                <Image
                  src="/images/equipment1.png"
                  alt="PowerMax Multi-Position Bench 250"
                  className="w-full h-full object-contain"
                  width={300}
                  height={300}
                />
              </div>
              <div className="p-6 text-center space-y-4 text-gray-800">
                <h3 className="font-semibold text-lg">
                  PowerMax Multi-Position Bench 250
                </h3>
                <p className="text-2xl font-bold">Rs. 150 000</p>
                <button className="w-full px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 font-medium">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-blue-50 p-8 flex items-center justify-center h-64">
                <Image
                  src="/images/equipment2.png"
                  alt="SmartFlex 360 Bench"
                  className="w-full h-full object-contain"
                  width={300}
                  height={300}
                />
              </div>
              <div className="p-6 text-center space-y-4 text-gray-800">
                <h3 className="font-semibold text-lg">SmartFlex 360 Bench</h3>
                <p className="text-2xl font-bold">Rs. 100 000</p>
                <button className="w-full px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 font-medium">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-blue-50 p-8 flex items-center justify-center h-64">
                <Image
                  src="/images/equipment3.png"
                  alt="ProFlex Adjustable Bench 3000"
                  className="w-full h-full object-contain"
                  width={300}
                  height={300}
                />
              </div>
              <div className="p-6 text-center space-y-4 text-gray-800">
                <h3 className="font-semibold text-lg">
                  ProFlex Adjustable Bench 3000
                </h3>
                <p className="text-2xl font-bold">Rs. 250 000</p>
                <button className="w-full px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 font-medium">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-8 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Image
            src="/images/landing-image4.png"
            alt="Fitness trainers"
            width={600}
            height={600}
          />

          <div className="space-y-6 text-gray-800">
            <h2 className="text-4xl font-bold">
              <span className="text-blue-700">Why</span> Choose Us
            </h2>
            <p className="text-gray-600">
              Discover the Benefits That Set Us Apart and Propel Your Fitness
              Journey Forward.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-blue-700 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Expert Guidance
                  </h3>
                  <p className="text-gray-600">
                    Get free, personalized advice from our certified and
                    knowledgeable staff.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-blue-700 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Premium Value</h3>
                  <p className="text-gray-600">
                    We deliver exceptional durability and innovation at a
                    maintainable and fair price.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-blue-700 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Best-Price Guarantee
                  </h3>
                  <p className="text-gray-600">
                    Maximize your budget with our best-price guarantee and
                    exclusive special offers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto bg-blue-700 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Fitness Community
          </h2>
          <p className="text-blue-100 mb-8">
            Subscribe to get exclusive offers, training tips, and updates on new
            arrivals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Your E-mail"
              className="text-white flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-2 ring-2 focus:ring-blue-300 ring-blue-300"
            />
            <button className="px-8 py-3 bg-white text-blue-700 rounded-full hover:bg-blue-50 font-medium whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
