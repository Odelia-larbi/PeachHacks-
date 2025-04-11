// import { useState } from 'react'
// import googleLogo from './assets/RetroSeek.png'
// import clippyJumping from './assets/clippy_jumping.gif'
// import './App.css';


// function App() {
//   const [searchText, setSearchText] = useState('');
//   const [snapshotUrl, setSnapshotUrl] = useState('');
//   const [isLoading, setIsLoading] = useState(false);


//   const cleanInput=(input: string)=>{
//     let cleaned = input.trim().toLowerCase();
//     if(!cleaned.includes('.')) cleaned+= '.com';
//     if(!cleaned.startsWith('http')) cleaned= 'http://' + cleaned;
//     return cleaned;
//   };

//   const fetchWaybackSnapshot= async(url: string, date: string)=> {
//     try{
//     const api = `https://archive.org/wayback/available?url=${encodeURIComponent(url)}&timestamp=${date}`;
//     const res = await fetch(api);
//     const data = await res.json();
//     console.log(`Checking ${date}:`, data);
//     return data.archived_snapshots?.closest?.url||null;
//   } catch (error){
//     console.error("Error fetching from Wayback", error);
//     return null;
//   }
// };

//   const handleSearch = async () => {
//     const domain = cleanInput(searchText);
//     const fallbackTimestamps = [
//       '20130919044612',
//       '20130815000000',
//       '20121005000000',
//       '20111225000000',
//       '20101111000000'
//   ];

//     setSnapshotUrl(''); // Clear old snapshot
//   for (const year of fallbackTimestamps) {
//     const archived = await fetchWaybackSnapshot(domain, year);
//     if (archived) {
//       setSnapshotUrl(archived);
//       console.log("Found snapshot:", archived);
//       return;
//     }
//   }
//   alert('No snapshots found!');
// };

// const handleLucky = async () => {
//   setIsLoading(true);

//   const classics = [
//     "askjeeves.com",
//     "altavista.com",
//     "geocities.com",
//     "angelfire.com",
//     "yahoo.com",
//     "aol.com",
//     "netscape.com",
//     "hotmail.com",
//     "lycos.com",
//     "excite.com",
//     "myspace.com",
//     "friendster.com",
//     "bebo.com",
//     "livejournal.com",
//     "blogger.com",
//     "flickr.com",
//     "photobucket.com",
//     "delicious.com",
//     "digg.com",
//     "stumbleupon.com",
//     "google.com",
//     "yahoo.com",
//     "bing.com",
//     "ask.com",
//     "baidu.com",
//     "yandex.com",
//     "googleplus.com",
//     "youtube.com"
//   ];

//   const randomPick = classics[Math.floor(Math.random() * classics.length)];
//   const domain = cleanInput(randomPick);

//   const fallbackTimestamps = [
//     '20130919044612',
//     '20130815000000',
//     '20121005000000',
//     '20111225000000',
//     '20101111000000'
//   ];

//   setSnapshotUrl(''); // clear old result

//   for (const year of fallbackTimestamps) {
//     const archived = await fetchWaybackSnapshot(domain, year);
//     if (archived) {
//       setSnapshotUrl(archived);
//       setIsLoading(false);
//       console.log("Lucky snapshot:", archived);
//       return;
//     }
//   }
//   setIsLoading(false);
//   alert('No snapshots found for ${randomPick}');
// };


  
//     // return (
//       // <div className="min-h-screen flex flex-col items-center justify-center px-4">
        
//       //   {/* LOGO + Tagline */}
//       //   <div className="logo-wrapper flex flex-col items-center gap-4 mb-6 relative">
//       //     <img src={googleLogo} alt="Google Logo" className="w-150 z-10 wavy-logo" />
//       //     <p className="text-sm font-mono text-gray-800 z-10">
//       //       Search 1,326,920,000 webpages
//       //     </p>
//       //   </div>

