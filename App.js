import React, { Component } from 'react';
import { Text, View, Button, TextInput, TouchableHighlight, StyleSheet, Image } from 'react-native';

export default class MainComponent extends Component {
  //all button functions
  youButton = () => {
    alert('Name: John Smith\nAge: 22\nGender: Male')
  };

  homeButton = () => {
    alert('Address: 123 Sunflower St.\nCity: Thunder Bay\nProvince: Ontario')
  };

  loveButton = () => {
    alert('Partner: Stacey Jones\nAnniversary: June 9th')
  }

  familyButton = () => {
    alert('Parents: James and Jessica Smith\nOccupations: Electrician and Stay At Home Mom')
  }

  friendsButton = () => {
    alert('Friends: 15\nBest Friends: 2\nNames of Best Friends: Harry and Ben')
  }

  schoolButton = () => {
    alert('School: Lakehead U\nProgram: Computer Science\nYear: 2nd\nDate of Graduation: 2024')
  }

  render() {  
   return (
     <View style={styles.container1}>
     <View style={styles.container}>
     {this.props.children}
     <View style ={{paddingTop: 100, alignItems: 'center'}}>
       <TouchableHighlight onPress={this.youButton}>
        <Image source={require("./assets/you.png")} style={styles.image}/>
       </TouchableHighlight>
       <Text> You </Text>
      </View>
      <View style={styles.space}/>
      <View style ={{paddingTop: 100, alignItems: 'center'}}>
       <TouchableHighlight onPress={this.homeButton}>
        <Image source={require("./assets/home.png")}  style={styles.image}/>
       </TouchableHighlight>
       <Text> Home </Text>
      </View>
     </View>
     
     <View style={styles.container}>
     {this.props.children}
     <View style ={{paddingTop: 100, alignItems: 'center'}}>
       <TouchableHighlight onPress={this.loveButton}>
        <Image source={require("./assets/love.jpg")} style={styles.image}/>
       </TouchableHighlight>
       <Text> Love </Text>
      </View>
      <View style={styles.space}/>
      <View style ={{paddingTop: 100, alignItems: 'center'}}>
       <TouchableHighlight onPress={this.familyButton}>
        <Image source={require("./assets/family.jpg")}  style={styles.image}/>
       </TouchableHighlight>
       <Text> Family </Text>
      </View>
     </View>

     <View style={styles.container}>
     {this.props.children}
     <View style ={{paddingTop: 100, alignItems: 'center'}}>
       <TouchableHighlight onPress={this.friendsButton}>
        <Image source={require("./assets/friends.jpg")} style={styles.image}/>
       </TouchableHighlight>
       <Text> Friends </Text>
      </View>
      <View style={styles.space}/>
      <View style ={{paddingTop: 100, alignItems: 'center'}}>
       <TouchableHighlight onPress={this.schoolButton}>
        <Image source={require("./assets/school.png")}  style={styles.image}/>
       </TouchableHighlight>
       <Text> School </Text>
      </View>
     </View>
     </View>
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 20,
    marginLeft: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  container1: {
    flexDirection: 'col',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 50,
    marginLeft: 50,
  },
  space: {
    width: 50,
    height: 50,
  }
});
