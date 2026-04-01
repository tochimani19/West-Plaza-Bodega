import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Star, Dog, CreditCard, Instagram, Facebook, Menu, X, ChevronRight, Phone, ShoppingBag } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cream font-sans text-ink selection:bg-brown selection:text-cream">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-cream/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <a href="#" className={`font-serif font-bold text-2xl tracking-tight ${isScrolled ? 'text-ink' : 'text-white'}`}>
            West Plaza Bodega
          </a>
          
          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center gap-8 font-medium ${isScrolled ? 'text-ink' : 'text-white'}`}>
            <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
            <a href="#menu" className="hover:opacity-70 transition-opacity">Menu</a>
            <a href="#location" className="hover:opacity-70 transition-opacity">Location</a>
            <button className={`px-6 py-2.5 rounded-full transition-colors ${isScrolled ? 'bg-deep-green text-white hover:bg-deep-green/90' : 'bg-white text-ink hover:bg-white/90'}`}>
              Order Online
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden ${isScrolled ? 'text-ink' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-cream shadow-lg py-4 px-4 flex flex-col gap-4 text-ink border-t border-ink/10">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2 font-medium">About</a>
            <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="py-2 font-medium">Menu</a>
            <a href="#location" onClick={() => setMobileMenuOpen(false)} className="py-2 font-medium">Location</a>
            <button className="bg-deep-green text-white px-6 py-3 rounded-full font-medium mt-2">
              Order Online
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-ink">
          <img 
            src="https://lh3.googleusercontent.com/gps-cs-s/AHVAweqnBYilYrYwwcw6vomkuZXnfqVVjY5v7lKgfi2SDDmDYbfamK2QGn7h63T233WfcxyecgDER8S3dfOltaixr4sxZcwmrBXCvobNFSjOlXJ_kfdk1tFP78n1xBxnTgc7hT78kWMI8Ov4AYE=w1000-h1000-k-no" 
            alt="West Plaza Bodega Storefront" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-16">
          <motion.div initial={{opacity: 0, y: 30}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8, ease: "easeOut"}}>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-6 text-xs md:text-sm font-medium uppercase tracking-widest">
              <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <Star className="w-3.5 h-3.5 fill-current text-yellow-400" />
                <span>4.8 Star Local Rating</span>
              </div>
              <span className="hidden sm:inline mx-2 opacity-60">•</span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">Locally loved in Kansas City</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-[1.1]">
              Your Neighborhood Coffee & Pastry Spot in West Plaza
            </h1>
            <p className="text-lg md:text-2xl mb-10 font-light max-w-2xl mx-auto text-white/90">
              Fresh croissants, handcrafted pastries, and a cozy local vibe — every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-deep-green text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-deep-green/90 transition-transform hover:scale-105 active:scale-95 shadow-lg">
                Order Online
              </button>
              <button className="bg-white text-ink px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-transform hover:scale-105 active:scale-95 shadow-lg">
                Get Directions
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="bg-deep-green text-cream py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-cream/20">
          <div className="flex flex-col items-center justify-center p-4">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />)}
            </div>
            <p className="italic font-serif text-xl">"Pastries were amazing..."</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 pt-8 md:pt-4">
            <Dog className="w-8 h-8 mb-4 opacity-90" />
            <p className="italic font-serif text-xl">"Very cool neighborhood vibe"</p>
            <p className="text-xs mt-3 opacity-70 uppercase tracking-widest font-semibold">Dog Friendly</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 pt-8 md:pt-4">
            <CreditCard className="w-8 h-8 mb-4 opacity-90" />
            <p className="italic font-serif text-xl">"Friendly staff & great experience"</p>
            <p className="text-xs mt-3 opacity-70 uppercase tracking-widest font-semibold">Contactless Payment</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-32 bg-cream" id="about">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=800" 
                alt="Cozy interior" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute -bottom-12 -right-8 md:-right-12 w-2/3 aspect-square rounded-3xl overflow-hidden border-8 border-cream shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800" 
                alt="Fresh coffee" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          <div className="lg:pl-8 mt-16 lg:mt-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 text-ink leading-tight">
              More Than Coffee — It's a Neighborhood Experience
            </h2>
            <div className="space-y-6 text-lg text-ink/80 font-light leading-relaxed">
              <p>
                Nestled in the heart of West Plaza, we're your local bakery and bodega-style concept designed for the community.
              </p>
              <p>
                Whether you're grabbing your morning coffee, meeting a friend for a casual catch-up, or making a quick stop for our daily fresh-baked pastries, you'll always find a friendly, welcoming atmosphere here.
              </p>
              <div className="pt-6">
                <p className="font-medium text-ink mb-4 uppercase tracking-wider text-sm">Perfect for:</p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-beige flex items-center justify-center text-brown shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <span className="font-medium">Morning coffee runs</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-beige flex items-center justify-center text-brown shrink-0">
                      <Star className="w-5 h-5" />
                    </div>
                    <span className="font-medium">Casual meetups</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-beige flex items-center justify-center text-brown shrink-0">
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                    <span className="font-medium">Quick pastry stops</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-24 md:py-32 bg-beige" id="menu">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-ink">Fresh Baked Daily</h2>
            <p className="text-lg md:text-xl text-ink/70 max-w-2xl mx-auto font-light">
              Sweet & savory options handcrafted every morning. Here are a few neighborhood favorites.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {[
              { name: 'Almond Croissant', desc: 'Flaky, buttery, filled with sweet almond frangipane.', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600' },
              { name: 'Chocolate Croissant', desc: 'Classic pain au chocolat with rich dark chocolate.', img: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=600' },
              { name: 'Cinnamon Roll', desc: 'Soft, gooey, and topped with cream cheese icing.', img: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&q=80&w=600' },
              { name: 'Cheese Danish', desc: 'Sweet cream cheese filling in a crisp pastry shell.', img: 'https://images.unsplash.com/photo-1626844131082-256783844137?auto=format&fit=crop&q=80&w=600' },
              { name: 'Pecan Sticky Bun', desc: 'Caramelized pecans atop a soft, sweet dough.', img: 'https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?auto=format&fit=crop&q=80&w=600' },
              { name: 'Fruit Puffs', desc: 'Light puff pastry filled with seasonal fruit compote.', img: 'https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&q=80&w=600' },
            ].map((item, index) => (
              <motion.div 
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-cream rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold mb-3 text-ink">{item.name}</h3>
                  <p className="text-ink/70 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <button className="bg-ink text-cream px-10 py-5 rounded-full font-medium text-lg hover:bg-ink/80 transition-transform hover:scale-105 active:scale-95 inline-flex items-center gap-3 shadow-lg">
              View Full Menu / Order Now <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-deep-green text-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16">Why West Plaza Bodega?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
            {[
              { title: 'Fresh Baked Daily', icon: <ShoppingBag className="w-8 h-8" /> },
              { title: 'Unique Bodega Concept', icon: <Star className="w-8 h-8" /> },
              { title: 'Cozy Neighborhood Vibe', icon: <MapPin className="w-8 h-8" /> },
              { title: 'Friendly, Welcoming Staff', icon: <Star className="w-8 h-8" /> },
              { title: 'Dog-Friendly Environment', icon: <Dog className="w-8 h-8" /> },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-cream/10 flex items-center justify-center mb-6 text-cream">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl font-medium max-w-[150px] leading-snug">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-24 md:py-32 bg-cream" id="location">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-12 text-ink">Visit Us</h2>
            
            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="mt-1 bg-beige p-4 rounded-full text-brown shrink-0">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-ink">Location</h3>
                  <p className="text-xl text-ink/80 leading-relaxed">1702 W 45th St<br/>Kansas City, MO</p>
                  <button className="mt-4 text-brown font-bold hover:underline inline-flex items-center gap-1 text-lg">
                    Get Directions <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="mt-1 bg-beige p-4 rounded-full text-brown shrink-0">
                  <Clock className="w-8 h-8" />
                </div>
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-4 text-ink">Hours</h3>
                  <ul className="text-xl text-ink/80 space-y-3 w-full max-w-sm">
                    <li className="flex justify-between border-b border-ink/10 pb-2">
                      <span className="font-medium">Tue–Sun:</span> 
                      <span>7 AM – 4 PM</span>
                    </li>
                    <li className="flex justify-between pt-1 text-ink/50">
                      <span className="font-medium">Monday:</span> 
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[500px] bg-beige rounded-3xl overflow-hidden shadow-xl relative group">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
              alt="Map location" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-white p-4 rounded-full shadow-2xl animate-bounce">
                <MapPin className="w-8 h-8 text-brown fill-brown/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-4 bg-cream overflow-hidden">
        <div className="flex gap-4 px-4 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
          {[
            'https://images.unsplash.com/photo-1550428006-28e4697193dc?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1445116572660-236099ce43f0?auto=format&fit=crop&q=80&w=800'
          ].map((img, i) => (
            <div key={i} className="min-w-[70vw] md:min-w-[300px] lg:min-w-[400px] aspect-square snap-center shrink-0">
              <img src={img} alt="Gallery image" className="w-full h-full object-cover rounded-3xl shadow-md" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-brown text-cream text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <img src="https://lh3.googleusercontent.com/gps-cs-s/AHVAweqnBYilYrYwwcw6vomkuZXnfqVVjY5v7lKgfi2SDDmDYbfamK2QGn7h63T233WfcxyecgDER8S3dfOltaixr4sxZcwmrBXCvobNFSjOlXJ_kfdk1tFP78n1xBxnTgc7hT78kWMI8Ov4AYE=w1000-h1000-k-no" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-12 leading-tight">Stop By or Order Ahead</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-cream text-brown px-10 py-5 rounded-full font-bold text-xl hover:bg-white transition-transform hover:scale-105 shadow-xl">
              Order Online
            </button>
            <button className="bg-transparent border-2 border-cream text-cream px-10 py-5 rounded-full font-bold text-xl hover:bg-cream/10 transition-colors">
              Visit Us Today
            </button>
            <button className="bg-transparent border-2 border-cream text-cream px-10 py-5 rounded-full font-bold text-xl hover:bg-cream/10 transition-colors inline-flex items-center justify-center gap-3">
              <Phone className="w-6 h-6" /> Call Now
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-beige">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-center text-ink">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Do you offer takeout?', a: 'Yes! You can order ahead online or stop by to grab your pastries and coffee to go.' },
              { q: 'Are pets allowed?', a: 'Yes, we are a dog-friendly environment. We love seeing your furry friends!' },
              { q: 'Do you have seating?', a: 'Yes, we have cozy indoor seating perfect for casual meetups or working.' },
              { q: 'What are your busiest hours?', a: 'Our busiest times are typically weekend mornings between 8 AM and 11 AM.' },
            ].map((faq, i) => (
              <div key={i} className="bg-cream p-8 rounded-3xl shadow-sm">
                <h3 className="font-bold text-xl mb-3 text-ink">{faq.q}</h3>
                <p className="text-ink/70 text-lg leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-cream/70 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-serif font-bold text-cream mb-6">West Plaza Bodega</h2>
            <p className="max-w-sm mb-8 text-lg leading-relaxed">Your neighborhood coffee & pastry spot in West Plaza, Kansas City.</p>
            <div className="flex gap-6">
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 hover:text-cream transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 hover:text-cream transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-cream font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h3>
            <ul className="space-y-4 text-lg">
              <li><a href="#menu" className="hover:text-cream transition-colors">Menu</a></li>
              <li><a href="#about" className="hover:text-cream transition-colors">About Us</a></li>
              <li><a href="#location" className="hover:text-cream transition-colors">Location & Hours</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Order Online</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-cream font-bold mb-6 uppercase tracking-widest text-sm">Contact</h3>
            <ul className="space-y-4 text-lg">
              <li>1702 W 45th St<br/>Kansas City, MO</li>
              <li className="pt-4 border-t border-white/10">
                <span className="block text-cream mb-1">Tue–Sun:</span> 7 AM – 4 PM
              </li>
              <li>
                <span className="block text-cream mb-1">Monday:</span> Closed
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-20 pt-8 border-t border-cream/10 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} West Plaza Bodega. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Sticky Order Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-brown text-cream px-6 py-4 rounded-full font-bold shadow-2xl hover:bg-brown/90 transition-transform hover:scale-105 flex items-center gap-3 text-lg">
          <ShoppingBag className="w-6 h-6" />
          <span className="hidden sm:inline">Order Now</span>
        </button>
      </div>
    </div>
  );
}
