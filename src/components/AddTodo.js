import React, { createRef } from 'react';
import { connect } from 'react-redux';

import { View, Form, Item, Input, Button, Text } from 'native-base';
import { addTodo } from '../store/actions';


let AddTodo = ({ dispatch }) => {
  let input = createRef();

  const [value, setValue] = React.useState('');

  const add = () => {

    if (!value.trim()) {
      return;
    }
    dispatch(addTodo(value));
    setValue('')
  };

  return (
    <View>
      <Form>
        <Item regular>
          <Input  placeholder='input todo' value={value} onChangeText={text => setValue(text)} />
          <Button
            onPress={add}
          >
            <Text> Add</Text>
          </Button>

        </Item>


      </Form>



    </View>
  );
};
AddTodo = connect()(AddTodo);

export default AddTodo;