//       // {/* SEARCH INPUT */}
//       // <input
//       //   value={searchText}
//       //   onChange={(e) => setSearchText(e.target.value)}
//       //   type="text"
//       //   placeholder="Enter your search..."
//       //   className="w-full max-w-md px-4 py-2 border-2 border-gray-400 rounded-md shadow-inner mb-4 font-mono text-sm"
//       // />
//       return (
//         <div className="min-h-screen flex flex-col items-center justify-center px-4">
      
//           {/* LOGO + Tagline + Search Bar */}
//           <div className="logo-wrapper flex flex-col items-center gap-2 mb-4 relative">
//             <img src={googleLogo} alt="Google Logo" className="w-150 z-10 wavy-logo" />
//             <p className="text-sm font-mono text-gray-800 z-10">
//               Search 1,326,920,000 webpages
//             </p>
      
//             {/* Search Bar */}
//             <input
//               type="text"
//               placeholder="Search RetroSeek..."
//               className="mt-1 px-4 py-2 w-80 border border-gray-50 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//       {/* BUTTONS */}
//       <div className="flex gap-4">
//         <button
//           onClick={handleSearch}
//           className="bg-slate-100 border-2 border-gray-400 px-4 py-2 rounded-md font-bold font-mono text-sm hover:bg-purple-200 hover:shadow-lg transition-all"
//         >
//           Google Search
//         </button>

//         <button
//           className="bg-slate-100 border-2 border-gray-400 px-4 py-2 rounded-md font-bold font-mono text-sm hover:bg-purple-200 hover:shadow-lg transition-all"
//           onClick={handleLucky}
//         >
//           I'm Feeling Lucky
//         </button>
//       </div>

//       {isLoading && (
//         <div className="mt-6 flex flex-col items-center">
//           <img src={clippyJumping} alt="Loading Clippy" className="w-24 h-24" />
//           <p className="text-sm text-gray-700 font-mono mt-2">Clippy is searching...</p>
//         </div>
//       )}

//       {/* SNAPSHOT RESULT*/}
//       {/* SNAPSHOT RESULT */}
//       {snapshotUrl && (
//         <>
//           <iframe
//             src={snapshotUrl}
//             className="w-full max-w-5xl h-[80vh] border-2 border-gray-500 shadow-lg"
//             title="Wayback Snapshot"
//           />
//           <div className="text-sm text-gray-800 mt-2 font-mono">
//             Loaded from: <a href={snapshotUrl} target="_blank" className="underline">{snapshotUrl}</a>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default App
import { useState } from 'react';
import googleLogo from './assets/RetroSeek.png';
import clippyJumping from './assets/clippy_jumping.gif';
import Countdown from './CountDown'; // Countdown component already imported
import WeatherWidget from './WeatherWidget'; // Imported WeatherWidget component
import './App.css';

