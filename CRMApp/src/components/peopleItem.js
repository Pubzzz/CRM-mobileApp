import React from "react";
import { View,StyleSheet,Image,Text } from "react-native";
import {connect} from 'react-redux';
import {getTheme} from 'react-native-material-kit';
import * as actions from '../actions';

const PeopleItem = (props)=>{
        return(
            <View>
                <Image/>
                <Text>{props.people.firstName} {props.people.lastName}</Text>
                <Text>{props.people.company}</Text>
            </View>
        )
}

const styles = StyleSheet.create({
    card:{
        marginTop:20,
    },
    title:{
        top:20,
        left:80,
        fontSize:24,
    },
    image:{
        height:100,
    },
    action:{
        backgroundColor:'black',
        color:'white',
    },
    icon:{
        position:'absolute',
        top:15,
        left:0,
        color:'white',
        backgroundColor:'rgba(255,255,255,0)',
    }
})

const theme = getTheme();

const mapStateToProps = state =>{
    return {people:state.people}
}
export default connect(null,actions)(PeopleItem);