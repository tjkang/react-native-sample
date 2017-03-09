import React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';

const PostDetailScene = ({ navigation }) => {
  const { content } = navigation.state.params;
  return (
    <ScrollView style={styles.containerStyle}>
      <Text style={styles.contentTextStyle}>
        {content}
      </Text>
    </ScrollView>
  );
};

PostDetailScene.navigationOptions = {
  // Nav options can be defined as a function of the navigation prop:
  title: ({ state }) => `${state.params.title}`,
};

PostDetailScene.propTypes = {
  navigation: React.PropTypes.object.isRequired,
};

// ========================================================
// Styles
// ========================================================
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  contentTextStyle: {
    fontSize: 15,
    color: '#515151',
    lineHeight: 35,
  },
});

export default PostDetailScene;
