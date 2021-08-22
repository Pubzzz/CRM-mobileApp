import React from "react";
import { View,StyleSheet,Image,Text} from "react-native";
import {getTheme} from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CompanyItem = (props)=>{
        return(
                <View style={styles.card}>
                <Image 
                    source ={require('../images/background.jpg')}
                    style={styles.image}
                />
                <Icon name={'business'} size={100} style={styles.icon} />
                <Text style={[theme.cardTitleStyle,styles.title]}>{props.companies.company}</Text>
                {props.CompanyItem.names.marginTop((name)=>{
                    return (
                        <Text style={[theme.cardActionStyle,styles.action]}>
                            {name.firstname} {name.lastname}
                        </Text>
                    )
                })}
               
            </View>
        )
}

const styles = StyleSheet.create({
    card:{
        marginTop:20,
        flexWrap:'wrap',
        justifyContent:'space-around',
    },
    title:{
        left:80,
        top:20,
        fontSize:20,
    },
    image:{
        height:100,
        width:350,
    },
    action:{
        backgroundColor:'black',
        color:'white',
        paddingBottom:5,
        paddingTop:5,
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

export default CompanyItem;