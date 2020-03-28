import React, { Component } from 'react'
import { View } from 'react-native'

import List from './components/List'
import Input from './components/Input'
import Title from './components/Title'

export default class App extends Component {

  state = {
    todos: ['Click to remove', 'Learn React Native', 'Write Code', 'App'],
  }

  onAddTodo = (text) => {
    const {todos} = this.state

    this.setState({
      todos: [text, ...todos],
    })
  }

  onRemoveTodo = (index) => {
    const {todos} = this.state

    this.setState({
      todos: todos.filter((todo, i) => i !== index),
    })
  }

  render() {
    const {todos} = this.state

    return (
      <View>
        <Title>
          To-Do List
        </Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List
          list={todos}
          onPressItem={this.onRemoveTodo}
        />
      </View>
    )
  }
}

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// //import Header from "react-native-";
// import Header from './components/Header';
// const App = () => {
//   return (
//     <View style={styles.scrollView}>
//       <Header/>
//     <View style={styles.containter}> 

//         <View style={styles.box}>
//         <Text style={styles.text} > Add item to list</Text>
//       </View>
//       <View style={{paddingTop:10}}>
//       <View style={styles.add}>
//         <Text style={styles.text2}>+</Text>
//       </View>
//       </View>
//     </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//     flex:1,

//   },
//   containter:{
//     flex:1,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'flex-start',
//     paddingTop:30   

//   }, box: {
//     width: 300,
//     height: 50,
//     backgroundColor: 'skyblue',
//     borderWidth: 2,
//     borderColor: 'steelblue',
//     borderRadius: 15,
//     justifyContent: 'center',
//     alignItems: 'flex-start'
//   },
//   text:{
//     fontSize: 12,
       
//   },
//   text2:{
//     fontSize: 20,
       
//   },

//   add:{
//     width: 30,
//     height: 30,
//     backgroundColor: 'skyblue',
//     borderWidth: 2,
//     borderColor: 'steelblue',
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
    


//   }
// });

// export default App;
