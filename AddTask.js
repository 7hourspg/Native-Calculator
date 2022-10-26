import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
const AddTask = (props) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);
  const { setArraydta, setTask, setCloseTask, arraydta, id } = props;

  // console.log(id.id);
  const data = arraydta.arraydta;
  const setData = setArraydta.setArraydta;

  const handleState = () => {
    setTask.setTask(false);
    setCloseTask.setCloseTask(true);
  };
  const addToDo = () => {
    if (title === "") {
      return(setError(true)) 
    } else {
      let Id = id.id + 1;
      setData([...data, { title, id: Id, done: false }]);
      setTitle("");
      setTask.setTask(false);
      setCloseTask.setCloseTask(true);
    }
  };
  return (
    <View style={styles.task_ctr}>
      <View style={styles.innertask_ctr}>
        <Text style={styles.header_txt}>Add a new task</Text>
        <TouchableOpacity>
          <Icon
            name="close"
            size={25}
            color="black"
            onPress={() => handleState()}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          onChangeText={(newText) => setTitle(newText)}
          defaultValue={title}
          style={styles.TextInput}
          placeholder={error?'Fields are empty':'Enter Task'}
          placeholderTextColor={error&&'red'}
        />
      </View>
      <View>
        <TouchableOpacity onPress={() => handleState()}>
          <Text style={styles.btn} onPress={() => addToDo()}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  task_ctr: {
    height: 300,
    // marginVertical: 200,
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: "red",
    // borderStyle: "solid",
    // borderWidth: 2,
    width: 350,
    position: "absolute",
    left: 20,
    top: 200,
    zIndex: 999,
    // transform: [{ translateY: -45 }],
  },
  innertask_ctr: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  header_txt: {
    fontSize: 20,
    fontWeight: "500",
  },
  TextInput: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    marginHorizontal: 5,
    paddingHorizontal: 10,

  },
  btn: {
    backgroundColor: "black",
    alignSelf: "center",
    marginVertical: 30,
    fontSize: 18,
    paddingVertical: 5,
    paddingHorizontal: 13,
    color: "white",
    borderRadius: 5,
  },
  // err:{
  //   color:'red'
  // }
});

export default AddTask;
