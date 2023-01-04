import React, {useState} from 'react';
import {View, StyleSheet, StatusBar, FlatList, Button} from 'react-native';
import {PRIMARY_BGCOLOR, SECONDARY_BUTTON} from './Src/constants/colors';
import GoalInput from './Src/components/GoalInput';
import GoalItem from './Src/components/GoalItem';

function App() {
  const [courseGoals, setCourseGoals] = useState([]); //State for goal
  const [modalIsVisible, setModalIsVisible] = useState(false); //State for modal visibility

  //For making modal visible
  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  //For making modal invisible
  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  //For adding goal
  const addGoalHandler = enteredGoal => {
    setCourseGoals(currCourseGoal => [
      ...currCourseGoal,
      {
        text: enteredGoal,
        id: Math.random().toString(),
      },
    ]);
    endAddGoalHandler();
  };

  //For deleting goal
  const deleteGoalHandler = id => {
    setCourseGoals(currCourseGoal => {
      return currCourseGoal.filter(goal => goal.id !== id);
    });
    console.log('Goal Deleted!');
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          onPress={startAddGoalHandler}
          color={SECONDARY_BUTTON}
        />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={itemData => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 60,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: PRIMARY_BGCOLOR,
  },
  goalsContainer: {
    margin: 10,
    flex: 5,
  },
});

//Checking file using sonarqube
