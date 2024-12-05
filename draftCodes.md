# Draft and Temporary Code Snippets

  return (
    <div className="flex overflow-x-auto w-full px-16 py-4">
      {movieList.map((movie, index) => (
        <div key={index}>
          <img
            src={IMAGE_BASE_URL + movie.backdrop_path}
            className="min-w-full h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in"
          />
        </div>
      ))}
    </div>
  );


<ChevronLeft 
  className={`text-white text-[40px] absolute ${index_ % 3 === 0 ? 'mx-[-30px] mt-[40px] md:mt-[80px]' : 'mx-[-30px] mt-[20px] md:mt-[40px]'} cursor-pointer`} 
  onClick={() => sliderLeft(elementRef.current)} 
/>
<ChevronRight 
  className="text-white text-[40px] absolute mx-8 mt-[80px] md:mt-[160px] cursor-pointer right-0" 
  onClick={() => sliderRight(elementRef.current)} 
/>



                                  <video
                                src={item.video}
                                className="w-full object-cover"
                                autoPlay
                                loop
                                muted
                                ></video>