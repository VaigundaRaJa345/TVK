
import React, { useState, useMemo } from 'react';
import type { Photo } from '../types';
import { PHOTOS } from '../data';
import Modal from '../components/Modal';
import { DownloadIcon } from '../components/icons';

const ITEMS_PER_PAGE = 8;

const PhotosPage: React.FC = () => {
  const [modalState, setModalState] = useState<{ isOpen: boolean; photo: Photo | null }>({ isOpen: false, photo: null });
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  
  const years = useMemo(() => ['all', ...Array.from(new Set(PHOTOS.map(p => p.year.toString()))).sort((a,b) => parseInt(b) - parseInt(a))], []);

  const filteredPhotos = useMemo(() => {
    return selectedYear === 'all' ? PHOTOS : PHOTOS.filter(p => p.year.toString() === selectedYear);
  }, [selectedYear]);

  const paginatedPhotos = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredPhotos.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredPhotos, currentPage]);
  
  const totalPages = Math.ceil(filteredPhotos.length / ITEMS_PER_PAGE);

  const openModal = (photo: Photo) => setModalState({ isOpen: true, photo });
  const closeModal = () => setModalState({ isOpen: false, photo: null });
  
  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-2">Photo Gallery</h1>
      <p className="text-center text-gray-400 mb-8">A collection of moments.</p>

      <div className="text-center mb-8">
        <select value={selectedYear} onChange={handleYearChange} className="bg-gray-800 border border-tvk-yellow text-white rounded-lg p-2">
            {years.map(year => <option key={year} value={year}>{year === 'all' ? 'All Years' : year}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {paginatedPhotos.map((photo) => (
          <div
            key={photo.id}
            className="group relative cursor-pointer overflow-hidden rounded-lg border-2 border-transparent hover:border-tvk-yellow transition-all duration-300"
            onClick={() => openModal(photo)}
          >
            <img src={photo.src} alt={photo.alt} loading="lazy" className="w-full h-60 object-cover transform group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white font-bold">{photo.event}</p>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
         <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button 
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded ${currentPage === page ? 'bg-tvk-red text-white' : 'bg-gray-700 text-gray-300'}`}
                >
                    {page}
                </button>
            ))}
        </div>
      )}

      <Modal isOpen={modalState.isOpen} onClose={closeModal}>
        {modalState.photo && (
          <div>
            <img src={modalState.photo.src} alt={modalState.photo.alt} className="w-full h-auto object-contain rounded-lg max-h-[70vh]" />
            <div className="mt-4 text-white text-center">
              <h3 className="text-xl font-bold">{modalState.photo.event}</h3>
              <p className="text-gray-400">{modalState.photo.year}</p>
              <a 
                href={modalState.photo.src} 
                download={`thalapathy-vijay-${modalState.photo.id}.jpg`}
                className="mt-4 inline-flex items-center justify-center bg-tvk-yellow text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-500 transition-colors"
              >
                <DownloadIcon /> Download
              </a>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default PhotosPage;
