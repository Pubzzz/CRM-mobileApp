import React from "react";
import {View,StyleSheet,ScrollView, Button, TextInput,Text} from "react-native";
import {connect} from 'react-redux';
import * as actions from '../actions'

class UpdatePerson extends React.Component{

    onUpdatePress(){
        const {firstname,lastname,phone,email,company,project,notes,_id}=this.props;

        this.props.saveContact({firstname,lastname,phone,email,company,project,notes,_id});
    }

    render(){
        return(
           <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.Topic} >Update Contact</Text>
               <View style={styles.form}>
                    <TextInput
                        style={styles.fieldStyles}
                        placeholder={'First Name'}
                        value={this.props.firstname}
                        onChangeText={value=>this.props.formUpdate({prop:'firstname',value})}
                    />
                     <TextInput
                        style={styles.fieldStyles}
                        placeholder={'Last Name'}
                        value={this.props.lastname}
                        onChangeText={value=>this.props.formUpdate({prop:'lastname',value})}
                       
                    />
                     <TextInput
                        Style={styles.fieldStyles}
                        placeholder={'Contact number'}
                        value={this.props.phone}
                        onChangeText={value=>this.props.formUpdate({prop:'phone',value})}
                    />
                     <TextInput
                        Style={styles.fieldStyles}
                        placeholder={'Email'}
                        value={this.props.email}
                        onChangeText={value=>this.props.formUpdate({prop:'email',value})}
                        
                    />
                     <TextInput
                        Style={styles.fieldStyles}
                        placeholder={'Company'}
                        value={this.props.company}
                        onChangeText={value=>this.props.formUpdate({prop:'company',value})}
                        
                    />
                     <TextInput
                        Style={styles.fieldStyles}
                        placeholder={'Project'}
                        value={this.props.project}
                        onChangeText={value=>this.props.formUpdate({prop:'project',value})}
                        
                    />
                     <TextInput
                        Style={styles.fieldStyles}
                        placeholder={'Notes'}
                        value={this.props.notes}
                        onChangeText={value=>this.props.formUpdate({prop:'notes',value})}
                    />
                    <View style={styles.addButton}>
                    <Button
                        title="UPDATE" color="#FFA500" onPress={this.onUpdatePress.bind(this)}/>
                    </View>
               </View>
           </ScrollView>
        )
    }
}

const mapStateToProps=state =>{
    const{firstname,lastname,phone,email,company,project,notes,_id} = state;
    return {firstname,lastname,phone,email,company,project,notes,_id};
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


export default connect(mapStateToProps,actions)(UpdatePerson);