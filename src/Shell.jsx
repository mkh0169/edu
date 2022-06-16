import React from "react";
import styled, {ThemeProvider} from "styled-components";
import theme from './theme'; 


const Title = styled.h2`
  color: ${ (props) => props.co};
  padding: 5px;
  border-bottom: 3px solid #999;

  &:hover {
    color: #000;
  }
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.dangerColor};
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato
`;

const Primary_Button = styled.button`
  background : ${props => props.primary ? "palevioletred" : "white"};
  color : ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Shell = () => {
    return (
      <ThemeProvider theme={theme}>
        <div>
            <Title co="#999">Hello Styled
              <div>
                <Primary_Button>normal</Primary_Button>
               <Primary_Button primary>primary</Primary_Button>
             </div>
           </Title>
           <Title co="#f12">Hello Styled</Title>
              <div>
               <Button>Normal Button</Button>
               <TomatoButton>Tomato Button</TomatoButton>
             </div>
           
           <Title co="blue">Hello Styled</Title>
             <div>
              <Button ></Button>
             </div>
           <Title co="pink">Hello Styled</Title>
        </div>
      </ThemeProvider>

    );
};

export default Shell