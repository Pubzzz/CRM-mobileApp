import React from "react";
import {FlatList,View,StyleSheet } from "react-native";
import {connect} from 'react-redux';
import CompanyItem from './CompanyItem';
import _ from 'lodash';

class CompanyList extends React.Component{
    render(){
        return(
            <View style={styles.container}>
             <FlatList>
                            data={this.props.companies}
                            renderItem={({item}) => <CompanyItem companies={item} />}
                            keyExtractor={(item,index)=>index.toString()}
             </FlatList>
            </View>
        )
    }
}

const mapStateToProps=state =>{
    const people =state.people;
    const companies=
        _.chain(people)
            .groupBy('company')
            .map((value,key)=>{
                return {
                    company:key,
                    names:value
                }
            })
            .value();
    return{
        companies,
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexWrap:'wrap',
        paddingTop:20,
        paddingLeft:20,
        backgroundColor:'#e5e5e5',
    }
})

export default connect(mapStateToProps)(CompanyList);