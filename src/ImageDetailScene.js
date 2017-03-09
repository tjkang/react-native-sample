import React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View,
} from 'react-native';

const ImageDetailScene = ({ navigation }) => {
  const { subTitle, content, url } = navigation.state.params;
  return (
    <ScrollView style={styles.containerStyle}>
      <Image
        style={styles.imageStyle}
        source={{ uri: url }}
        resizeMode="stretch"
      />
      <View style={{ margin: 10 }}>
        <Text style={styles.subTitleStyle}>
          {subTitle}
        </Text>
        <Text style={styles.contentTextStyle}>
          {content}
        </Text>
      </View>

    </ScrollView>
  );
};

ImageDetailScene.navigationOptions = {
  // Nav options can be defined as a function of the navigation prop:
  title: ({ state }) => `${state.params.title}`,
};

ImageDetailScene.propTypes = {
  navigation: React.PropTypes.object.isRequired,
};

// ========================================================
// Styles
// ========================================================
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageStyle: {
    flex: 1,
    height: 240,
  },
  subTitleStyle: {
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
  },
  contentTextStyle: {
    margin: 10,
    fontSize: 15,
    color: '#515151',
    lineHeight: 20,
  },
});

export default ImageDetailScene;
