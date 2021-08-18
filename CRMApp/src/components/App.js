import React from 'react';
import { StyleSheet ,View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../reducers/peopleReducer';
import PeopleList from './peopleList';


const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <View style={styles.container}>
         <PeopleList/>
        </View>
      </Provider>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    flex:1,
    backgroundColor:"#ddd",
    alignItems:'center',
  },
  welcome:{
    fontSize:40,
  }
})

export default App;
