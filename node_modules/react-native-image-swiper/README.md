# react-native-image-swiper

A Simple Images Slider using [react-native-swiper](https://github.com/leecade/react-native-swiper)

[![npm version](https://badge.fury.io/js/react-native-image-swiper.svg)](https://www.npmjs.com/package/react-native-image-swiper)

<img src="/assets/Demo.gif" width="200" height="380">

# Getting Started

1. init your app
```
  $ react-native init ImagesSwiperApp
```

2. npm install in root
```
  $ cd ImagesSwiperApp
  $ npm install --save react-native-image-swiper
```

3. import ImagesSwiper
```
  $ import ImagesSwiper from "react-native-image-swiper";
```

# Usage

```
import ImagesSwiper from "react-native-image-swiper";

const customImg = [
  "https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/aster.jpg?alt=media&token=166e66b0-9c8e-4803-918e-25762c58dbda",
  "https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/fan.jpg?alt=media&token=b419d507-9de8-4c4c-97e3-6b4eb2202e68",
  "https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/stone.jpg?alt=media&token=e9d41537-7f26-4bfd-86eb-c2ef6fc58a9c"
];

class ImagesSwiperApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{flex: 1}}>
          <Text style={styles.welcome}>Default</Text>
          <ImagesSwiper />
          <Text style={styles.welcome}>Custom Images and Styles</Text>
          <ImagesSwiper 
            images={customImg}
            autoplay={true} 
            autoplayTimeout={1.5}
            showsPagination={false}
            width={width} 
            height={height - 400} 
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
});
```

# Properties

|Prop|Type|Description|Default|Required|
|----|----|-----------|-------|--------|
|`images`|array of objects|Data to be rendered in the slider|3 example images in array|Optional (Recommend that you add it yourself)|
|`autoplay`|Boolean|Set to `true` enable auto play mode|`false` (autoplay has currently error on Android's Dev mode)|Optional|
|`autoplayTimeout`|number|Delay between auto play transitions (in second).|1.5|Optional|
|`showsPagination`|Boolean|Set to `true` make pagination visible|`false`|Optional|
|`width`|number|width of image|400|Optional|
|`height`|number|height of image|400|Optional|

