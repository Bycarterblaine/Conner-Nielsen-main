import { useState, useRef, useEffect } from 'react';
import { Phone, PhoneOutgoing } from 'lucide-react';
import { Calendar, Star, Play, X, Quote, Facebook, Instagram } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { blogs } from '@/data/blogs';

// ─── Icons ───────────────────────────────────────────────────────────────────

const RealtorIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.975 0C5.362 0 0 5.362 0 11.975c0 6.612 5.362 11.975 11.975 11.975 6.612 0 11.975-5.363
      11.975-11.975C23.95 5.362 18.587 0 11.975 0zm2.99 18.406l-2.953-4.938h-1.08v4.938H8.268V5.594h4.183
      c2.386 0 3.996 1.61 3.996 3.996 0 1.847-1.003 3.136-2.493 3.694l3.255 5.122h-2.244zm-1.787-6.973
      c1.099 0 1.869-.718 1.869-1.843s-.77-1.843-1.869-1.843h-2.246v3.686h2.246z"
    />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const testimonials = [
  { id: 1,  name: 'Rabecca K',  text: 'First Time Home Buyer! Saved over 18K',              image: '/client-shelby.jpg',  rating: 5 },
  { id: 2,  name: 'Rhonda C',   text: 'First Time Home Buyer! Saved over 20K',              image: '/client-rhonda.jpg',  rating: 5 },
  { id: 3,  name: 'Shelby S',   text: '5th house they have bought/sold with me',            image: '/client-shelby.jpg',  rating: 5 },
  { id: 4,  name: 'Ty C',       text: 'Helped them buy and sell',                           image: '/client-ty.jpg',      rating: 5 },
  { id: 5,  name: 'Bryan K',    text: 'Helped them buy and sell',                           image: '/client-jack.jpg',    rating: 5 },
  { id: 6,  name: 'Matt W',     text: 'Helped them sell their home for top dollar',         image: '/client-jamie.jpg',   rating: 5 },
  { id: 7,  name: 'Tony S',     text: 'Sold their home for exactly what they wanted!',      image: '/client-jaden.jpg',   rating: 5 },
  { id: 8,  name: 'Chris N',    text: 'Multiple offers, sold FAST!',                        image: '/client-ty.jpg',      rating: 5 },
  { id: 9,  name: 'Nef A',      text: 'Paid $0 in down payment and closing costs',         image: '/client-jack.jpg',    rating: 5 },
  { id: 10, name: 'Clayton G',  text: 'Got what they wanted in 1 week!',                   image: '/client-jamie.jpg',   rating: 5 },
  { id: 11, name: 'Avery D.',   text: 'Referral partner with consistent results',          image: '/client-jaden.jpg',   rating: 5 },
  { id: 12, name: 'Mike C.',    text: 'Referral partner who knows the process',            image: '/client-rhonda.jpg',  rating: 5 },
  { id: 13, name: 'Grant E.',   text: 'Referral partner!',                                 image: '/client-jack.jpg',    rating: 5 },
  { id: 14, name: 'Jack H',     text: 'Have helped him for years!',                        image: '/client-jack.jpg',    rating: 5 },
  { id: 15, name: 'Jamie L',    text: 'Sold his moms old house',                           image: '/client-jamie.jpg',   rating: 5 },
  { id: 16, name: 'Ryan C',     text: 'Trusted client experience',                         image: '/client-ty.jpg',      rating: 5 },
  { id: 17, name: 'Ben G.',     text: 'Reliable realtor with strong results',              image: '/client-rhonda.jpg',  rating: 5 },
  { id: 18, name: 'Brenda O.',  text: 'Helped her buy and sell',                           image: '/client-jack.jpg',    rating: 5 },
  { id: 19, name: 'Vinney P.',  text: 'Paid $0 in down payment and closing costs',        image: '/client-jaden.jpg',   rating: 5 },
  { id: 20, name: 'Jaden O.',   text: 'Repeat client - multiple transactions',             image: '/client-jaden.jpg',   rating: 5 },
  { id: 21, name: 'Todd B.',    text: 'Excellent service and communication',               image: '/client-todd.jpg',    rating: 5 },
  { id: 22, name: 'Layne M',    text: 'Highly recommended realtor',                        image: '/client-ty.jpg',      rating: 5 },
];

