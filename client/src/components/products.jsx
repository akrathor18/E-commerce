import { IndianRupee } from 'lucide-react';
import { useState } from 'react';
function Products(props) {
  { document.title = 'UrbanMart - an E-commarce website for online shopping' }
  const [cartItems, setCartItems]= useState([])

  const handleClick = (items) => {
    console.log(items)
    setCartItems([...cartItems, items])
    console.log(cartItems)
  };

  return (
    <>
      <section className="relative flex col-span-1">
        <div className="mx-auto grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3 m-2">
          {props.productDetail.map((items) => (
            <div
              key={items.id}
              className="flex flex-col items-start gap-4 pb-6 text-text bg-secondary p-5 rounded-lg sm:items-start"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm md:aspect-[4/3]">
                <img src={items.image} alt={items.category} />
              </div>
              <div className="flex w-full flex-col items-start gap-5 pt-4 md:gap-0 md:pt-0">
                <div className="rounded-md mb-1 bg-blue-50 px-2 py-1.5 text-sm font-medium uppercase text-blue-600">
                  <p>{items.category}</p>
                </div>
                <p className="mb-3 text-xl font-bold md:text-2xl">
                  {items.title}
                </p>
                <p className="mb-3 text-xl font-bold md:text-xl">
                  {items.description}
                </p>
                <div className="flex w-full  justify-between gap-10 text-gray-100 sm:w-auto md:flex-row lg:items-center">
                  <p className="text-3xl flex">
                    <IndianRupee />{items.price}
                  </p>
                  <div class="flex items-center mt-4 text-gray-100">
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 fill-current text-yellow-500"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                      ></path>
                    </svg>
                    <span class="ml-2">{`${items.rating.rate}(${items.rating.count} reviews)`}</span>
                  </div>
                </div>


                <div className="flex py-4 w-full justify-between">
                  <button className="button">
                    <svg viewBox="0 0 16 16" className="bi bi-cart-check" height={24} width={24} xmlns="http://www.w3.org/2000/svg" fill="#fff">
                      <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>
                    <p className="text">Buy Now</p>
                  </button>
                  <button class="cartBtn"
                  onClick={() => handleClick(items)}
                  >
                    <svg class="cart" fill="white" viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
                    ADD TO CART
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" class="product"><path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z"></path></svg>
                  </button>
                </div>


              </div>
            </div>
          ))}
        </div>
      </section>
    </>

  )
}

export default Products