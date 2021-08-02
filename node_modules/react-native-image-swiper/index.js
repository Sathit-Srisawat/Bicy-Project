import React, {Component} from 'react';
import { View, Image } from "react-native";
import PropTypes from "prop-types";
import Swiper from "react-native-swiper";

const defaultIMG = [
  "https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/aster.jpg?alt=media&token=166e66b0-9c8e-4803-918e-25762c58dbda",
  "https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/fan.jpg?alt=media&token=b419d507-9de8-4c4c-97e3-6b4eb2202e68",
  "https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/stone.jpg?alt=media&token=e9d41537-7f26-4bfd-86eb-c2ef6fc58a9c"
];

class ImagesSwiper extends Component {
  render() {
    const {
      images,
      autoplay,
      autoplayTimeout,
      showsPagination,
      width,
      height
    } = this.props;
    return (
      <Swiper
        key={images.length}
        autoplay={autoplay}
        autoplayTimeout={autoplayTimeout}
        width={width}
        height={height}
        showsPagination={false}
      >
        {images.map((url, index) => {
          return (
            <View key={index}>
              <Image
                source={{ uri: url }}
                style={{ width: width, height: height }}
              />
            </View>
          );
        })}
      </Swiper>
    );
  }
}

ImagesSwiper.propTypes = {
  images: PropTypes.array,
  autoplay: PropTypes.bool,
  autoplayTimeout: PropTypes.number,
  showsPagination: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number
};

ImagesSwiper.defaultProps = {
  images: defaultIMG,
  autoplay: false,
  autoplayTimeout: 1.5,
  showsPagination: false,
  width: 400,
  height: 300
};

export default ImagesSwiper;
