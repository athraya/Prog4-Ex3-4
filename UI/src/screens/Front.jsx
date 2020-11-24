import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const Frontend = () => {
  const [courseCode, setCourseCode] = useState(null);
  const [courseName, setCourseName] = useState(null);
  const [courseDesc, setCourseDesc] = useState('');

  function postData(courseCode, courseName, courseDesc) {
    const url = 'https://custom-history-294720.uc.r.appspot.com/api/prog4';

    fetch(url, {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        course_code: courseCode,
        course_name: courseName,
        course_desc: courseDesc,
      }),
    })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <View style={{ marginTop: 100 }}>

      <Text style={{ fontSize: 20 }}> New Course Form</Text>
      <TextInput label="*Enter a new course code" mode="outlined" placeholder="Enter course code" value={courseCode} onChangeText={(text) => { setCourseCode(text); }} />
      <TextInput label="*Enter a new course name" mode="outlined" placeholder="Enter course name" value={courseName} onChangeText={(text) => { setCourseName(text); }} />
      <TextInput label="Enter a new course description" mode="outlined" placeholder="Enter course description" value={courseDesc} onChangeText={(text) => { setCourseDesc(text); }} />

      <Button
        mode="contained"
        onPress={() => {
          postData(courseCode, courseName, courseDesc);
        }}
        style={{ marginTop: 10, marginBottom: 20 }}
      >
        Add
      </Button>

    </View>

  );
};

export default Frontend;
