/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { StackNavigator } from 'react-navigation';
import HomeScene from './HomeScene';
import PostListViewScene from './PostListViewScene';
import PostDetailScene from './PostDetailScene';
import ImageListViewScene from './ImageListViewScene';
import ImageDetailScene from './ImageDetailScene';

const App = StackNavigator({
  Home: {
    screen: HomeScene,
    navigationOptions: {
      title: '모든게시판',
      header: ({ state, setParams }) => ({
        ...headerStyle,
      }),
    },
  },
  PostListView: {
    path: 'postList',
    screen: PostListViewScene,
    navigationOptions: {
      title: '모두의 공원',
      header: ({ state, setParams }) => ({
        ...headerStyle,
      }),
    },
  },
  PostDetail: {
    path: 'post/:id',
    screen: PostDetailScene,
    navigationOptions: {
      header: ({ state, setParams }) => ({
        ...headerStyle,
      }),
    },
  },
  ImageListView: {
    path: 'imageList',
    screen: ImageListViewScene,
    navigationOptions: {
      title: '사진 게시판',
      header: ({ state, setParams }) => ({
        ...headerStyle,
      }),
    },
  },
  ImageDetail: {
    path: 'image/:id',
    screen: ImageDetailScene,
    navigationOptions: {
      header: ({ state, setParams }) => ({
        ...headerStyle,
      }),
    },
  },
});

const headerStyle = {
  backTitle: null,
  titleStyle: { color: '#fff' },
  style: { backgroundColor: '#343f4f' },
};

export default App;