const googleReviews = [
  { id: 1,  name: 'Shelby Potter',   rating: 5, text: 'Working with Conner to sell our home was a wonderful experience! He was very knowledgeable about the entire process and made it as painless as possible. We appreciated his professional, yet personal approach.' },
  { id: 2,  name: 'Vinny Paterno',   rating: 5, text: 'Conner demonstrated exceptional professionalism, communication, and dedication. The entire process was seamless and I couldn\'t be happier with the experience.' },
  { id: 3,  name: 'Sky Hamel',       rating: 5, text: 'Connor made our first time home buying experience so smooth and seamless. He was there every step of the way and went out of his way to do whatever it took to get our first home.' },
  { id: 4,  name: 'Tharon Bideler',  rating: 5, text: 'Hands down Conner is the best realtor around. Great communication and is always looking out for your best interest. Give him a call.' },
  { id: 5,  name: 'Anna Fuller',     rating: 5, text: 'The best in the business! Sold our home for more money than we expected.' },
  { id: 6,  name: 'David Nickle',    rating: 5, text: 'Thankful for Conner and his wealth of knowledge. He\'s been very helpful, easy to communicate with and always available to answer my questions.' },
  { id: 7,  name: 'Ron Morgan',      rating: 5, text: 'Conner is a very compassionate honest caring realtor. He has a very organized process for doing business and speaks to his clients at least twice a week.' },
  { id: 8,  name: 'Gerardo Cruz',    rating: 5, text: 'I have been investing in real estate for over 20 years. Conner is the most professional, knowledgeable and honest agent I have worked with in Texas.' },
  { id: 9,  name: 'Amado Rodriguez', rating: 5, text: 'Conner did an amazing job helping us with our first purchase. He followed through with his words and I would recommend him 10 out of 10.' },
  { id: 10, name: 'Minerva Lewis',   rating: 5, text: 'I had a terrific experience selling my home!! They were aggressive, and responsive, and kept me updated throughout the entire selling process. Thanks to their competence, I was able to sell my house promptly and at a good price.' },
  { id: 11, name: 'Cora S. Harmon',  rating: 5, text: 'Close Real Estate assisted me in finding the perfect property for my family. They were responsive to our needs, listened to our preferences, and negotiated an excellent price for us. From beginning to end, the procedure ran smoothly and efficiently.' },
  { id: 12, name: 'Brittany Ross',   rating: 5, text: 'We cannot thank Close Real enough for helping us find our perfect home. From day one, they listened to our needs and worked tirelessly to find properties that matched our criteria. Their negotiation skills were outstanding, and thanks to their expertise, we were able to secure our dream home at a price that fit within our budget. Throughout the entire process, Close Real provided unwavering support, making the home-buying journey smooth and stress-free.' },
  { id: 13, name: 'Pam Morgan',      rating: 5, text: 'We were worried about the negotiation process, but Close Real handled it like pros. They secured a fantastic deal for our new home, we couldn\'t be happier!' },
  { id: 14, name: 'Emma Smith',      rating: 5, text: 'Working with Conner was a breeze! He listened to our needs and found us the perfect home. His attention to detail and knowledge of the market made the process smooth and stress-free.' },
  { id: 15, name: 'Noah Johnson',    rating: 5, text: 'Conner is a true professional. He went above and beyond to sell our property quickly and at a great price. His communication skills and dedication to his clients are unmatched.' },
  { id: 16, name: 'Sophia Williams', rating: 5, text: 'Conner\'s expertise in real estate is evident from the first meeting. He provided valuable insights and guidance throughout the buying process. I highly recommend him to anyone in need of a reliable realtor.' },
  { id: 17, name: 'Liam Jones',      rating: 5, text: 'We had a fantastic experience with Conner. He is not only knowledgeable but also incredibly patient. He took the time to understand our preferences and helped us find the perfect home. Five stars.' },
  { id: 18, name: 'Olivia Brown',    rating: 5, text: 'Conner is a top-notch realtor who understands the market inside out. He is responsive, professional, and truly cares about his clients. I wouldn\'t hesitate to work with him again.' },
];

