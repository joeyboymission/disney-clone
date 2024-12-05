import GenreList from "../constant/GenreList";
import MovieList from "./MovieList";

function GenreMovieList() {
  return (
    // Header for the Genre Movie List (Title Header)
    <div className="pt-4">
      {GenreList.genre.map( // Loop through the GenreList and display the genre name
        (item, index) =>
          index < 4 && ( // Display only 4 genres out of the 20
            <div key={item.id} className="p-4 px-16 md:px-16">
              <h2 className="text-[1em] md:text-[1.25em] text-white font-bold">
                {item.name}
              </h2>
              <MovieList genreID={item.id} index_={index} />
            </div>
          )
      )}
    </div>
  );
}

export default GenreMovieList;
