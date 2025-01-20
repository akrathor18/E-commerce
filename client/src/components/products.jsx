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
        </div>
      </div>
    ))}
  </div>
</section>
</>

   )
}

export default Products