const clientPhones = [
  { name: 'Sam Potter',    phone: '713-314-7409' },
  { name: 'Rhonda Culver', phone: '303-638-8837' },
  { name: 'Ty Currington', phone: '817-899-6670' },
  { name: 'Bryan Keith',   phone: '940-224-6110' },
  { name: 'Ron Watts',     phone: '817-637-2179' },
];

const videos = [
  { id: 1,  featured: true,  duration: '10:00', embedId: 'a2bGOCODtvQ', thumbnail: 'https://img.youtube.com/vi/a2bGOCODtvQ/hqdefault.jpg', title: 'Watch how I work and see why I am the right realtor for you' },
  { id: 2,  featured: true,  duration: '4:20',  embedId: 'cn0kSb85FmA', thumbnail: 'https://img.youtube.com/vi/cn0kSb85FmA/hqdefault.jpg', title: 'Bryan K - Helped them buy and sell' },
  { id: 3,  featured: true,  duration: '4:45',  embedId: 'zGlhLY5PDnE', thumbnail: 'https://img.youtube.com/vi/zGlhLY5PDnE/hqdefault.jpg', title: 'Matt W - Sold their home for top dollar' },
  { id: 4,  featured: true,  duration: '3:50',  embedId: 'sbk19F25jJs', thumbnail: 'https://img.youtube.com/vi/sbk19F25jJs/hqdefault.jpg', title: 'Chris N - Multiple offers, sold FAST' },
  { id: 5,  featured: false, duration: '4:20',  embedId: 'VGK7NLCW2Fw', thumbnail: 'https://img.youtube.com/vi/VGK7NLCW2Fw/hqdefault.jpg', title: 'Nef A - Paid $0 in down payment and closing costs' },
  { id: 6,  featured: false, duration: '5:10',  embedId: 'Hph9x2dXb88', thumbnail: 'https://img.youtube.com/vi/Hph9x2dXb88/hqdefault.jpg', title: 'Clayton G - Got what they wanted in 1 week' },
  { id: 7,  featured: false, duration: '4:10',  embedId: 'VsfytPlr2ZY', thumbnail: 'https://img.youtube.com/vi/VsfytPlr2ZY/hqdefault.jpg', title: 'Tony S - Sold their home for exactly what they wanted' },
  { id: 8,  featured: false, duration: '3:40',  embedId: 'E6kVJne2DO0', thumbnail: 'https://img.youtube.com/vi/E6kVJne2DO0/hqdefault.jpg', title: 'Avery D. - Referral Partner' },
  { id: 9,  featured: false, duration: '3:30',  embedId: 'szvYPq6qJ9I', thumbnail: 'https://img.youtube.com/vi/szvYPq6qJ9I/hqdefault.jpg', title: 'Grant E. - Referral Partner' },
  { id: 10, featured: false, duration: '3:45',  embedId: 'EXmvJyEi1pQ', thumbnail: 'https://img.youtube.com/vi/EXmvJyEi1pQ/hqdefault.jpg', title: 'Jack H. - Have helped him for years' },
  { id: 11, featured: false, duration: '4:00',  embedId: '-dOCjw2gjUA', thumbnail: 'https://img.youtube.com/vi/-dOCjw2gjUA/hqdefault.jpg', title: 'Jamie L. - Sold his moms old house' },
  { id: 12, featured: false, duration: '3:55',  embedId: 'XRkX8dl1GGg', thumbnail: 'https://img.youtube.com/vi/XRkX8dl1GGg/hqdefault.jpg', title: 'Ryan C. - Trusted client experience' },
  { id: 13, featured: false, duration: '4:10',  embedId: '4ZaUYqs0WXU', thumbnail: 'https://img.youtube.com/vi/4ZaUYqs0WXU/hqdefault.jpg', title: 'Brenda O. - Helped her buy and sell' },
  { id: 14, featured: false, duration: '4:00',  embedId: '7Y8NK4_TdIE', thumbnail: 'https://img.youtube.com/vi/7Y8NK4_TdIE/hqdefault.jpg', title: 'Jaden O. - Repeat client, multiple transactions' },
  { id: 15, featured: false, duration: '4:30',  embedId: 'PROMLBmV-KM', thumbnail: 'https://img.youtube.com/vi/PROMLBmV-KM/hqdefault.jpg', title: 'Todd B. - Excellent service and communication' },
  { id: 16, featured: false, duration: '4:20',  embedId: 'OSU9Kv_Y5Y8', thumbnail: 'https://img.youtube.com/vi/OSU9Kv_Y5Y8/hqdefault.jpg', title: 'Layne M. - Highly recommended realtor' },
];

