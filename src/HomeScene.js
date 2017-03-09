import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

import { Card, CardSection } from './components';

const HomeScene = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <View style={styles.containerStyle}>
      <Card>
        <CardSection>
          <TouchableWithoutFeedback
            onPress={() => navigate('PostListView')}
          >
            <View style={styles.rowStyle}>
              <Text>모두의 공원</Text>
              <Text>{'>'}</Text>
            </View>
          </TouchableWithoutFeedback>
        </CardSection>
        <CardSection>
          <TouchableWithoutFeedback
            onPress={() => navigate('ImageListView')}
          >
            <View style={styles.rowStyle}>
              <Text>사진 게시판</Text>
              <Text>{'>'}</Text>
            </View>
          </TouchableWithoutFeedback>
        </CardSection>
      </Card>
    </View>
  );
};

HomeScene.propTypes = {
  navigation: React.PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
  rowStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 7,
  },
});

export default HomeScene;
