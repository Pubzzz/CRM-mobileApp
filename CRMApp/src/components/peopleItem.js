import React from "react";
import { View,StyleSheet,Image,Text } from "react-native";
import {connect} from 'react-redux';
import {getTheme} from 'react-native-material-kit';
// import * as actions from '../actions';
import Icon from 'react-native-vector-icons/EvilIcons';

const PeopleItem = (props)=>{
        return(
            <View style={styles.card}>
                <Image 
                source ={require('../images/background.jpg')}
                style={styles.image}
                />
                <Icon name={'user'} size={100} style={styles.icon} />
                <Text style={[theme.cardTitleStyle,styles.title]}>{props.people.firstName} {props.people.lastName}</Text>
                <Text style={[theme.cardActionStyle,styles.action]}>{props.people.company}</Text>
            </View>
        )
}

const styles = StyleSheet.create({
    card:{
        marginTop:20,
    },
    title:{
        top:20,
        fontSize:20,
    },
    image:{
        height:80,
        width:320,
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

export default connect(null,actions)(PeopleItem);