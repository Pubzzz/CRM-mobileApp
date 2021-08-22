import React from "react";
import {StyleSheet,ScrollView,View,Text,Image,TouchableOpacity} from "react-native";
import {connect} from 'react-redux';
import {getTheme} from 'react-native-material-kit';
import * as actions from '../actions'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

class PeopleDetail extends React.Component{
    
    render(){
        return(
            <View style={styles.container}>
               <ScrollView showsVerticalScrollIndicator={false}>
                    <Image 
                    source={require('../images/background.jpg')}
                    style={[theme.cardImageStyle,styles.image]}
                    />
                    <EvilIcon name={'user'} size={100} style={styles.icon} />
                    <SimpleIcon name={'close'} size={30} style={styles.closeIcon} 
                    onPress={()=>this.props.noneSelected()}/>
                    <Text style={[theme.cardTitleStyle,styles.title1]}>{this.props.person.firstName} {this.props.person.lastName}</Text>
                    <Text style={[theme.cardTitleStyle,styles.title2]}>from {this.props.person.company}</Text>
                    <View style={styles.textArea}>
                        <MaterialIcon name={'phone'}size={40} style={styles.TextIcon} />
                        <Text style={theme.cardContentStyle}>{this.props.person.phone}</Text>
                    </View>
                    <View style={styles.textArea}>
                        <MaterialIcon name={'email'}size={40} style={styles.TextIcon} />
                        <Text style={theme.cardContentStyle}>{this.props.person.email}</Text>
                    </View>
                    <View style={styles.textArea}>
                        <MaterialIcon name={'assignment'}size={40} style={styles.TextIcon} />
                        <Text style={theme.cardContentStyle}>{this.props.person.project}</Text>
                    </View>
                    <View style={styles.textArea}>
                        <MaterialIcon name={'mode-edit'}size={40} style={styles.TextIcon} />
                        <Text style={theme.cardContentStyle}>{this.props.person.notes}</Text>
                    </View>
                    <View style={styles.editArea}>
                        < TouchableOpacity style={styles.sections} >
                            <MaterialIcon name={'autorenew'}size={40} style={styles.editIcon}/>
                            <Text style={theme.cardContentStyle}>EDIT</Text>
                        </ TouchableOpacity>
                        <TouchableOpacity style={styles.sections} onPress={()=>{this.props.deleteContact(this.props.person._id)}}>
                            <MaterialIcon name={'delete-forever'}size={40} style={styles.editIcon}/>
                            <Text style={theme.cardContentStyle}>DELETE</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image 
                            source={require('../images/call@2x.png.png')}
                            style={styles.actionImage}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image 
                            source={require('../images/email@2x.png.png')}
                            style={styles.actionImage}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image 
                            source={require('../images/sms@2x.png.png')}
                            style={styles.actionImage}
                            />
                        </TouchableOpacity>
                        <View style={styles.actionArea}>
                            <Text>Call</Text>
                            <Text>Email</Text>
                            <Text>SMS</Text>
                        </View>
                    </View>
               </ScrollView>
            </View>
        )
    }
}

const theme = getTheme();

const styles = StyleSheet.create({
    card:{
        marginTop:10,
        paddingBottom:20,
        marginBottom:20,
        borderColor:'lightgrey',
        borderWidth:0.5,
    },
    title1:{
        top:10,
        left:80,
        fontSize:24,
    },
    title2:{
        top:35,
        left:82,
        fontSize:18,
    },
    image:{
        flex:0,
        height:100,
        width:333,
        backgroundColor:'transparent',
        justifyContent:'center',
        alignItems:'center',
    },
    closeIcon:{
        position:'absolute',
        top:5,
        left:295,
        color:'rgba(233,166,154,0.8)',
        backgroundColor:'rgba(255,255,255,0)',
    },
    icon:{
        position:'absolute',
        top:15,
        left:0,
        color:'white',
        backgroundColor:'rgba(255,255,255,0)',
    },
    textArea:{
        flexDirection:'row',
        paddingLeft:20,
        paddingTop:10,
        width:260,
    },
    TextIcon:{
        color:'#26a69a'
    },
    actionArea:{
        paddingTop:10,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
})

const mapStateToProps = state =>{
    return {
        person:state.personSelected
    }
}
export default connect(mapStateToProps,actions)(PeopleDetail);