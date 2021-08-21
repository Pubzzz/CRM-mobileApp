import React from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from '../reducers/peopleReducer';
import Navigation from './Navigation';
import thunk from 'redux-thunk';

const store = createStore(reducers,applyMiddleware(thunk));

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
