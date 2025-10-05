
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-tvk-red/20 mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Thalapathy Vijay Fan Hub. All Rights Reserved.</p>
        <p className="text-sm mt-1">Created by fans, for the fans.</p>
      </div>
    </footer>
  );
};

export default Footer;
