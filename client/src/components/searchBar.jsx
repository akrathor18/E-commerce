import { useState, useEffect } from 'react'
import { Search } from 'lucide-react';

function searchBar() {

  const productDetail = [
    {
      "id": 1,
      "title": "Men's Casual T-Shirt",
      "price": 499,
      "description": "Comfortable and stylish T-shirt for everyday wear, made from high-quality cotton.",
      "category": "Clothing",
      "image": "https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg",
      "rating": {
        "rate": 4.2,
        "count": 120
      }
    },
    {
      "id": 2,
      "title": "Women's Running Shoes",
      "price": 2999,
      "description": "Lightweight running shoes with excellent grip and cushioning for long-lasting comfort.",
      "category": "Footwear",
      "image": "https://cdn.pixabay.com/photo/2018/01/25/00/18/sneakers-3105120_1280.jpg",
      "rating": {
        "rate": 4.5,
        "count": 200
      }
    },
    {
      "id": 3,
      "title": "Wireless Earbuds",
      "price": 1999,
      "description": "True wireless earbuds with superior sound quality and long battery life.",
      "category": "Electronics",
      "image": "https://cdn.pixabay.com/photo/2020/06/10/13/22/headphones-5282687_1280.jpg",
      "rating": {
        "rate": 4.7,
        "count": 350
      }
    },
    {
      "id": 4,
      "title": "Ceramic Coffee Mug",
      "price": 299,
      "description": "Stylish ceramic mug ideal for coffee, tea, and other beverages.",
      "category": "Kitchenware",
      "image": "https://cdn.pixabay.com/photo/2019/01/10/20/48/mug-3926033_1280.jpg",
      "rating": {
        "rate": 4.3,
        "count": 95
      }
    },
    {
      "id": 5,
      "title": "Adjustable Dumbbells",
      "price": 2499,
      "description": "Pair of adjustable dumbbells for strength training and fitness enthusiasts.",
      "category": "Fitness",
      "image": "https://cdn.pixabay.com/photo/2020/04/07/16/05/body-building-5013985_1280.jpg",
      "rating": {
        "rate": 4.6,
        "count": 180
      }
    },
    {
      "id": 6,
      "title": "Men's Leather Wallet",
      "price": 799,
      "description": "Premium leather wallet with multiple compartments for cards and cash.",
      "category": "Accessories",
      "image": "https://cdn.pixabay.com/photo/2014/10/19/11/10/purse-494169_1280.jpg",
      "rating": {
        "rate": 4.4,
        "count": 145
      }
    },
    {
      "id": 7,
      "title": "Gaming Mouse",
      "price": 1499,
      "description": "High-precision gaming mouse with customizable DPI settings and RGB lighting.",
      "category": "Gaming",
      "image": "https://cdn.pixabay.com/photo/2017/01/22/10/13/mouse-1999471_1280.jpg",
      "rating": {
        "rate": 4.8,
        "count": 400
      }
    },
    {
      "id": 8,
      "title": "Cookware Set",
      "price": 3999,
      "description": "Non-stick cookware set including frying pan, saucepan, and kadai for versatile cooking.",
      "category": "Kitchenware",
      "image": "https://cdn.pixabay.com/photo/2013/09/16/10/56/cookware-182788_1280.jpg",
      "rating": {
        "rate": 4.5,
        "count": 250
      }
    },
    {
      "id": 9,
      "title": "Yoga Mat",
      "price": 999,
      "description": "Eco-friendly yoga mat with excellent grip and cushioning for all types of exercises.",
      "category": "Fitness",
      "image": "https://cdn.pixabay.com/photo/2015/03/30/08/53/yoga-698114_1280.jpg",
      "rating": {
        "rate": 4.4,
        "count": 190
      }
    },
    {
      "id": 10,
      "title": "Smartphone Stand",
      "price": 399,
      "description": "Adjustable smartphone stand for hands-free video calls and viewing.",
      "category": "Accessories",
      "image": "https://m.media-amazon.com/images/I/51u2MqPaQwL._SL1200_.jpg",
      "rating": {
        "rate": 4.3,
        "count": 135
      }
    },
    {
      "id": 11,
      "title": "Bluetooth Speaker",
      "price": 1599,
      "description": "Portable Bluetooth speaker with high-quality sound and long battery life.",
      "category": "Electronics",
      "image": "https://cdn.pixabay.com/photo/2019/04/07/09/41/speakers-4109274_1280.jpg",
      "rating": {
        "rate": 4.6,
        "count": 320
      }
    },
    {
      "id": 12,
      "title": "Men's Hoodie",
      "price": 999,
      "description": "Warm and cozy hoodie made from soft fleece material.",
      "category": "Clothing",
      "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSq6XO2BkEwuqvfrjifs1UUN7CUxjIueYVQQ-E_eu5Nq52xKSj4SvixvP3_Gs7Z-eIFYFy7WJ55a3RAwXA3YGPZQ4UWhwWxCd093l7tXyyUxuAdzUcrcWYX",
      "rating": {
        "rate": 4.4,
        "count": 220
      }
    },
    {
      "id": 13,
      "title": "Women's Handbag",
      "price": 1499,
      "description": "Elegant handbag with spacious compartments for everyday use.",
      "category": "Accessories",
      "image": "https://cdn.pixabay.com/photo/2015/08/10/20/14/handbag-883113_1280.jpg",
      "rating": {
        "rate": 4.5,
        "count": 160
      }
    },
    {
      "id": 14,
      "title": "Office Chair",
      "price": 5999,
      "description": "Ergonomic office chair with adjustable height and lumbar support.",
      "category": "Furniture",
      "image": "https://cdn.pixabay.com/photo/2020/05/12/12/05/office-5162607_960_720.jpg",
      "rating": {
        "rate": 4.7,
        "count": 210
      }
    },
    {
      "id": 15,
      "title": "Electric Kettle",
      "price": 1299,
      "description": "Compact electric kettle for boiling water quickly and efficiently.",
      "category": "Kitchenware",
      "image": "https://cdn.pixabay.com/photo/2014/08/08/21/36/electric-kettle-413744_1280.jpg",
      "rating": {
        "rate": 4.5,
        "count": 180
      }
    },
    {
      "id": 16,
      "title": "Dumbbell Set",
      "price": 3499,
      "description": "Set of 2 dumbbells with interchangeable weights for various exercises.",
      "category": "Fitness",
      "image": "https://cdn.pixabay.com/photo/2017/03/30/03/50/fitness-equipment-2187127_960_720.jpg",
      "rating": {
        "rate": 4.6,
        "count": 150
      }
    },
    {
      "id": 17,
      "title": "Gaming Headset",
      "price": 1999,
      "description": "Noise-canceling gaming headset with a built-in microphone for immersive gameplay.",
      "category": "Gaming",
      "image": "https://cdn.pixabay.com/photo/2022/04/01/19/26/technology-7105517_960_720.jpg",
      "rating": {
        "rate": 4.7,
        "count": 270
      }
    },
    {
      "id": 18,
      "title": "Study Desk",
      "price": 4999,
      "description": "Compact wooden desk ideal for studying or working from home.",
      "category": "Furniture",
      "image": "https://www.homeone.store/cdn/shop/products/OT-03.png?v=1679729769&width=2048",
      "rating": {
        "rate": 4.5,
        "count": 190
      }
    },
    {
      "id": 19,
      "title": "LED Desk Lamp",
      "price": 799,
      "description": "Adjustable LED desk lamp with touch controls and brightness settings.",
      "category": "Accessories",
      "image": "https://m.media-amazon.com/images/I/61QPRxJk3dL.jpg",
      "rating": {
        "rate": 4.4,
        "count": 140
      }
    },
    {
      "id": 20,
      "title": "Men's Sports Watch",
      "price": 2499,
      "description": "Durable sports watch with water resistance and stopwatch functionality.",
      "category": "Accessories",
      "image": "https://cdn.pixabay.com/photo/2023/10/07/14/24/smartwatch-8300238_1280.jpg",
      "rating": {
        "rate": 4.5,
        "count": 165
      }
    },
    {
      "id": 21,
      "title": "Wireless Keyboard",
      "price": 1799,
      "description": "Compact wireless keyboard with ergonomic design and long battery life.",
      "category": "Electronics",
      "image": "https://m.media-amazon.com/images/I/618gntt98eL._AC_UF1000,1000_QL80_.jpg",
      "rating": {
        "rate": 4.5,
        "count": 210
      }
    },
    {
      "id": 22,
      "title": "Men's Joggers",
      "price": 899,
      "description": "Comfortable and stylish joggers for everyday use and workouts.",
      "category": "Clothing",
      "image": "https://aestheticnation.co.in/cdn/shop/files/FleecetechJoggersKhakhi_2.jpg?v=1694788921",
      "rating": {
        "rate": 4.4,
        "count": 170
      }
    },
    {
      "id": 23,
      "title": "Smartwatch",
      "price": 3499,
      "description": "Feature-packed smartwatch with heart rate monitoring and GPS tracking.",
      "category": "Accessories",
      "image": "https://cdn.pixabay.com/photo/2015/08/15/15/21/smart-watch-889639_640.jpg",
      "rating": {
        "rate": 4.6,
        "count": 250
      }
    },
    {
      "id": 24,
      "title": "Wall Clock",
      "price": 599,
      "description": "Modern wall clock with a silent movement and elegant design.",
      "category": "Furniture",
      "image": "https://cdn.pixabay.com/photo/2017/08/12/15/09/clock-2634551_1280.png",
      "rating": {
        "rate": 4.4,
        "count": 120
      }
    },
    {
      "id": 25,
      "title": "Cooking Knife Set",
      "price": 1299,
      "description": "Set of sharp and durable cooking knives for all your kitchen needs.",
      "category": "Kitchenware",
      "image": "https://cdn.pixabay.com/photo/2016/11/19/12/37/knives-1839061_640.jpg",
      "rating": {
        "rate": 4.5,
        "count": 190
      }
    },
    {
      "id": 26,
      "title": "Resistance Bands",
      "price": 499,
      "description": "Set of resistance bands for versatile strength and fitness training.",
      "category": "Fitness",
      "image": "https://m.media-amazon.com/images/I/31tnozVY82L._AC_UF894,1000_QL80_.jpg",
      "rating": {
        "rate": 4.3,
        "count": 100
      }
    },
    {
      "id": 27,
      "title": "Women's Flats",
      "price": 799,
      "description": "Stylish and comfortable flats for casual and formal occasions.",
      "category": "Footwear",
      "image": "https://m.media-amazon.com/images/I/61uYSpP+c1L._AC_UY1000_.jpg",
      "rating": {
        "rate": 4.2,
        "count": 95
      }
    },
    {
      "id": 28,
      "title": "Gaming Keyboard",
      "price": 2499,
      "description": "Mechanical gaming keyboard with customizable RGB lighting.",
      "category": "Gaming",
      "image": "https://i.pcmag.com/imagery/reviews/01LnwPzDtlJP9XzLBk9qdbq-1.fit_lim.size_919x518.v1613506210.png",
      "rating": {
        "rate": 4.7,
        "count": 270
      }
    },
    {
      "id": 29,
      "title": "Men's Formal Shirt",
      "price": 999,
      "description": "Premium quality formal shirt suitable for office and formal events.",
      "category": "Clothing",
      "image": "https://crosscreek.in/cdn/shop/products/1_1_103b3dd5-4975-4b18-94cc-1a010e09a214.jpg?v=1633763212",
      "rating": {
        "rate": 4.5,
        "count": 145
      }
    },
    {
      "id": 30,
      "title": "Women's Backpack",
      "price": 1299,
      "description": "Lightweight and spacious backpack with multiple compartments.",
      "category": "Accessories",
      "image": "https://sslimages.shoppersstop.com/sys-master/images/h41/hde/33247470125086/A2443BPMEN01WH1_WHITE.jpg_2000Wx3000H",
      "rating": {
        "rate": 4.4,
        "count": 160
      }
    },
    {
      "id": 31,
      "title": "Indoor Plant Pot",
      "price": 499,
      "description": "Elegant ceramic pot perfect for indoor plants and home decor.",
      "category": "Furniture",
      "image": "https://cdn.pixabay.com/photo/2022/01/18/16/03/pigmyweeds-6947384_640.jpg",
      "rating": {
        "rate": 4.6,
        "count": 100
      }
    },
    {
      "id": 32,
      "title": "Electric Blender",
      "price": 1999,
      "description": "Compact and efficient electric blender for smoothies and shakes.",
      "category": "Kitchenware",
      "image": "https://cdn.pixabay.com/photo/2017/02/25/10/46/blender-2097431_1280.jpg",
      "rating": {
        "rate": 4.5,
        "count": 210
      }
    },
    {
      "id": 33,
      "title": "Push-Up Bars",
      "price": 599,
      "description": "Durable and ergonomic push-up bars for strength training.",
      "category": "Fitness",
      "image": "https://images-cdn.ubuy.co.in/634e4b190339f20e193a09e7-push-up-bars-home-workout-equipment.jpg",
      "rating": {
        "rate": 4.4,
        "count": 80
      }
    },
    {
      "id": 34,
      "title": "Wireless Charger",
      "price": 1299,
      "description": "Fast and reliable wireless charger compatible with most devices.",
      "category": "Electronics",
      "image": "https://cdn.pixabay.com/photo/2020/02/23/20/39/charging-phone-4874592_640.jpg",
      "rating": {
        "rate": 4.5,
        "count": 150
      }
    },
    {
      "id": 35,
      "title": "Men's Leather Belt",
      "price": 699,
      "description": "High-quality leather belt with adjustable buckle for a perfect fit.",
      "category": "Accessories",
      "image": "https://cdn.pixabay.com/photo/2017/03/15/17/49/belt-2146914_1280.jpg",
      "rating": {
        "rate": 4.6,
        "count": 160
      }
    }
  ]
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  // Example search suggestions (replace with API call or dynamic data as needed)
  // console.log(props.productDetail[1])
   const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
      // Extract all titles and update state
      const titles = productDetail.map((item) => item.title);
      setSuggestions(titles);
  
  }, []); 
  

  

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
          <div className="flex items-center border md:w-96 w-80  transition duration-300 pr-3 gap-1 bg-secondary border-gray-500/30 h-[35px] rounded-[5px] overflow-hidden">
            <input
              type="text"
              placeholder="Search for products"
              className="w-full bg-primary text-text h-full pl-4 outline-none placeholder-gray-400 text-sm"
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
              <ul className="py-1 text-sm text-text border bg-secondary  overflow-y-scroll"
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