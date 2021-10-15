import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



const Naem = () => {
    return(
        <View styles ={styles.container} >
            <Text>Screen Nomero 2</Text>

        </View>

    );
    
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      width: 221,
      height: 30,
      left: 140,
      top: 300,
      textAlign: 'center',
  
    },
    
  });
  export default Naem;