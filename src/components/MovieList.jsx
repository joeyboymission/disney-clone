import { useEffect, useState, useRef } from "react"; // React Hooks
import PropTypes from "prop-types"; // PropTypes
import GlobalAPI from "../services/GlobalAPI"; // API Services
import MovieCard from "./MovieCard"; // Component Movie Card
import HrMovieCard from "./HrMovieCard";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Icons from Lucide

function MovieList({ genreID, index_ }) {
  const [movieList, setMovieList] = useState([]); // State for the movie list
  const elementRef = useRef(null); // Reference for the element

  // UseEffect to get the movie by genre ID
  useEffect(() => {
    getMovieByGenreId();
  });

  // Function to get the movie by genre ID
  const getMovieByGenreId = () => {
    GlobalAPI.getMovieByGenreId(genreID).then((response) => {
      setMovieList(response.data.results);
    });
  };

  // Function to slide the movie list to the left and right
  const sliderLeft = (element) => {
    element.scrollLeft -= 1735;
  };
  const sliderRight = (element) => {
    element.scrollLeft += 1735;
  };

  return (
    <>
      <div>
        <ChevronLeft
          className={`text-white text-[40px] absolute ${
            index_ % 3 === 0
              ? "mx-[-30px] mt-[45px] md:mt-[85px]"
              : "mx-[-30px] mt-[80px] md:mt-[160px]"
          } cursor-pointer`}
          onClick={() => sliderLeft(elementRef.current)}
        />
        <ChevronRight
          className={`text-white text-[40px] absolute ${
            index_ % 3 == 0
              ? "mx-8 mt-[40px] md:mt-[80px]"
              : "mx-8 mt-[80px] md:mt-[160px]"
          } cursor-pointer right-0`}
          onClick={() => sliderRight(elementRef.current)}
        />
      </div>

      <div
        ref={elementRef}
        className="flex overflow-x-auto p-4 gap-2 scrollbar-hide scroll-smooth"
      >
        {movieList.map((item, index) => (
          <>
            {index_ % 3 == 0 ? (
              <HrMovieCard movie={item} />
            ) : (
              <MovieCard key={index} movie={item} />
            )}
          </>
        ))}
      </div>
    </>
  );
}
MovieList.propTypes = {
  genreID: PropTypes.number.isRequired,
  index_: PropTypes.number.isRequired,
};

export default MovieList;