const instagramPosts = [
  { id: 1, image: 'https://res.cloudinary.com/dnhcejhlv/image/upload/v1775670343/DW3zdl-j92P_ni7iyo.jpg',  link: 'https://www.instagram.com/p/DW3zdl-j92P/' },
  { id: 2, image: 'https://res.cloudinary.com/dnhcejhlv/image/upload/v1775670343/DW1V4Z6j5bC_izhfew.jpg',  link: 'https://www.instagram.com/p/DW1V4Z6j5bC/' },
  { id: 3, image: 'https://res.cloudinary.com/dnhcejhlv/image/upload/v1775670353/DWyqtAsj1Vb_rrfky0.jpg',  link: 'https://www.instagram.com/p/DWyqtAsj1Vb/' },
  { id: 4, image: 'https://res.cloudinary.com/dnhcejhlv/image/upload/v1775670352/DWruozChW-c_xcjqht.jpg',  link: 'https://www.instagram.com/p/DWruozChW-c/' },
  { id: 5, image: 'https://res.cloudinary.com/dnhcejhlv/image/upload/v1775670351/DWrCK_Xj1EI_cxmq8p.jpg', link: 'https://www.instagram.com/p/DWrCK_Xj1EI/' },
  { id: 6, image: 'https://res.cloudinary.com/dnhcejhlv/image/upload/v1775670350/DWoWa42j_YM_kwqg3u.jpg',  link: 'https://www.instagram.com/p/DWoWa42j_YM/' },
  { id: 7, image: 'https://res.cloudinary.com/dnhcejhlv/image/upload/v1775670349/DWlwx2CDxsv_eyba1k.jpg',  link: 'https://www.instagram.com/p/DWlwx2CDxsv/' },
  { id: 8, image: 'https://res.cloudinary.com/dnhcejhlv/image/upload/v1775670345/DWhSVCKh3dY_jxaeyf.jpg',  link: 'https://www.instagram.com/p/DWhSVCKh3dY/' },
  { id: 9, image: 'https://res.cloudinary.com/dnhcejhlv/image/upload/v1775670344/DWgseuxjw7z_ct8vub.jpg',  link: 'https://www.instagram.com/p/DWgseuxjw7z/' },
];

const BOOK_URL = 'https://myworkspacebfb9d.myclickfunnels.com/schedule/ic-with-conner';

// ─── Component ────────────────────────────────────────────────────────────────

