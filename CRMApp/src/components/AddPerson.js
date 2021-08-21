import React from "react";
import {View,StyleSheet,ScrollView, Button, TextInput,Text} from "react-native";
import {connect} from 'react-redux';
import * as actions from '../actions'

class AddPerson extends React.Component{
    render(){
        return(
           <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.Topic} >Add a New Contact</Text>
               <View style={styles.form}>
                    <TextInput
                        style={styles.fieldStyles}
                        placeholder={'First Name'}
                        
                    />
                     <TextInput
                        style={styles.fieldStyles}
                        placeholder={'Last Name'}
                       
                    />
                     <TextInput
                        Style={styles.fieldStyles}
                        placeholder={'Contact number'}
                        
                    />
                     <TextInput
                        Style={styles.fieldStyles}
                        placeholder={'Email'}
                        
                    />
                     <TextInput
                        Style={styles.fieldStyles}
                        placeholder={'Company'}
                        
                    />
                     <TextInput
                        Style={styles.fieldStyles}
                        placeholder={'Project'}
                        
                    />
                     <TextInput
                        Style={styles.fieldStyles}
                        placeholder={'Notes'}
                    />
                    <View style={styles.addButton}>
                    <Button
                        title="ADD" color="#FFA500"/>
                    </View>
               </View>
           </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    form:{
        flex:1,
        paddingTop:100,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
        justifyContent:'space-between',
    },
    fieldStyles:{
        height:40,
        color:'#000',
    },
    addButton:{
        marginTop:20,
    },
    Topic:{
        marginLeft:25,
        paddingTop:20,
        fontSize:24,
    }
});


export default connect(null,actions)(AddPerson);