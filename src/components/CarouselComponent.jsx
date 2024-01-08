import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/card-info.css";

export default function SliderComponent() {
  const listContent = [
    {
      title: "characters",
      description: "Meet all the characters",
    },
    {
      title: "vehicles",
      description: "Ride all the vehicles",
    },
    {
      title: "planets",
      description: "Discover all the planets",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full p-5 flex flex-column">
      <h2 className="text-3xl m-0"> Starwars Main section </h2>
      <p className="text-lg">Este es una previzualizacion del contenido de esta pagina </p>

      <Slider {...settings} className=" mt-5">
        {listContent.map((element, index) => {
          const className = `h-30rem bg-cardinfo-${element.title} border-round-lg`;

          return (
            <div className={className} key={element.title + index}>
              <div className="flex flex-column bg-black-alpha-50 p-3">
              <h2 className="m-0 capitalize">{element.title}</h2>
              <p className="m-0 ">{element.description}</p>
              </div>
            </div>
          );
        })}

      </Slider>
    </div>
  );
}
