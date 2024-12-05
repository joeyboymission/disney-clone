import { useEffect, useRef, useState } from "react";

// API Services
import GlobalAPI from "../services/GlobalAPI";

// Images and Icons
import {ChevronLeft, ChevronRight} from 'lucide-react'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
// const screenWidth = window.innerWidth;

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalAPI.getTrendingVideos.then((response) => {
      console.log(response.data.results);
      setMovieList(response.data.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += 1735;
  }

  const sliderLeft = (element) => {
    element.scrollLeft -= 1735;
  }

  return (
    <>
      <div>
        <ChevronLeft className="text-white text-[40px] absolute mx-8 mt-[80px] md:mt-[160px] cursor-pointer" onClick={() => sliderLeft(elementRef.current)}/>
        <ChevronRight className="text-white text-[40px] absolute mx-8 mt-[80px] md:mt-[160px] cursor-pointer right-0" onClick={() => sliderRight(elementRef.current)}/>
      </div>
      
      <div className="flex overflow-x-auto w-full px-16 py-5 scrollbar-hide scroll-smooth" ref={elementRef}>
        {movieList.map((movie, index) => (
          <div key={index} className="flex-none w-[620px] md:w-[1735px] mr-5">
            <img
              src={IMAGE_BASE_URL + movie.backdrop_path}
              className="min-w-full h-[150px] md:h-[310px] object-cover rounded-md hover:border-[2px] border-gray-400 transition-all duration-100 ease-in"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Slider;
