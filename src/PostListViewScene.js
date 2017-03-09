import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableWithoutFeedback,
} from 'react-native';

import { CardSection } from './components';
import posts from '../data/posts.json';

class PostListViewScene extends Component {
  constructor(props) {
    super(props);

    this._ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: this._ds.cloneWithRows([]),
    };

    this._list = [];
  }

  componentWillMount() {
    for (let i = 0; i < 20; i += 1) {
      this._list.push({ id: i, ...posts });
    }
    this.setState({
      dataSource: this._ds.cloneWithRows(this._list),
    });
  }

  _renderRow = (rowData) => {
    const { title, subTitle } = rowData;
    const { navigate } = this.props.navigation;

    return (
      <CardSection>
        <TouchableWithoutFeedback
          onPress={() => navigate('PostDetail', { ...rowData })}
        >
          <View style={styles.rowStyle}>
            <Text style={styles.titleTextStyle}>{title}</Text>
            <Text style={styles.subTitleStyle}>{subTitle}</Text>
          </View>
        </TouchableWithoutFeedback>
      </CardSection>
    );
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <ListView
          contentContainerStyle={styles.contentContainerStyle}
          enableEmptySections
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
      </View>
    );
  }
}

PostListViewScene.propTypes = {
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
  contentContainerStyle: {
    marginTop: 10,
  },
  rowStyle: {
    margin: 10,
  },
  titleTextStyle: {
    fontSize: 16,
    color: '#414141',
    marginBottom: 3,
  },
  subTitleStyle: {
    fontSize: 14,
    color: '#a1a1a1',
  },
});

export default PostListViewScene;
