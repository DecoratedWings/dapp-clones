import styled from 'styled-components';
import { Card, Modal } from "react-bootstrap";

export const StyledCard = styled(Card)`
  background-color: ${(props) => props.theme.card.background} !important;
  color: ${(props) => props.theme.card.text}!important;
  width: 18rem;
  margin-bottom: 1rem;
`;

export const StyledModalBody = styled(Modal.Body)`
  background-color: ${(props) => props.theme.card.background} !important;
  text-color: ${(props) => props.theme.card.text}!important;
  border: none;
`;
export const StyledModalHeader = styled(Modal.Header)`
  background-color: ${(props) => props.theme.card.background} !important;
  text-color: ${(props) => props.theme.card.text}!important;
  border: none;
`;
export const StyledModalFooter = styled(Modal.Footer)`
  background-color: ${(props) => props.theme.card.background} !important;
  text-color: ${(props) => props.theme.card.text}!important;
  border: none;
`;

export const Button = styled.button<{ $primary?: boolean; }>`
padding: 10px 15px; // Adjust padding for size
font-size: 1rem; // Adjust font size as needed
font-weight: 500; // MUI buttons often have medium font weight
text-transform: uppercase; // MUI buttons usually use uppercase text
letter-spacing: 0.5px; // Slight letter spacing
border-radius: 4px; // MUI buttons usually have a 4px border-radius
border: none; // Remove default border
cursor: pointer; // Cursor changes to pointer on hover
transition: background-color 0.3s, box-shadow 0.3s, border-color 0.3s; // Smooth transitions for hover and focus

background-color: ${props => props.$primary ? props.theme.colors.primary : props.theme.button.background};
color: ${props => props.theme.button.text};
box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12); // Subtle shadow like MUI

&:hover, &:focus, &:active {
  background-color: ${props => props.theme.button.background}; 
  border-color: ${props => props.theme.button.background};
  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12); // Shadow intensifies on hover/focus
}

&:disabled {
  background-color: ${props => props.theme.colors.secondary}; // Disabled state background
  color: ${props => props.theme.colors.text};
  cursor: default;
  box-shadow: none;
}

&:focus {
    outline: 3px solid #4D90FE; // Change the color to something that stands out
    outline-offset: 2px; // Add some space between the border and the outline
  }
`;