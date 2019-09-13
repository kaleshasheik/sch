import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const SCarousel = (props: any) => {
  const { imageList } = props;
  return (
    <Carousel autoPlay={true} interval={3000} infiniteLoop={true} useKeyboardArrows={true}>
      {imageList &&
        imageList.map((item: any, index: number) => {
          if (item) {
            const _img = require(`../../assets/images/c${item.key}.jpg`);
            return (
              <div key={`${item.legend}.${index}`}>
                <img src={_img} alt={item.legend} />
                <p className="legend">{item.legend}</p>
              </div>
            );
          } else {
              return null;
          }
        })}
    </Carousel>
  );
};
export default SCarousel;
