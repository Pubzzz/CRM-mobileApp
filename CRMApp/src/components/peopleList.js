import React from "react";
import {StyleSheet,FlatList,View } from "react-native";
import {connect} from 'react-redux';
import PeopleItem from './peopleItem';
import Icon from 'react-native-vector-icons/EvilIcons';

class PeopleList extends React.Component{
    static navigationOptions ={
        tabBarIcon :({tintColor})=>(
            <Icon name={'user'} size={50} color={tintColor}/>
        )
    }
    render(){
        return(
            <View style={styles.container}>
                <FlatList 
                    data={this.props.people}
                    renderItem={({item}) => <PeopleItem people={item} />}
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
export default connect(mapStateToProps)(PeopleList);