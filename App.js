import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler';
import { NavigatorContainer } from '@react-navigation/native'

import View1 from './source/View/view1'
import View2 from './source/View/view2';


function HomeScreen({ navigation }) {
  return (
    <View1 />
  );

}

const Stack = NavigatorContainer();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
    task:null,
    tasks: [],
    c_tasks: [],
    };
    }
    componentDidMount() {
        this.timer=setInterval(() =>this.getTasks(), 1000);
      }
      async getTasks() {
        return fetch("http://127.0.0.1:8000/project1/public/api/tasks")
        .then(response => response.json())
        .then(responseJson => {
        this.setState({
        tasks:responseJson.tasks,
        c_tasks:responseJson.c_tasks
      }, function() {
          //comment
         });
      })
      .catch(error => {
      null;
      });
      }

      addTask= () => {
        fetch("http://127.0.0.1:8000/project1/public/api/tasks", {
        method:'POST',
        headers: {
        Accept:'application/json',
        'Content-Type':'application/json',
        },
        body:JSON.stringify({
        "task":this.state.task,
        }),
        })
        .then((response) => response.json())
        .then((responseData) => {
        "POST Response",
        "Response Body -> "+JSON.stringify(responseData)
        })
        .done();
        this.input._root.clear();
        };
        completeTask = (id) => {
            fetch('http://127.0.0.1:8000/project1/public/api/task/${id}/complete')
            .done();
            };
  render(){
    return (
      
      <NavigatorContainer>
        <MyStack />

      </NavigatorContainer>
    
    
    );
  }
}



