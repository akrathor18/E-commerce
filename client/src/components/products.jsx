function Products(props) {
   return(
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
            {items.title }
          </p>
          <p className="mb-3 text-xl font-bold md:text-xl">
            {items.description }
          </p>
          <div className="flex w-full flex-col justify-between gap-3 text-gray-500 sm:w-auto md:flex-row lg:items-center">
            <p className="text-sm">By {items.price || "Unknown"}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 6 6"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
              className="hidden h-1.5 w-1.5 items-center justify-center text-gray-500 lg:block"
            >
              <circle cx="3" cy="3" r="3" fill="currentColor"></circle>
            </svg>
            <p className="text-sm">{items.readTime || "5 mins read"}</p>
          </div>
          {/* <!-- From Uiverse.io by JaydipPrajapati1910 -->  */}
<button className="button">
  <svg viewBox="0 0 16 16" className="bi bi-cart-check" height={24} width={24} xmlns="http://www.w3.org/2000/svg" fill="#fff">
    <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
  </svg>  
  <p className="text">Buy Now</p>
</button>

        </div>
      </div>
    ))}
  </div>
</section>
</>

   )
}

export default Products