function App() {
  const [searchText, setSearchText] = useState('');
  const [snapshotUrl, setSnapshotUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const cleanInput = (input: string) => {
    let cleaned = input.trim().toLowerCase();
    if (!cleaned.includes('.')) cleaned += '.com';
    if (!cleaned.startsWith('http')) cleaned = 'http://' + cleaned;
    return cleaned;
  };

  const fetchWaybackSnapshot = async (url: string, date: string) => {
    try {
      const api = `https://archive.org/wayback/available?url=${encodeURIComponent(url)}&timestamp=${date}`;
      const res = await fetch(api);
      const data = await res.json();
      console.log(`Checking ${date}:`, data);
      return data.archived_snapshots?.closest?.url || null;
    } catch (error) {
      console.error('Error fetching from Wayback', error);
      return null;
    }
  };

  const handleSearch = async () => {
    const domain = cleanInput(searchText);
    const fallbackTimestamps = [
      '20130919044612',
      '20130815000000',
      '20121005000000',
      '20111225000000',
      '20101111000000',
    ];

    setSnapshotUrl(''); // Clear old snapshot
    for (const year of fallbackTimestamps) {
      const archived = await fetchWaybackSnapshot(domain, year);
      if (archived) {
        setSnapshotUrl(archived);
        console.log('Found snapshot:', archived);
        return;
      }
    }
    alert('No snapshots found!');
  };

  const handleLucky = async () => {
    setIsLoading(true);

    const classics = [
      'askjeeves.com',
      'altavista.com',
      'geocities.com',
      'angelfire.com',
      'yahoo.com',
      'aol.com',
      'netscape.com',
      'hotmail.com',
      'lycos.com',
      'excite.com',
      'myspace.com',
      'friendster.com',
      'bebo.com',
      'livejournal.com',
      'blogger.com',
      'flickr.com',
      'photobucket.com',
      'delicious.com',
      'digg.com',
      'stumbleupon.com',
      'google.com',
      'yahoo.com',
      'bing.com',
      'ask.com',
      'baidu.com',
      'yandex.com',
      'googleplus.com',
      'youtube.com',
    ];

    const randomPick = classics[Math.floor(Math.random() * classics.length)];
    const domain = cleanInput(randomPick);

    const fallbackTimestamps = [
      '20130919044612',
      '20130815000000',
      '20121005000000',
      '20111225000000',
      '20101111000000',
    ];

    setSnapshotUrl(''); // clear old result

    for (const year of fallbackTimestamps) {
      const archived = await fetchWaybackSnapshot(domain, year);
      if (archived) {
        setSnapshotUrl(archived);
        setIsLoading(false);
        console.log('Lucky snapshot:', archived);
        return;
      }
    }
    setIsLoading(false);
    alert('No snapshots found for ${randomPick}');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* LOGO + Tagline + Search Bar */}
      <div className="logo-wrapper flex flex-col items-center gap-2 mb-4 relative">
        <img src={googleLogo} alt="Google Logo" className="w-150 z-10 wavy-logo" />
        <p className="text-sm font-mono text-gray-800 z-10">
          Search 1,326,920,000 webpages
        </p>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search RetroSeek..."
          className="mt-1 px-4 py-2 w-80 border border-gray-50 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {/* BUTTONS */}
      <div className="flex gap-4">
        <button
          onClick={handleSearch}
          className="bg-slate-100 border-2 border-gray-400 px-4 py-2 rounded-md font-bold font-mono text-sm hover:bg-purple-200 hover:shadow-lg transition-all"
        >
          Google Search
        </button>

        <button
          className="bg-slate-100 border-2 border-gray-400 px-4 py-2 rounded-md font-bold font-mono text-sm hover:bg-purple-200 hover:shadow-lg transition-all"
          onClick={handleLucky}
        >
          I'm Feeling Lucky
        </button>
      </div>

      {isLoading && (
        <div className="mt-6 flex flex-col items-center">
          <img src={clippyJumping} alt="Loading Clippy" className="w-24 h-24" />
          <p className="text-sm text-gray-700 font-mono mt-2">Clippy is searching...</p>
        </div>
      )}

      {/* Countdown Timer */}
      <div className="mt-6 w-full flex justify-center">
        <Countdown /> {/* Countdown component placed here */}
      </div>

      {/* Weather Widget with Pink Theme (Positioned to the left side below Countdown) */}
      <div className="mt-6 flex justify-start w-full max-w-xs ml-4">
        <div className="w-full max-w-xs rounded-xl bg-pink-50 p-4 shadow-lg border border-pink-200">
          <h3 className="text-lg font-bold text-pink-600 mb-2">Weather Widget</h3> {/* Pink text */}
          <WeatherWidget /> {/* WeatherWidget component added here */}
        </div>
      </div>

      {/* SNAPSHOT RESULT */}
      {snapshotUrl && (
        <>
          <iframe
            src={snapshotUrl}
            className="w-full max-w-5xl h-[80vh] border-2 border-gray-500 shadow-lg"
            title="Wayback Snapshot"
          />
          <div className="text-sm text-gray-800 mt-2 font-mono">
            Loaded from: <a href={snapshotUrl} target="_blank" className="underline">{snapshotUrl}</a>
          </div>
        </>
      )}
    </div>
  );
}

export default App;




