import React, { useEffect } from 'react';

//owl-carousel
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery';
import 'owl.carousel';
function OwlCarousel() {

  useEffect(() => {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    });
  }, []);

  return (
    <>
     
 <div className="owl-carousel">

      <div className="item"><img src="https://placehold.it/350x250" alt="" /></div>
      <div className="item"><img src="https://placehold.it/350x250" alt="" /></div>
      <div className="item"><img src="https://placehold.it/350x250" alt="" /></div>
      <div className="item"><img src="https://placehold.it/350x250" alt="" /></div>
      <div className="item"><img src="https://placehold.it/350x250" alt="" /></div>
      <div className="item"><img src="https://placehold.it/350x250" alt="" /></div>
    </div>
    </>
  )
  }
  export default OwlCarousel;