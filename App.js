import React from 'react';
import {Container,Content, Button,Header, Text,Footer,Body,Left,Right} from 'native-base';


export default class App extends React.Component {
  render() {
    return (
      <Container>
				
				<Container bounces={false} style={{flex:0.5 , flexDirection:"column"}} >
				<Container style={{flex:0.5}}/>
				<Container style={{flex:0.5}}>
									<Text> Test component</Text>
				
				</Container>

				
				</Container>
				<Content  bounces={false} style={{flex:0.5}}  >
				<Container style={{flexDirection: "row"}}>
				<Button full style={{flex:0.5}}>
				<Text>Helo</Text>
				</Button>
				
				
				<Button full style={{flex:0.5}}>
				<Text>Helo</Text>
				</Button>
				</Container>
				
				
				</Content>
				
				
			</Container>
);
  }
}

