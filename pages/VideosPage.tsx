
import React, { useState } from 'react';
import type { Video } from '../types';
import { VIDEOS } from '../data';
import Modal from '../components/Modal';

const VideosPage: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const openModal = (video: Video) => setSelectedVideo(video);
  const closeModal = () => setSelectedVideo(null);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-2">Video Gallery</h1>
      <p className="text-center text-gray-400 mb-8">Trailers, speeches, and exclusive interviews.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {VIDEOS.map((video) => (
          <div
            key={video.id}
            className="group bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-glow-red transition-shadow duration-300 cursor-pointer"
            onClick={() => openModal(video)}
          >
            <div className="relative">
              <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-16 h-16 bg-tvk-red/80 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                   <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg text-white">{video.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{video.date}</p>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={!!selectedVideo} onClose={closeModal}>
        {selectedVideo && (
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
              title={selectedVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default VideosPage;
