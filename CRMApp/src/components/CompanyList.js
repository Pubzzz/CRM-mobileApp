import React from "react";
import {Text,View,StyleSheet } from "react-native";
import {connect} from 'react-redux';
import * as actions from '../actions'
import { Icon } from "react-native-vector-icons/EvilIcons";

class CompanyList extends React.Component{
    static navigationOptions ={
        tabBarIcon :({tintColor})=>(
            <Icon name={'archive'} size={50} color={tintColor}/>
        )
    }
    render(){
        return(
            <View style={styles.container}>
              <Text>Comapny screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:353,
        flexWrap:'wrap',
        paddingTop:20,
        paddingLeft:20,
    }
})

export default connect(null,actions)(CompanyList);