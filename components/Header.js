import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

const Header=()=>{

    return(
        <View style={styles.head}>
            <Text style={styles.titleText}>TO DO LIST</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    head:{
        width: 370,
        height: 70,
        backgroundColor: '#8acced',
        borderWidth: 2,
        borderColor: 'steelblue',
        //shadowColor:'black',
        //borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,    
    },
    titleText: {
        fontFamily:"Cochin",
        fontSize: 20,
        fontWeight: "bold"
      }    
})
export default Header;