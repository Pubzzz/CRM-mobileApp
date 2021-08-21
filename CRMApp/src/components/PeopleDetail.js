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