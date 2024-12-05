import PropTypes from "prop-types"; // PropTypes

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"; // Base URL for the image poster

function MovieCard({ movie }) {
  return (
    <div className="cursor-pointer transition-all duration-300 ease-in-out flex-none mx-2 object-cover w-[12.5em] hover:border-[2px] border-gray-400 hover:scale-110 rounded-lg shadow-md shadow-gray-800">
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        className={`rounded-lg`}
      />
    </div>
  );
}

// PropTypes for the MovieCard component
MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
  size: PropTypes.string.isRequired,
};

export default MovieCard;
