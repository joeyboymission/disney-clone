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



                                  <video
                                src={item.video}
                                className="w-full object-cover"
                                autoPlay
                                loop
                                muted
                                ></video>