import { useState } from 'react'
import { Search } from 'lucide-react';

function searchBar() {

    const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Example search suggestions (replace with API call or dynamic data as needed)
  const suggestions = ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5', 'Product 6', 'Product 7', 'Product 8', 'Product 4', 'Product 3' ];

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim()) {
      // Filter suggestions based on the query
      const filteredResults = suggestions.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  };

  return(
    <div className="relative ml-3">
          {/* Search bar */}
          <div className="flex items-center border md:w-96 w-80 focus-within:border-hover transition duration-300 pr-3 gap-1 bg-secondary border-gray-500/30 h-[35px] rounded-[5px] overflow-hidden">
            <input
              type="text"
              placeholder="Search for products"
              className="w-full h-full pl-4 outline-none placeholder-gray-500 text-sm"
              value={searchQuery}
              onChange={handleSearch}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width={22}
              height={22}
              viewBox="0 0 30 30"
              fill="#E0E0E0"
            >
              <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
            </svg>
          </div>
    
          {/* Search results dropdown */}
          {searchResults.length > 0 && (
            <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-lg">
              <ul className="py-1 text-sm text-text bg-secondary  overflow-y-scroll"
              style={{ maxHeight: "55vh" }}>
                {searchResults.map((result, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 flex gap-3 hover:bg-primary hover:text-hover cursor-pointer"
                    onClick={() => {
                      setSearchQuery(result); // Set search bar value when a suggestion is clicked
                      setSearchResults([]); // Hide the dropdown
                    }}
                  >
                    <Search />
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      
  )
}

export default searchBar