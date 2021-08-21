import React from "react";
import {StyleSheet,FlatList,View } from "react-native";
import {connect} from 'react-redux';
import PeopleItem from './peopleItem';
import PeopleDetail from "./PeopleDetail";

class PeopleList extends React.Component{
    renderInitialView(){
        if(this.props.detailView === true){
            return(
                <PeopleDetail/>
            )     
        }
        else{
            return(
                <FlatList 
                data={this.props.people}
                renderItem={({item}) => <PeopleItem people={item} />}
            />
            )
        }
    }
    render(){
        return(
            <View style={styles.container}>
                {this.renderInitialView}
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
    detailView:state.detailView,
    }
}
export default connect(mapStateToProps)(PeopleList);