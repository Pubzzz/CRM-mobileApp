import React from "react";
import {StyleSheet,ScrollView,View,Text,Image} from "react-native";
import {connect} from 'react-redux';
import * as actions from '../actions'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

class PeopleDetail extends React.Component{
    
    render(){
        return(
            <View style={styles.container}>
               <ScrollView></ScrollView>
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

const mapStateToProps = state =>{
    return {
        people:state.people,
        personSelected:state.personSelected
    }
}
export default connect(mapStateToProps)(PeopleDetail);