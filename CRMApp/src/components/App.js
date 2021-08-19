import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../reducers/peopleReducer';
import Navigation from './Navigation';


const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <Navigation/>
      </Provider>
    )
  }
}
export default App;
