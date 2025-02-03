import React from "react";

const MainPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 text-center p-6">
      <div className="max-w-xl w-full">
        <h1 className="text-4xl font-bold">Joshua Cotugno</h1>
        <h2 className="text-2xl text-gray-600 mt-2">Music Producer | Tech Enthusiast</h2>
        
        <p className="mt-4 text-lg text-gray-700">
          Currently a music production student at the University of East London (UEL), blending technology and creativity to craft immersive soundscapes.
        </p>
        
        <h3 className="mt-6 text-xl font-semibold">🔗 Links</h3>
        <div className="flex flex-col space-y-3 mt-3">
          <a href="#" className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700">🎵 Spotify Playlist</a>
          <a href="https://github.com/jxctno" className="px-6 py-3 bg-gray-800 text-white rounded-lg text-lg hover:bg-gray-900">💻 GitHub</a>
          <a href="#" className="px-6 py-3 bg-green-600 text-white rounded-lg text-lg hover:bg-green-700">🖥️ Minecraft Server</a>
          <a href="#" className="px-6 py-3 bg-purple-600 text-white rounded-lg text-lg hover:bg-purple-700">🎧 Music Portfolio</a>
        </div>
        
        <h3 className="mt-6 text-xl font-semibold">🛠️ Current Projects</h3>
        <p className="mt-2 text-lg text-gray-700">
          <strong>Beta Music Processor</strong><br />Version: <code>beta.0046</code>
        </p>
        
        <h3 className="mt-6 text-xl font-semibold">📞 Get in Touch</h3>
        <p className="mt-2 text-lg text-gray-700">
          Email: <a href="mailto:joshua.cotugno@example.com" className="text-blue-600 hover:underline">joshua.cotugno@example.com</a>
        </p>
        <p className="mt-2 text-lg text-gray-700">
          LinkedIn: <a href="#" className="text-blue-600 hover:underline">Joshua Cotugno</a>
        </p>
        
        <footer className="mt-6 text-sm text-gray-500">
          <p>Copyright © Joshua Cotugno 2025</p>
        </footer>
      </div>
    </div>
  );
};

export default MainPage;
