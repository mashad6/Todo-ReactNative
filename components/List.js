import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
//import {Icon} from 'react-native-vector-icons';

export default class List extends Component {
  renderItem = (text, i) => {
    const { onPressItem } = this.props

    return (
      <View style={styles.item}>
        <Text>{text}</Text>
        <TouchableOpacity style={styles.item} onPress={() => onPressItem(i)}>
            <Text>X</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    const { list } = this.props

    return <View >{list.map(this.renderItem)}</View>
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'whitesmoke',
    marginBottom: 5,
    padding: 10,
    flexDirection:'row',
    justifyContent:'space-between'
  },
})
