import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import AddTask from "./AddTask";
const App = () => {
  const [arraydta, setArraydta] = useState([
    {
      title: "Do Coding",
      id: 1,
      done: false,
    },
    {
      title: "Do Daily Bath",
      id: 2,
      done: false,
    },
    {
      title: "Get Good Sleep",
      id: 3,
      done: false,
    },
    {
      title: "Enjoy Your Day",
      id: 4,
      done: false,
    },
    {
      title: "Have a Good Day",
      id: 5,
      done: false,
    },
  ]);
  const [newData, setNewData] = useState(arraydta);
  const [isDone, setIsDone] = useState(false);
  const [task, setTask] = useState(false);
  const [closeTask, setCloseTask] = useState(true);

  // Handle Done TODOs
  const handleDone = (id) => {
    setArraydta(
      arraydta.map((item) => {
        if (item.id === id) {
          return { ...item, done: true };
        }
        return item;
      })
    );
  };

  const id = arraydta.length;
  console.log(arraydta);
  return (
    <>
      <StatusBar />
      <View style={closeTask && { display: "none" }}>
        <AddTask
          setArraydta={{ setArraydta }}
          setTask={{ setTask }}
          arraydta={{ arraydta }}
          setCloseTask={{ setCloseTask }}
          id={{ id }}
        />
      </View>
      <View style={task && { display: "none" }}>
        <View style={styles.Header_container}>
          <Text style={styles.Header_text}>ToDo List</Text>
          <TouchableOpacity
            onPress={() => {
              setTask(!task), setCloseTask(!closeTask);
            }}
          >
            <Icon style={styles.Icon} name="plus" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.TaskAddedContainer}>
          {arraydta?.map((item) => {
            return (
              <View style={styles.inner_ctr} key={item.id}>
                <TouchableOpacity onPress={() => handleDone(item.id)}>
                  {item.done ? (
                    <Icon name="check-circle" size={30} color="green" />
                  ) : (
                    <Icon name="clock-o" size={30} color="red" />
                  )}
                </TouchableOpacity>

                <Text style={styles.taskText}>{item.title}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    // paddingBottom: 10,
    // borderBottomWidth: 1,
    // borderColor: "purple",
    // borderStyle: "solid",
  },
  Header_container: {
    color: "red",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 30,
    paddingBottom: 10,
  },
  Header_text: {
    color: "purple",
    fontSize: 25,
    fontWeight: "bold",
  },
  Icon: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: "purple",
    borderRadius: 1000,
  },

  // AddedContainer Task
  TaskAddedContainer: {
    width: 350,

    alignItems: "center",
    alignSelf: "center",
  },
  inner_ctr: {
    width: 350,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "purple",
    borderStyle: "solid",
    marginBottom: 15,
  },
  taskText: {
    marginLeft: 30,
    fontSize: 20,
    paddingVertical: 10,
    textTransform:"capitalize"
  },
});

export default App;
