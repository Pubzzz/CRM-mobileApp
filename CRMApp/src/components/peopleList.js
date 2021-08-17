import React from "react";
import {StyleSheet,FlatList } from "react-native";
import {connect} from 'react-redux';
import peopleItem from './peopleItem';

class peopleList extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <FlatList 
                    data={this.props.people}
                    renderItem={({item}) => <peopleItem people={item} />}
                />
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
    return {people:state.people}
}
export default connect(mapStateToProps)(peopleList);