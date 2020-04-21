import React, { Component } from 'react';
import {
  Container,
  View,
  Header,
  Button,
  Left,
  Content,
  Accordion,
  Icon,
  Footer,
  FooterTab,
  ActionSheet,
  Body,
  Text,
  Title,
  Right,
} from 'native-base';

const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

const BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
const DESTRUCTIVE_INDEX = 3;
const CANCEL_INDEX = 4;

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const {navigation} = this.props
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='md-aperture' />
            </Button>
          </Left>
          <Body>
            <Title>朋友圈</Title>
          </Body>
          <Right />
        </Header>
        <View style={{ flex: 1, padding: 6, backgroundColor: '#e1e1e1' }}>
          <Text>内容区域</Text>

          <Button
            onPress={() => navigation.navigate('Guide')}>
            <Text>Go to Guide</Text>
          </Button>

          <Accordion dataArray={dataArray} expanded={0} />

          <Button
            onPress={() =>
              ActionSheet.show(
                {
                  options: BUTTONS,
                  cancelButtonIndex: CANCEL_INDEX,
                  destructiveButtonIndex: DESTRUCTIVE_INDEX,
                  title: "Testing ActionSheet"
                },
                buttonIndex => {
                  this.setState({ clicked: BUTTONS[buttonIndex] });
                }
              )}
          >
            <Text>Actionsheet</Text>
          </Button>

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
