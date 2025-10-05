
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ARTICLES, PHOTOS } from '../data';

const HomePage: React.FC = () => {
  const highlights = [...ARTICLES, ...PHOTOS].sort(() => 0.5 - Math.random()).slice(0, 3);
  const [currentHighlight, setCurrentHighlight] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHighlight((prev) => (prev + 1) % highlights.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [highlights.length]);

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] -mt-8 -mx-4 flex items-center justify-center text-center text-white bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://picsum.photos/id/1074/1920/1080')` }}
      >
        <div className="z-10 p-4">
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-wider">
            <span className="text-tvk-red">Thalapathy</span> <span className="text-tvk-yellow">Vijay</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            The official fan hub for news, media, and updates on the journey of an icon.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/photos" className="bg-tvk-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105">View Photos</Link>
            <Link to="/videos" className="bg-tvk-yellow hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105">Watch Videos</Link>
            <Link to="/articles" className="border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-6 rounded-lg transition-colors">Read Articles</Link>
          </div>
        </div>
      </section>

      {/* Latest Highlights */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8 border-b-2 border-tvk-red pb-2 inline-block mx-auto">
          Latest Highlights
        </h2>
        <div className="relative max-w-4xl mx-auto h-80 rounded-lg overflow-hidden shadow-lg shadow-tvk-yellow/20">
          {highlights.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentHighlight ? 'opacity-100' : 'opacity-0'}`}
            >
              <img src={'heroImage' in item ? item.heroImage : item.src} alt={'title' in item ? item.title : item.alt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold">{'title' in item ? item.title : item.event}</h3>
                <p className="text-sm mt-1">{'excerpt' in item ? item.excerpt : `Photo from ${item.year}`}</p>
                 <Link to={'slug' in item ? `/articles/${item.slug}` : '/photos'} className="text-tvk-yellow hover:underline mt-2 self-start">
                  {'slug' in item ? 'Read More' : 'View Gallery'} &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
