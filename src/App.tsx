import { useState } from 'react';
import googleLogo from './assets/google.png';
import './App.css';
import { Widget, CalanderWidget } from './Widget';

function App() {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-pink-200 to-purple-300 px-8 py-10 relative">

      {/* WIDGETS - Fixed to the left */}
      <div className="absolute left-8 top-10 flex flex-col gap-6">
        <Widget />
        <CalanderWidget />
      </div>

      {/* CENTERED GOOGLE UI */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center gap-4 mb-6">
            <img src={googleLogo} alt="Google Logo" className="max-w-xs" />
            <p className="text-sm font-mono text-gray-800">
              Search 1,326,920,000 webpages
            </p>
          </div>

          {/* Search input */}
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Enter your search..."
            className="w-full max-w-md px-4 py-2 border-2 border-gray-400 rounded-md shadow-inner mb-4 font-mono text-sm"
          />

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => alert(`Searching for: ${searchText}`)}
              className="bg-slate-100 border-2 border-gray-400 px-4 py-2 rounded-md font-bold font-mono text-sm hover:bg-purple-200 hover:shadow-lg transition-all"
            >
              Google Search
            </button>

            <button
              className="bg-slate-100 border-2 border-gray-400 px-4 py-2 rounded-md font-bold font-mono text-sm hover:bg-purple-200 hover:shadow-lg transition-all"
            >
              I'm Feeling Lucky
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
