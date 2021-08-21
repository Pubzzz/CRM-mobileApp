import { View} from 'react-native';  
import React from 'react';
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  
import PeopleList from './peopleList';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';


const TabNavigator = createMaterialBottomTabNavigator(  
    {  
        People: { screen: PeopleList,  
            navigationOptions:{  
                tabBarLabel:'People',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                         <Icon name={'user'} size={50} color={tintColor}/>
                    </View>),  
            }  
        },  
        Add: { screen: AddPerson,  
            navigationOptions:{  
                tabBarLabel:'Add',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                       <Icon name={'plus'} size={50} color={tintColor}/>  
                    </View>),  
                activeColor: '#f60c0d',  
                inactiveColor: '#f65a22',  
                barStyle: { backgroundColor: '#f69b31' },  
            }  
        },  
        Company: { screen: CompanyList,  
            navigationOptions:{  
                tabBarLabel:'Company',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                       <Icon name={'archive'} size={50} color={tintColor}/>
                    </View>),  
                activeColor: '#615af6',  
                inactiveColor: '#46f6d7',  
                barStyle: { backgroundColor: '#67baf6' },  
            }  
        },  
    },  
    {  
      initialRouteName: "People",  
      activeColor: '#f0edf6',  
      inactiveColor: '#226557',  
      barStyle: { backgroundColor: '#3BAD87' },  
    },  
);  
  
export default createAppContainer(TabNavigator);  