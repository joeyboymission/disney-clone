import PropTypes from "prop-types";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"; // Base URL for the image poster

function HrMovieCard({ movie }) {
  return (
    <section className="transition-all duration-300 ease-in-out cursor-pointer object-cover hover:scale-110 rounded-lg mx-2 ">
      <div className="flex-none w-[20.625em] hover:border-[2px] border-gray-400 rounded-lg shadow-md shadow-gray-800">
          <img src={IMAGE_BASE_URL + movie.backdrop_path} className="rounded-lg"/>
      </div>
      <h2 className="mt-2 w-[20.625em] text-white">{movie.title}</h2>
    </section>
  );
}

HrMovieCard.propTypes = {
  movie: PropTypes.shape({
    backdrop_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default HrMovieCard;
