import React, { Component } from 'react';
import { Container,View, Header, Button, Left,Content,Icon,Footer,FooterTab, ActionSheet,Body, Text ,Title,Right} from 'native-base';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='md-aperture'/>
            </Button>
          </Left>
          <Body>
            <Title>朋友圈</Title>
          </Body>
          <Right />
        </Header>
        <View style={{flex:1,padding:6}}>
          <Text>内容区域</Text>
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
