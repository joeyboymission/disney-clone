// Import Images
import DisneyLogo from "../images/disney_logo.png";
import MarvelLogo from "../images/marvel_logo.png";
import PixarLogo from "../images/pixar_logo.png";
import NationalGeoLogo from "../images/nationalG_logo.png";
import StarWarsLogo from "../images/starwars_logo.png";

// Import Videos
import DisneyVideo from "../videos/disney_video.mp4";
import MarvelVideo from "../videos/marvel_video.mp4";
import PixarVideo from "../videos/pixar_video.mp4";
import NationalGeoVideo from "../videos/national-geographic_video.mp4";
import StarWarsVideo from "../videos/star-wars_video.mp4";

function ProductionHouse() {
  const ProductionHouseList = [
    {
      id: 1,
      logo: DisneyLogo,
      video: DisneyVideo,
    },
    {
      id: 2,
      logo: MarvelLogo,
      video: MarvelVideo,
    },
    {
      id: 3,
      logo: PixarLogo,
      video: PixarVideo,
    },
    {
      id: 4,
      logo: NationalGeoLogo,
      video: NationalGeoVideo,
    },
    {
      id: 5,
      logo: StarWarsLogo,
      video: StarWarsVideo,
    },
  ];

return (
    <div className="flex gap-2 md:gap-5 mx-16">
        {ProductionHouseList.map((item) => (
            <div
                key={item.id}
                className="relative border-gray-600 border-[2px] rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer shadow-md shadow-gray-800"
            >
                <img src={item.logo} alt="Production House Logo" className="w-full relative" />
                <video
                    src={item.video}
                    autoPlay
                    loop
                    playsInline
                    muted
                    className="absolute top-0 left-0 w-full h-full rounded-md z-0 opacity-0 hover:opacity-50 transition-all duration-300 ease-in-out"
                />
            </div>
        ))}
    </div>
);
}

export default ProductionHouse;
