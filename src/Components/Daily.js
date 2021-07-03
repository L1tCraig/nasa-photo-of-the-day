import React from 'react'
import styled from 'styled-components';

export default function Daily(props) {
const dailyInfo = props.info
const Card = styled.article`
width: 85%;
margin: auto;
border: .5rem groove darkblue;
border-radius: 1.5rem;
background-image: url("${dailyInfo.url}");
background-size: fill
`;

return (
    <Card >
      <h1>{dailyInfo.title}</h1>
      <img src='https://api.nasa.gov/assets/img/favicons/favicon-192.png' />
      <p>{dailyInfo.explanation}</p>
      <footer>Copywrite: {dailyInfo.copyright}</footer>
    </Card>
)
}
