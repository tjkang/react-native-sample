import React from 'react';
import { TouchableHighlight, View } from 'react-native';

export default function Button(props) {
  return (
    <TouchableHighlight onPress={props.onPress || Function()}>
      <View style={{ backgroundColor: '#3232' }}>
        {props.children}
      </View>
    </TouchableHighlight>
  );
}
