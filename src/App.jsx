import { places } from "./places.js";

const placesDestination = places.map((place) => (
  <div className="flex flex-col mb-3 md:mb-0 shadow-sm rounded-lg overflow-hidden md:grid md:grid-cols-5 bg-white">
    <div className="w-full md:col-span-2">
      <img
        className="w-full h-full object-cover"
        src={place.imageUrl}
        alt="The Great Wall of China"
      />
    </div>
    <div className="px-4 py-6 lg:py-3 sm:py-2 space-y-3 md:col-span-3">
      <h2 className="text-sky-600 font-semibold text-xl tracking-tight">
        {place.title}
      </h2>
      <p className="font-regular text-sm text-gray-800">
        {place.description.slice(0, 100).concat("...")}
      </p>
      <div className="flex justify-end items-center space-x-1">
        <svg
          className="w-4 h-4 text-sky-700"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95402C16.7321 7.45342 16.8388 6.91687 16.8388 6.375C16.8388 5.83313 16.7321 5.29658 16.5247 4.79598C16.3172 4.29539 16.0132 3.84057 15.63 3.4575V3.4575Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p className="font-semibold text-xs text-sky-700">2,333</p>
      </div>
    </div>
  </div>
));

function App() {
  return (
    <div className="container min-h-screen max-w-5xl xl:px-0 mx-auto p-4 grid place-items-center">
      <div className="flex flex-col md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-4">
        {placesDestination}
      </div>
    </div>
  );
}

export default App;
