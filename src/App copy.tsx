import { useState, useRef } from 'react';
import { 
  Copy, 
  Check, 
  Calendar, 
  Star,
  ArrowRight,
  Play,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Quote,
  Home
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

// Extended testimonials - 20+ reviews
const testimonials = [
  { id: 1, name: 'Rabecca K', text: 'First Time Home Buyer! Saved over 18K', image: '/client-shelby.jpg', rating: 5 },
  { id: 2, name: 'Rhonda C', text: 'First Time Home Buyer! Saved over 20K', image: '/client-rhonda.jpg', rating: 5 },
  { id: 3, name: 'Shelby S', text: '5th house they have bought/sold with me', image: '/client-shelby.jpg', rating: 5 },
  { id: 4, name: 'Ty C', text: 'Helped them buy and sell', image: '/client-ty.jpg', rating: 5 },
  { id: 5, name: 'Bryan K', text: 'Helped them buy and sell', image: '/client-jack.jpg', rating: 5 },
  { id: 6, name: 'Matt W', text: 'Helped them sell their home for top dollar', image: '/client-jamie.jpg', rating: 5 },
  { id: 7, name: 'Tony S', text: 'Sold their home for exactly what they wanted!', image: '/client-jaden.jpg', rating: 5 },
  { id: 8, name: 'Chris N', text: 'Multiple offers, sold FAST!', image: '/client-ty.jpg', rating: 5 },
  { id: 9, name: 'Nef A', text: 'Paid $0 in down payment and closing costs', image: '/client-jack.jpg', rating: 5 },
  { id: 10, name: 'Clayton G', text: 'Got what they wanted in 1 week!', image: '/client-jamie.jpg', rating: 5 },
  { id: 11, name: 'Avery D.', text: 'Referral partner with consistent results', image: '/client-jaden.jpg', rating: 5 },
  { id: 12, name: 'Mike C.', text: 'Referral partner who knows the process', image: '/client-rhonda.jpg', rating: 5 },
  { id: 13, name: 'Grant E.', text: 'Referral partner!', image: '/client-jack.jpg', rating: 5 },
  { id: 14, name: 'Jack H', text: 'Have helped him for years!', image: '/client-jack.jpg', rating: 5 },
  { id: 15, name: 'Jamie L', text: 'Sold his moms old house', image: '/client-jamie.jpg', rating: 5 },
  { id: 16, name: 'Ryan C', text: 'Trusted client experience', image: '/client-ty.jpg', rating: 5 },
  { id: 17, name: 'Ben G.', text: 'Reliable realtor with strong results', image: '/client-rhonda.jpg', rating: 5 },
  { id: 18, name: 'Brenda O.', text: 'Helped her buy and sell', image: '/client-jack.jpg', rating: 5 },
  { id: 19, name: 'Vinney P.', text: 'Paid $0 in down payment and closing costs', image: '/client-jaden.jpg', rating: 5 },
  { id: 20, name: 'Jaden O.', text: 'Repeat client - multiple transactions', image: '/client-jaden.jpg', rating: 5 },
  { id: 21, name: 'Todd B.', text: 'Excellent service and communication', image: '/client-todd.jpg', rating: 5 },
  { id: 22, name: 'Layne M', text: 'Highly recommended realtor', image: '/client-ty.jpg', rating: 5 },
];

// Google reviews - extended
const googleReviews = [
  { id: 1, name: 'Shelby Potter', text: 'Working with Conner to sell our home was a wonderful experience! He was very knowledgeable about the entire process and made it as painless as possible. We appreciated his professional, yet personal approach.', rating: 5 },
  { id: 2, name: 'Vinny Paterno', text: 'Conner demonstrated exceptional professionalism, communication, and dedication. The entire process was seamless and I couldn’t be happier with the experience.', rating: 5 },
  { id: 3, name: 'Sky Hamel', text: 'Connor made our first time home buying experience so smooth and seamless. He was there every step of the way and went out of his way to do whatever it took to get our first home.', rating: 5 },
  { id: 4, name: 'Tharon Bideler', text: 'Hands down Conner is the best realtor around. Great communication and is always looking out for your best interest. Give him a call.', rating: 5 },
  { id: 5, name: 'Anna Fuller', text: 'The best in the business! Sold our home for more money than we expected.', rating: 5 },
  { id: 6, name: 'David Nickle', text: 'Thankful for Conner and his wealth of knowledge. He’s been very helpful, easy to communicate with and always available to answer my questions.', rating: 5 },
  { id: 7, name: 'Ron Morgan', text: 'Conner is a very compassionate honest caring realtor. He has a very organized process for doing business and speaks to his clients at least twice a week.', rating: 5 },
  { id: 8, name: 'Gerardo Cruz', text: 'I have been investing in real estate for over 20 years. Conner is the most professional, knowledgeable and honest agent I have worked with in Texas.', rating: 5 },
  { id: 9, name: 'Amado Rodriguez', text: 'Conner did an amazing job helping us with our first purchase. He followed through with his words and I would recommend him 10 out of 10.', rating: 5 },
];

// Client phone numbers
const clientPhones = [
  { name: 'Sam Potter', phone: '713-314-7409' },
  { name: 'Rhonda Culver', phone: '303-638-8837' },
  { name: 'Ty Currington', phone: '817-899-6670' },
  { name: 'Bryan Keith', phone: '940-224-6110' },
  { name: 'Ron Watts', phone: '817-637-2179' }
];

// Video library - actual landing page videos
const videos = [
  { id: 1, title: "Let's See If We're A Good Fit", embedId: 'a2bGOCODtvQ', thumbnail: 'https://img.youtube.com/vi/a2bGOCODtvQ/hqdefault.jpg', duration: '10:00', featured: true },
  { id: 2, title: 'Bryan K - Helped them buy and sell', embedId: 'cn0kSb85FmA', thumbnail: 'https://img.youtube.com/vi/cn0kSb85FmA/hqdefault.jpg', duration: '4:20', featured: true },
  { id: 3, title: 'Matt W - Sold their home for top dollar', embedId: 'zGlhLY5PDnE', thumbnail: 'https://img.youtube.com/vi/zGlhLY5PDnE/hqdefault.jpg', duration: '4:45', featured: true },
  { id: 4, title: 'Chris N - Multiple offers, sold FAST', embedId: 'sbk19F25jJs', thumbnail: 'https://img.youtube.com/vi/sbk19F25jJs/hqdefault.jpg', duration: '3:50', featured: true },
  { id: 5, title: 'Nef A - Paid $0 in down payment and closing costs', embedId: 'VGK7NLCW2Fw', thumbnail: 'https://img.youtube.com/vi/VGK7NLCW2Fw/hqdefault.jpg', duration: '4:20' },
  { id: 6, title: 'Clayton G - Got what they wanted in 1 week', embedId: 'Hph9x2dXb88', thumbnail: 'https://img.youtube.com/vi/Hph9x2dXb88/hqdefault.jpg', duration: '5:10' },
  { id: 7, title: 'Tony S - Sold their home for exactly what they wanted', embedId: 'VsfytPlr2ZY', thumbnail: 'https://img.youtube.com/vi/VsfytPlr2ZY/hqdefault.jpg', duration: '4:10' },
  { id: 8, title: 'Avery D. - Referral Partner', embedId: 'E6kVJne2DO0', thumbnail: 'https://img.youtube.com/vi/E6kVJne2DO0/hqdefault.jpg', duration: '3:40' },
  { id: 9, title: 'Grant E. - Referral Partner', embedId: 'szvYPq6qJ9I', thumbnail: 'https://img.youtube.com/vi/szvYPq6qJ9I/hqdefault.jpg', duration: '3:30' },
  { id: 10, title: 'Jack H. - Have helped him for years', embedId: 'EXmvJyEi1pQ', thumbnail: 'https://img.youtube.com/vi/EXmvJyEi1pQ/hqdefault.jpg', duration: '3:45' },
  { id: 11, title: 'Jamie L. - Sold his moms old house', embedId: '-dOCjw2gjUA', thumbnail: 'https://img.youtube.com/vi/-dOCjw2gjUA/hqdefault.jpg', duration: '4:00' },
  { id: 12, title: 'Ryan C. - Trusted client experience', embedId: 'XRkX8dl1GGg', thumbnail: 'https://img.youtube.com/vi/XRkX8dl1GGg/hqdefault.jpg', duration: '3:55' },
  { id: 13, title: 'Brenda O. - Helped her buy and sell', embedId: '4ZaUYqs0WXU', thumbnail: 'https://img.youtube.com/vi/4ZaUYqs0WXU/hqdefault.jpg', duration: '4:10' },
  { id: 14, title: 'Jaden O. - Repeat client, multiple transactions', embedId: '7Y8NK4_TdIE', thumbnail: 'https://img.youtube.com/vi/7Y8NK4_TdIE/hqdefault.jpg', duration: '4:00' },
  { id: 15, title: 'Todd B. - Excellent service and communication', embedId: 'PROMLBmV-KM', thumbnail: 'https://img.youtube.com/vi/PROMLBmV-KM/hqdefault.jpg', duration: '4:30' },
  { id: 16, title: 'Layne M. - Highly recommended realtor', embedId: 'OSU9Kv_Y5Y8', thumbnail: 'https://img.youtube.com/vi/OSU9Kv_Y5Y8/hqdefault.jpg', duration: '4:20' },
];

function App() {
  const [showBooking, setShowBooking] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [reviewPage, setReviewPage] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoScrollRef = useRef<HTMLDivElement | null>(null);
  const reviewsPerPage = 3;
  const totalReviewPages = Math.ceil(googleReviews.length / reviewsPerPage);
  const selectedVideo = activeVideo ? videos.find((video) => video.embedId === activeVideo) : null;

  const scrollVideoRow = (direction: 'left' | 'right') => {
    if (!videoScrollRef.current) return;
    const scrollAmount = videoScrollRef.current.clientWidth * 0.9;
    videoScrollRef.current.scrollBy({ left: direction === 'right' ? scrollAmount : -scrollAmount, behavior: 'smooth' });
  };

  const copyPhone = (phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(phone);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const nextReviewPage = () => {
    setReviewPage((prev) => (prev + 1) % totalReviewPages);
  };

  const prevReviewPage = () => {
    setReviewPage((prev) => (prev - 1 + totalReviewPages) % totalReviewPages);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header - Clean */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 z-50">
  <div className="max-w-7xl mx-auto px-6 py-5 flex items-center">
    
    {/* Left - Logo */}
    <div className="flex items-center gap-2 flex-1">
      <Home className="w-6 h-6 text-[#C75B39]" />
      <span className="font-semibold text-lg">Conner Nielsen</span>
    </div>
    
    {/* Center - Menu */}
    <div className="hidden md:flex items-center justify-center gap-8 text-sm flex-1">
      <button onClick={() => scrollToSection('videos')} className="text-gray-600 hover:text-gray-900 transition-colors">Videos</button>
      <button onClick={() => scrollToSection('reviews')} className="text-gray-600 hover:text-gray-900 transition-colors">Reviews</button>
      <button onClick={() => scrollToSection('proof')} className="text-gray-600 hover:text-gray-900 transition-colors">Proof</button>
    </div>

    {/* Right - CTA */}
    <div className="hidden md:flex justify-end flex-1">
  <button 
    onClick={() => setShowBooking(true)}
    className="bg-[#A10D02] hover:bg-[#8D0B01] text-white px-6 py-2.5 rounded-full font-medium transition-transform duration-150 transform hover:translate-y-1"
  >
    Book a Call
  </button>
</div>

    {/* Mobile Menu Button */}
    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
      {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  </div>

  {mobileMenuOpen && (
    <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
      <button onClick={() => scrollToSection('videos')} className="block w-full text-left py-2 text-gray-600">Videos</button>
      <button onClick={() => scrollToSection('reviews')} className="block w-full text-left py-2 text-gray-600">Reviews</button>
      <button onClick={() => scrollToSection('proof')} className="block w-full text-left py-2 text-gray-600">Proof</button>
      <button 
        onClick={() => { setShowBooking(true); setMobileMenuOpen(false); }} 
        className="bg-[#C75B39] text-white w-full py-3 rounded-full font-medium"
      >
        Book a Call
      </button>
    </div>
  )}
</header>

      {/* HERO - Clean, focused on ONE action */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full bg-black">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ 
              position: 'absolute',
              top: '50%',
              left: '50%',
              minWidth: '100%',
              minHeight: '100%',
              width: 'auto',
              height: 'auto',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <source src="/background-video.mp4" type="video/mp4" />
          </video>
          {!videoLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
          )}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content - Clean & Simple */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center text-white">

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug mb-4">
            North Texas Realtor
          </h1>
          
          <p className="text-sm md:text-base text-white/100 max-w-lg mx-auto mb-4">
            Get more value than anywhere else in just 10 minutes <br></br>and you could win $1,000 or $2,000 every month!
          </p>

          {/* ONE Clear Action */}
          <button 
          onClick={() => setShowBooking(true)}
         className="bg-[#A10D02] hover:bg-[#8D0B01] text-white px-10 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-2 transition-transform duration-150 transform hover:translate-y-1"
      >
       <Calendar className="w-5 h-5" />
          Book a Free Call
      </button>

          <p className="text-white/90 text-sm mt-4">Have a conversation with me, for free.</p>
        </div>
      </section>

      {/* FEATURED VIDEOS - Clean, not overwhelming */}
      <section className="py-16 md:py-20 px-6 bg-white ">
        <div className="max-w-6xl mx-auto text-center">
        </div>
      </section>

      <section id="videos" className="py-24 md:py-32 px-6 bg-white-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">How I Give You More Value</h3>
            <p className="text-gray-600 max-w-xl mx-auto">Watch how I work and see why I am the right realtor for you</p>
          </div>

          {/* Featured Videos - main video centered */}
          <div className="max-w-5xl mx-auto mb-14">
            {videos.filter((video) => video.id === 1).map((video) => (
              <div
                key={video.id}
                className="group relative overflow-hidden cursor-pointer bg-gray-900 shadow-2xl rounded-[32px] mx-auto max-w-4xl aspect-[16/9]"
                onClick={() => setActiveVideo(video.embedId)}
              >
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-[#C75B39] ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 to-transparent">
                  <p className="font-semibold text-white text-lg md:text-xl">{video.title}</p>
                  <p className="text-white/70 text-sm md:text-base">{video.duration}</p>
                </div>
              </div>
            ))}
          </div>
                  {/*metrics bar*/}
                  <div className="flex flex-wrap justify-between max-w-4xl mx-auto mb-8">
                  <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-[#8D0B01]">$250M+</p>
                 <p className="text-xs md:text-sm font-bold text-black/100">In Sales</p>
               </div>
                 <div className="text-center">
                 <p className="text-3xl md:text-4xl font-bold text-[#8D0B01]">500+</p>
                  <p className="text-xs md:text-sm font-bold text-black/100">Homes Sold</p>
               </div>
                <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#8D0B01]">10+</p>
               <p className="text-xs md:text-sm font-bold text-black/100">Years</p>
               </div>
              </div>
                <br></br>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {videos.filter((video) => video.featured && video.id !== 1).map((video) => (
              <div
                key={video.id}
                className="group relative overflow-hidden cursor-pointer shadow-lg rounded-3xl aspect-video"
                onClick={() => setActiveVideo(video.embedId)}
              >
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-[#C75B39] ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="font-semibold text-white text-sm">{video.title}</p>
                  <p className="text-white/60 text-xs">{video.duration}</p>
                </div>
              </div>
            ))}
          </div>

          {/* More Videos - Scrollable */}
          {/* More Videos - Infinite Auto-Scroll with Fade */}
<div className="pt-12">
  {/* CSS Injection for the Marquee - Put this anywhere in the component */}
  <style>{`
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      animation: marquee 60s linear infinite;
    }
  `}</style>

  <div className="flex items-center justify-center mb-8 px-1">
    <p className="text-base font-semibold text-gray-700">See what they say</p>
  </div>

  <div className="relative group overflow-hidden">
    {/* 🔍 Fade Edges: Gradient overlays */}
    <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-20 bg-gradient-to-r from-white via-white/80 to-transparent" />
    <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-20 bg-gradient-to-l from-white via-white/80 to-transparent" />

    {/* Scrolling Container */}
    <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] py-4">
      {/* Render list twice for seamless loop */}
      {[...videos.filter(v => !v.featured), ...videos.filter(v => !v.featured)].map((video, i) => (
        <div
          key={`${video.id}-${i}`}
          className="flex flex-col items-center gap-3 px-4 flex-shrink-0 cursor-pointer"
          onClick={() => setActiveVideo(video.embedId)}
        >
          <div className="w-40 h-40 group/item relative overflow-hidden bg-gray-900 rounded-3xl shadow-md transition-shadow hover:shadow-xl">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover opacity-80 group-hover/item:opacity-60 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-xl transition-transform group-hover/item:scale-110">
                <Play className="w-6 h-6 text-[#C75B39]" fill="currentColor" />
              </div>
            </div>
          </div>
          <p className="text-gray-700 text-xs text-center w-40 line-clamp-2 leading-relaxed">
            {video.title}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>
</div>
      </section>

      {/* REVIEWS HEADER */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Verified Reviews</h2>
          <p className="text-gray-500 text-lg mt-2">75+ Five-Star Reviews from Real Clients</p>
        </div>
      </section>

      {/* REVIEWS - HEAVY FOCUS - Scrollable */}
      <section id="reviews" className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#C75B39] font-semibold text-sm uppercase tracking-wider mb-2">What Clients Say</p>
            <p className="text-gray-600 max-w-xl mx-auto">Read what real clients have to say about working with me.</p>
          </div>

          {/* Google Reviews Carousel */}
          <div className="relative mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full">
                <Star className="w-5 h-5 text-green-600" fill="currentColor" />
                <span className="font-semibold text-green-700">Google Reviews</span>
                <span className="text-green-600 text-sm">4.9/5</span>
              </div>
            </div>

            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${reviewPage * 100}%)` }}
              >
                {Array.from({ length: totalReviewPages }).map((_, pageIdx) => (
                  <div key={pageIdx} className="w-full flex-shrink-0 px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                      {googleReviews.slice(pageIdx * reviewsPerPage, (pageIdx + 1) * reviewsPerPage).map((review) => (
                        <div key={review.id} className="bg-gray-50 rounded-xl p-6">
                          <div className="flex items-center gap-1 mb-3">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-amber-400" fill="currentColor" />
                            ))}
                          </div>
                          <Quote className="w-6 h-6 text-[#C75B39] mb-2" />
                          <p className="text-gray-700 text-sm leading-relaxed mb-4">"{review.text}"</p>
                          <p className="font-semibold text-sm">— {review.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center gap-4 mt-6">
              <button onClick={prevReviewPage} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {Array.from({ length: totalReviewPages }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-2 h-2 rounded-full transition-colors ${i === reviewPage ? 'bg-[#C75B39]' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
              <button onClick={nextReviewPage} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

                {/* PROOF SECTION - Updated to match testimonial style */}
<section id="proof" className="py-24 md:py-32 px-6 bg-white">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-14">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Verify Directly</h2>
      <p className="text-gray-600 text-lg mb-12 max-w-xl mx-auto">
        Call any of my past clients directly. Ask about their experience, the results they got, and why they'd recommend me.
      </p>
    </div>

    {/* Phone Grid - Matching the testimonial style */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10">
      {clientPhones.map((client) => (
        <div key={client.name} className="bg-gray-50 border border-[#A10D02]-70 rounded-lg p-4 text-center flex flex-col justify-between shadow-sm">
          <div>
            <p className="font-semibold text-sm mb-2 text-gray-900">{client.name}</p>
            <p className="text-gray-600 text-xs mb-3">{client.phone}</p>
          </div>
          
          <button 
            onClick={() => copyPhone(client.phone)}
            className="mt-auto text-[10px] uppercase tracking-wider font-medium text-[#A10D02] hover:text-[#A10D02] flex items-center justify-center gap-1 mx-auto transition-colors"
          >
            {copiedPhone === client.phone ? (
              <>
                <Check className="w-3 h-3" />
                Dialing...
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                Call now
              </>
            )}
          </button>
        </div>
      ))}
    </div>
  </div>
</section>

          {/* More Testimonials - Scrollable Grid */}
          <div className="more-testimonials max-w-6xl mx-auto">
            <p className="text-sm text-gray-500 mb-4 text-center">More Client Stories</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {testimonials.slice(0, 15).map((t) => (
                <div key={t.id} className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="font-semibold text-sm mb-2">{t.name}</p>
                  <p className="text-gray-600 text-xs line-clamp-2">"{t.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center text-white">
          <p className="text-[#011936]/100 weight-bold text-md mb-8">
            Book a free 15-minute call. No pressure, no obligation. Just a conversation about your goals.
          </p>
          <button 
            onClick={() => setShowBooking(true)}
            className="bg-[#A10D02] text-white px-10 py-4 rounded-full font-semibold text-lg transition-all inline-flex items-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            Book Your Free Call
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Home className="w-6 h-6 text-[#C75B39]" />
              <span className="font-bold text-xl">Conner Nielsen</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-white/60">DFW Real Estate Expert</p>
              <p className="text-[#C75B39] font-mono">806-928-8884</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
            © 2024 Conner Nielsen. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <Dialog open={showBooking} onOpenChange={setShowBooking}>
        <DialogContent className="max-w-md mx-4 bg-white rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center">Book Your Free Call</DialogTitle>
            <DialogDescription className="text-center text-gray-600">
              15 minutes. No pressure. Just a conversation.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-6 text-center">
            <div className="w-16 h-16 bg-[#C75B39]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-[#C75B39]" />
            </div>
            <p className="text-gray-700 mb-6">Click below to view my calendar and book a time that works for you.</p>
            <a 
              href="https://myworkspacebfb9d.myclickfunnels.com/schedule/ic-with-conner"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setShowBooking(false)}
              className="bg-[#C75B39] text-white px-8 py-4 rounded-full font-semibold transition-all inline-flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              View Calendar
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </DialogContent>
      </Dialog>

      {/* Video Modal */}
      <Dialog open={activeVideo !== null} onOpenChange={() => setActiveVideo(null)}>
        <DialogContent 
          className="!bg-black !p-0 !border-0 !rounded-none !max-w-none !w-screen !h-screen !top-0 !left-0 !translate-x-0 !translate-y-0 fixed"
          showCloseButton={false}
        >
          <div className="bg-black h-full flex flex-col relative">
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 flex-shrink-0 z-10">
              <div className="flex-1">
                <p className="text-white text-sm font-semibold">{selectedVideo?.title ?? 'Watch Video'}</p>
                <p className="text-white/50 text-xs">{selectedVideo ? `${selectedVideo.duration} • YouTube` : 'Video player'}</p>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="text-white/70 hover:text-white flex-shrink-0 ml-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 bg-black overflow-hidden">
              {activeVideo ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1&controls=1`}
                  title={selectedVideo?.title ?? 'Video player'}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center text-white/60">
                    <Play className="w-16 h-16 mx-auto mb-4" />
                    <p>Loading video...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
