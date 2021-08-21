import React from "react";
import {StyleSheet,FlatList,View } from "react-native";
import {connect} from 'react-redux';
import PeopleItem from './peopleItem';
import PeopleDetail from "./PeopleDetail";
import {loadInitialContacts} from '../actions';

class PeopleList extends React.Component{

    UNSAFE_componentWillMount(){
        this.props.loadInitialContacts();
    }
    
    render(){
            if(this.props.detailView === true){
                return(
                    <View style={styles.container}>
                        <PeopleDetail/>
                    </View>
                )
            }
            else{
                return(
                    <View style={styles.container}>
                        <FlatList 
                            data={this.props.people}
                            renderItem={({item}) => <PeopleItem people={item} />}
                            keyExtractor={(item,index)=>index.toString()}/>
                    </View>   
                )  
            }
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
    detailView:state.detailView,
    }
}
export default connect(mapStateToProps,{loadInitialContacts})(PeopleList);