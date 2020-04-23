import React, { Component } from 'react';
import { Body, Button, Container, Footer, FooterTab, Header, Icon, Left, Right, Text, Title, View } from 'native-base';


import TodoFooter from '../components/Footer';
import AddTodo from '../components/AddTodo';
import VisibleTodoList from '../components/VisibleTodoList';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const { navigation } = this.props;
    return (
      <Container>
        <Header>

          <Left>
            <Icon name="home" style={{ color: '#fff' }} />
          </Left>

          <Body>
            <Title>首页</Title>
          </Body>

          <Right />
        </Header>
        <View style={{ flex: 1, backgroundColor: '#f4f4f4', padding: 10 }}>
          <Text>内容区域</Text>

          <Button
            onPress={() => navigation.navigate('Guide')}
          >
            <Text>Go to Guide</Text>
          </Button>


          <Text style={{ marginTop: 20, marginBottom: 10 }}>TodoList</Text>

          <View>
            <AddTodo />
            <VisibleTodoList />
            <TodoFooter />
          </View>


        </View>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>底部</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }

}


export default Home;
