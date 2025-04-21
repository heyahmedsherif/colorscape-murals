import React from 'react';
import { Menu, X, Phone, Mail, Instagram, MapPin } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:colorscapemurals@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const murals = [
    {
      title: "Public Spaces",
      imagePath: "./images/public1.jpg",
      alt: "Public mural at Omar K. Lightfoot Recreation Center"
    },
    {
      title: "Educational Spaces",
      imagePath: "./images/03_Ameena.jpg",
      alt: "Educational mural in a learning environment"
    },
    {
      title: "Residential & Commercial",
      imagePath: "./images/commercial1.jpg",
      alt: "Commercial mural at Seagate Chiropractic"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-4">
              <img 
                src="./images/Colorscape_Murals_Logo.png"
                alt="Colorscape Murals Logo" 
                className="h-10 w-auto"
                loading="eager"
              />
              <h1 className="text-xl font-bold">Colorscape Murals</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#portfolio" className="text-gray-700 hover:text-gray-900">Portfolio</a>
              <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
              <a href="#getting-started" className="text-gray-700 hover:text-gray-900">Getting Started</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-gray-900"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#portfolio" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Portfolio</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-gray-900">About</a>
              <a href="#getting-started" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Getting Started</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative w-full h-[100dvh] flex flex-col">
        <div className="absolute inset-0 z-0">
          <img
            src="./images/ameena_landing.jpg"
            alt="Colorful mural with tropical leaves"
            className="w-full h-full object-cover"
            loading="eager"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-black opacity-20"></div>
        </div>
        <div className="relative z-10 flex-1 flex items-end pb-8">
          <div className="w-full text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
              Transforming Spaces Through Art
            </h1>
            <p className="mt-6 text-xl text-gray-200">
              Custom murals that bring your walls to life
            </p>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {murals.map((mural, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={mural.imagePath}
                    alt={mural.alt}
                    className="w-full h-64 object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{mural.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:space-x-8">
            <div className="lg:w-1/2">
              <img
                src="./images/04_Ameena_upclose.jpg"
                alt="Artist at work"
                className="rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <h2 className="text-3xl font-bold mb-6">About the Artist</h2>
              <p className="text-gray-600">
                With experience in creating stunning murals for public, commercial, and residential spaces, Ameena Khan brings spaces to life through vibrant colors and meaningful designs. Each project is approached with creativity, precision, and a deep understanding of how art can transform environments and touch people's lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section id="getting-started" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Getting Started</h2>
          <div className="flex justify-center">
            <div className="max-w-4xl w-full">
              <img
                src="./images/MuralCommissionProcess.png"
                alt="Mural Commission Process"
                className="w-full rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-gray-600" />
                  <span>(352) 494-1501</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-gray-600" />
                  <a href="mailto:colorscapemurals@gmail.com" className="text-blue-600 hover:text-blue-800">colorscapemurals@gmail.com</a>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-gray-600" />
                  <span>Tampa Bay, FL</span>
                </div>
                <div className="flex items-center">
                  <Instagram className="w-5 h-5 mr-2 text-gray-600" />
                  <a href="https://www.instagram.com/ameenakhanart/" className="text-blue-600 hover:text-blue-800">@AmeenaKhanArt</a>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>© 2024 Colorscape Murals. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;