function App() {
  const [dialingPhone, setDialingPhone]   = useState<string | null>(null);
  const [activeVideo, setActiveVideo]     = useState<string | null>(null);
  const [videoLoaded, setVideoLoaded]     = useState(false);
  const [reviewsVisible, setReviewsVisible] = useState(false);
  const [storiesVisible, setStoriesVisible] = useState(false);

  const videoRef       = useRef<HTMLVideoElement>(null);
  const reviewsRef     = useRef<HTMLDivElement>(null);
  const moreStoriesRef = useRef<HTMLDivElement>(null);

  const selectedVideo = activeVideo ? videos.find((v) => v.embedId === activeVideo) : null;
  const featuredVideos = videos.filter((v) => v.featured && v.id !== 1);
  const marqueeVideos  = videos.filter((v) => !v.featured);

  useEffect(() => {
    const opts = { root: null, rootMargin: '0px', threshold: 0.1 };

    const reviewsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { setReviewsVisible(true); reviewsObserver.disconnect(); }
    }, opts);

    const storiesObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { setStoriesVisible(true); storiesObserver.disconnect(); }
    }, opts);

    if (reviewsRef.current)     reviewsObserver.observe(reviewsRef.current);
    if (moreStoriesRef.current) storiesObserver.observe(moreStoriesRef.current);

    return () => { reviewsObserver.disconnect(); storiesObserver.disconnect(); };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* ── Header ── */}
      <header className="fixed top-0 left-0 right-0 bg-white backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center">
          <div className="flex items-center flex-1">
            <span className="font-semibold text-lg">Conner Nielsen</span>
          </div>
          <div className="hidden md:flex items-center justify-center gap-8 text-sm flex-1">
            <button onClick={() => scrollToSection('videos')}  className="text-gray-600 hover:text-gray-900 transition-colors">Videos</button>
            <button onClick={() => scrollToSection('reviews')} className="text-gray-600 hover:text-gray-900 transition-colors">Reviews</button>
            <button onClick={() => scrollToSection('blogs')}  className="text-gray-600 hover:text-gray-900 transition-colors">Blogs</button>
            <button onClick={() => scrollToSection('proof')}   className="text-gray-600 hover:text-gray-900 transition-colors">Proof</button>
          </div>
          <div className="flex justify-end flex-1">
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer"
              className="bg-[#A10D02] hover:bg-[#8D0B01] text-white px-6 py-2.5 rounded-full font-medium transition-transform duration-150 transform hover:translate-y-1 inline-block whitespace-nowrap">
              Book a Call
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-black">
          <video ref={videoRef} autoPlay muted loop playsInline onLoadedData={() => setVideoLoaded(true)}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ position: 'absolute', top: '50%', left: '50%', minWidth: '100%', minHeight: '100%', width: 'auto', height: 'auto', transform: 'translate(-50%, -50%)' }}>
            <source src="/background-video.mp4" type="video/mp4" />
          </video>
          {!videoLoaded && <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />}
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-snug mb-4">North Texas Realtor</h1>
          <p className="text-sm md:text-base text-white max-w-lg mx-auto mb-4">
            Get more value than anywhere else in just 10 minutes and you could win $1,000 or $2,000 every month!
          </p>
          <a href={BOOK_URL} target="_blank" rel="noopener noreferrer"
            className="bg-[#A10D02] text-white px-10 py-4 rounded-full font-semibold text-lg transition-transform hover:scale-105 inline-flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Book Your Free Call
          </a>
        </div>
      </section>

      {/* ── Videos ── */}
      <section id="videos" className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold">How I Give You More Value</h3>
          </div>
          <div className="max-w-5xl mx-auto mb-10">
            {videos.filter((v) => v.id === 1).map((video) => (
              <div key={video.id} onClick={() => setActiveVideo(video.embedId)}
                className="group relative overflow-hidden cursor-pointer bg-gray-900 shadow-2xl rounded-[32px] mx-auto max-w-3xl aspect-[16/9]">
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-[#A10D02] ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 to-transparent">
                  <p className="font-semibold text-white text-lg md:text-xl">{video.title}</p>
                  <p className="text-white/70 text-sm md:text-base">{video.duration}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto mb-12 text-center">
            <div><p className="text-3xl font-bold text-[#8D0B01]">$250M+</p><p className="text-xs md:text-sm font-bold">In Sales</p></div>
            <div><p className="text-3xl font-bold text-[#8D0B01]">500+</p><p className="text-xs md:text-sm font-bold">Homes Sold</p></div>
            <div><p className="text-3xl font-bold text-[#8D0B01]">10+</p><p className="text-xs md:text-sm font-bold">Years</p></div>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVideos.map((video) => (
              <div key={video.id} onClick={() => setActiveVideo(video.embedId)}
                className="group relative overflow-hidden cursor-pointer shadow-lg rounded-3xl aspect-video">
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-[#A10D02] ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="font-semibold text-white text-sm">{video.title}</p>
                  <p className="text-white/60 text-xs">{video.duration}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-7">
            <style>{`
              @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
              .animate-marquee { animation: marquee 60s linear infinite; }
            `}</style>
            <div className="relative group overflow-hidden">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-20 bg-gradient-to-r from-white via-white/80 to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-20 bg-gradient-to-l from-white via-white/80 to-transparent" />
              <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] py-4">
                {[...marqueeVideos, ...marqueeVideos].map((video, i) => (
                  <div key={`${video.id}-${i}`} onClick={() => setActiveVideo(video.embedId)}
                    className="flex flex-col items-center gap-3 px-4 flex-shrink-0 cursor-pointer">
                    <div className="w-40 h-40 group/item relative overflow-hidden bg-gray-900 rounded-3xl shadow-md transition-shadow hover:shadow-xl">
                      <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-80 group-hover/item:opacity-60 transition-opacity" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-xl transition-transform group-hover/item:scale-110">
                          <Play className="w-6 h-6 text-[#A10D02]" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-xs text-center w-40 line-clamp-2 leading-relaxed">{video.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section id="reviews" className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Verified Reviews</h2>
            <div className="flex items-center justify-center mt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full">
                <Star className="w-5 h-5 text-green-600" fill="currentColor" />
                <span className="font-semibold text-[#011936]">Google Reviews 4.9/5</span>
              </div>
            </div>
          </div>
          <div ref={reviewsRef} className="grid md:grid-cols-3 gap-8 mb-12">
            {googleReviews.map((review, index) => (
              <div key={review.id}
                className={`bg-gray-50 rounded-xl p-6 transition-all duration-1000 ease-[cubic-bezier(0.2,1,0.3,1)] ${reviewsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-400" fill="currentColor" />)}
                </div>
                <Quote className="w-6 h-6 text-[#A10D02] mb-2" />
                <p className="text-gray-700 text-sm leading-relaxed mb-4">"{review.text}"</p>
                <p className="font-semibold text-sm">— {review.name}</p>
              </div>
            ))}
          </div>
          <div ref={moreStoriesRef} className="max-w-6xl mx-auto mb-10">
            <p className="text-sm text-gray-700 mb-4 text-center uppercase tracking-widest">Even more reviews</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {testimonials.slice(0, 15).map((t, index) => (
                <div key={t.id}
                  className={`bg-gray-50 rounded-lg p-4 text-center transition-all duration-700 ease-out ${storiesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${(index % 5) * 100 + Math.floor(index / 5) * 100}ms` }}>
                  <p className="font-semibold text-sm mb-2">{t.name}</p>
                  <p className="text-gray-600 text-xs line-clamp-2 italic">"{t.text}"</p>
                </div>
              ))}
            </div>
          </div>
          <div id="proof" className="pt-10">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-2 text-gray-900">Verify Directly</h2>
              <p className="text-gray-700 text-sm max-w-xl mx-auto">
                Call any of my past clients. Ask about their experience, the results they got, and why they'd recommend me.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-8 gap-6">
              {clientPhones.map((client) => (
                <a key={client.name} href={`tel:${client.phone.replace(/-/g, '')}`} onClick={() => setDialingPhone(client.phone)}
                  className="group bg-gray-50 border-[#A10D02]/20 rounded-lg p-4 text-center flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#A10D02]/50 transition-all cursor-pointer">
                  <div>
                    <p className="font-semibold text-sm mb-2 text-gray-900">{client.name}</p>
                    <p className="text-gray-600 text-xs mb-3 font-mono">{client.phone}</p>
                  </div>
                  <div className="mt-auto text-[10px] uppercase tracking-wider font-bold text-[#A10D02] flex items-center justify-center gap-1">
                    {dialingPhone === client.phone
                      ? <><PhoneOutgoing className="w-3 h-3" /><span>Dialing...</span></>
                      : <><Phone className="w-3 h-3 group-hover:scale-110 transition-transform" /><span>Call now</span></>}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Blog ── */}
      <div id="blogs" className="scroll-mt-32" />
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Real Hand's on Knowledge I'm sharing with you</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((post) => (
              <a key={post.slug} href={`/blog/${post.slug}`}
                className="bg-gray-50 rounded-xl p-6 transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
                <p className="font-semibold text-lg text-gray-900 mb-3">{post.title}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <span className="text-[#A10D02] text-sm font-semibold">Read More →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Book a free 15-minute call</h2>
          <p className="text-[#011936] font-semibold text-base mb-4">No pressure, no obligation. Just a conversation about your goals.</p>
          <a href={BOOK_URL} target="_blank" rel="noopener noreferrer"
            className="bg-[#A10D02] text-white px-10 py-4 rounded-full font-semibold text-lg transition-transform hover:scale-105 inline-flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Book Your Free Call
          </a>
        </div>
      </section>

      {/* ── Instagram ── */}
      <section id="instagram" className="py-24 overflow-hidden">
        <style>{`
          @keyframes instagram-slide { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          .marquee-track { display: flex; width: max-content; animation: instagram-slide 40s linear infinite; }
          .marquee-track:hover { animation-play-state: paused; }
          .marquee-mask {
            mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          }
        `}</style>
        <div className="max-w-6xl mx-auto text-center mb-12 px-6">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">Catch up with me on Instagram</h3>
          <p className="text-gray-600 max-w-xl text-xs font-semibold mx-auto">Latest updates, get to know me & my family, and see more client wins</p>
        </div>
        <div className="relative w-[80%] mx-auto overflow-hidden marquee-mask">
          <div className="marquee-track flex gap-4 py-4">
            {[...instagramPosts, ...instagramPosts].map((post, index) => (
              <a key={`${post.id}-${index}`} href={post.link} target="_blank" rel="noopener noreferrer"
                className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden border border-gray-200 hover:scale-105 transition-transform">
                <img src={post.image} alt={`Instagram post ${post.id}`} className="w-full h-full object-cover" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="font-bold text-xl">Conner Nielsen</span>
            <div className="text-center md:text-right">
              <p className="text-white">DFW Real Estate Expert</p>
              <div className="flex items-center justify-center md:justify-end gap-4 my-3">
                <a href="https://www.facebook.com/Close.Real.Estate.DFW" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/60 hover:text-[#1877F2] transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="https://www.instagram.com/connernielsendfwrealtor/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/60 hover:text-[#E1306C] transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="https://www.realtor.com/realestateagents/5cdc61989faa730012edb36e" target="_blank" rel="noopener noreferrer" aria-label="Realtor.com" className="text-white/60 hover:text-[#D92228] transition-colors"><RealtorIcon /></a>
              </div>
              <a href="tel:8069288884" className="text-[#A10D02] font-mono hover:underline"><span>806-928-8884</span></a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/40 text-sm">2026 © Conner Nielsen. All rights reserved.</div>
        </div>
      </footer>

      {/* ── Video Modal ── */}
      <Dialog open={activeVideo !== null} onOpenChange={() => setActiveVideo(null)}>
        <DialogContent className="!bg-black !p-0 !border-0 !rounded-none !max-w-none !w-screen !h-screen !top-0 !left-0 !translate-x-0 !translate-y-0 fixed" showCloseButton={false}>
          <div className="bg-black h-full flex flex-col">
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 flex-shrink-0">
              <div className="flex-1">
                <p className="text-white text-sm font-semibold">{selectedVideo?.title ?? 'Watch Video'}</p>
                <p className="text-white/50 text-xs">{selectedVideo ? `${selectedVideo.duration} • YouTube` : 'Video player'}</p>
              </div>
              <button onClick={() => setActiveVideo(null)} className="text-white/70 hover:text-white flex-shrink-0 ml-2"><X className="w-5 h-5" /></button>
            </div>
            <div className="flex-1 bg-black overflow-hidden">
              {activeVideo ? (
                <iframe className="w-full h-full"
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1&controls=1`}
                  title={selectedVideo?.title ?? 'Video player'}
                  allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center text-white/60"><Play className="w-16 h-16 mx-auto mb-4" /><p>Loading video...</p></div>
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
