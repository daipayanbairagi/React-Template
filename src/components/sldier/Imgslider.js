
import './Imgslider.css';
import Slider from "react-slick";
import slidimg from './disney-logo-vector-1.svg';


export default function Imgslider() {
 

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "40px",
    slidesToShow: 7,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <Slider {...settings}>
        <div className='slider'>
          <img src={slidimg} alt='' />
        </div>
        <div className='slider'>
          <img src={slidimg} alt='' />
        </div>
        <div className='slider'>
          <img src={slidimg} alt='' />
        </div>
        <div className='slider'>
          <img src={slidimg} alt='' />
        </div>
        <div className='slider'>
          <img src={slidimg} alt='' />
        </div>
        <div className='slider'>
          <img src={slidimg} alt='' />
        </div>
        <div className='slider'>
          <img src={slidimg} alt='' />
        </div>
        <div className='slider'>
          <img src={slidimg} alt='' />
        </div>
        <div className='slider'>
          <img src={slidimg} alt='' />
        </div>
        <div className='slider'>
          <img src={slidimg} alt='' />
        </div>
      </Slider>

     
    </>
  );
}
