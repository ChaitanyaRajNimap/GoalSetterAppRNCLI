import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Modal, Image} from 'react-native';
import {
  PRIMARY_BACKGROUND,
  PRIMARY_BUTTON,
  PRIMARY_TEXTINPUT,
  SECONDARY_BACKGROUND,
  SECONDARY_BUTTON,
} from '../constants/colors';

function GoalInput({visible, onAddGoal, onCancel}) {
  const [enteredGoal, setEnteredGoal] = useState(''); //State for goal

  //Helper funtion for handling entred goal
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  //For adding goal
  const addGoalHandler = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal('');
    console.log('Goal Added!');
  };

  return (
    // adding modal by wrapping all components
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/goal.png')}
          style={styles.image}
        />
        <TextInput
          value={enteredGoal}
          onChangeText={goalInputHandler}
          placeholder="Add New Goal..."
          style={styles.textInput}
        />
        {/* adding buttons for adding or cancelling new goal */}
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" onPress={onCancel} color={PRIMARY_BUTTON} />
          </View>
          <View style={styles.button}>
            <Button
              title="ADD GOAL"
              onPress={addGoalHandler}
              color={SECONDARY_BUTTON}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 26,
    flex: 1,
    alignItems: 'center',
    backgroundColor: PRIMARY_BACKGROUND,
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    width: '100%',
    padding: 16,
    backgroundColor: SECONDARY_BACKGROUND,
    borderWidth: 1,
    borderColor: SECONDARY_BACKGROUND,
    borderRadius: 5,
    color: PRIMARY_TEXTINPUT,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 10,
  },
});
