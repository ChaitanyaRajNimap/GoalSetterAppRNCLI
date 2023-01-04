import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {
  PRIMARY_GOAL_COLOR,
  PRIMARY_RIPPLE,
  PRIMARY_WHITE,
} from '../constants/colors';

//Goal item to display goal
function GoalItem({onDeleteItem, id, text}) {
  return (
    <View style={styles.goalStyle}>
      <Pressable
        onPress={onDeleteItem.bind(this, id)}
        style={({pressed}) => pressed && styles.pressedItem}
        android_ripple={{color: PRIMARY_RIPPLE}}>
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalStyle: {
    margin: 10,
    borderWidth: 1,
    borderColor: PRIMARY_GOAL_COLOR,
    borderRadius: 7,
    backgroundColor: PRIMARY_GOAL_COLOR,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 10,
    color: PRIMARY_WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
