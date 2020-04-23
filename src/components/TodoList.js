import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Text, View, Left, Right } from 'native-base';

const TodoList = ({ todos, onTodoClick }) => (
  <View style={{ marginTop: 20 }}>
    <List style={{ overflow:'hidden'}}>
      {todos.map(todo => (
        <ListItem
          noIndent
          key={todo.id}
          onPress={() => onTodoClick(todo.id)}
          style={{
            backgroundColor: todo.completed ? '#4bd24b' : '#efefef',

          }}
        >

          <Left>
            <Text>
              <Text style={{ color: todo.completed ? '#fff' : '#000' }}> {todo.text}</Text>
            </Text>
          </Left>
          <Right>
            {todo.completed ? <Text style={{color:'#fff'}}>completed</Text> : null}

          </Right>

        </ListItem>
      ))}
    </List>
  </View>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
