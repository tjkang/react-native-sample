import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

import { CardSection } from './components';
import images from '../data/images.json';

class ImageListViewScene extends Component {
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
      this._list.push({ id: i, ...images });
    }
    this.setState({
      dataSource: this._ds.cloneWithRows(this._list),
    });
  }

  _renderRow = (rowData) => {
    const { title, url } = rowData;
    const { navigate } = this.props.navigation;

    return (
      <CardSection>
        <TouchableWithoutFeedback
          onPress={() => navigate('ImageDetail', { ...rowData })}
        >
          <View style={styles.rowStyle}>
            <Image
              style={styles.imageStyle}
              source={{ uri: url }}
              resizeMode="stretch"
            >
              <View style={styles.titleBoxStyle}>
                <Text style={styles.titleTextStyle}>{title}</Text>
              </View>
            </Image>
          </View>
        </TouchableWithoutFeedback>
      </CardSection>
    );
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <ListView
          // contentContainerStyle={styles.contentContainerStyle}
          enableEmptySections
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
      </View>
    );
  }
}

ImageListViewScene.propTypes = {
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
  rowStyle: {
    flex: 1,
  },
  imageStyle: {
    flex: 1,
    width: null,
    height: 240,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
  },
  titleBoxStyle: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
  },
  titleTextStyle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
});

export default ImageListViewScene;
