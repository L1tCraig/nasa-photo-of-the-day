import React from 'react'
import styled from 'styled-components'

export default function Yesterday(props) {
    const pastData = props.info
    const Pastcard = styled.article`
width: 85%;
margin: auto;
border: .5rem groove darkblue;
border-radius: 1.5rem;
background-image: url("${pastData.url}");
background-size: fill
`;
    return (
        <Pastcard>
            <h1>{pastData.title}</h1>
            <img src='https://api.nasa.gov/assets/img/favicons/favicon-192.png' />
            <p>{pastData.explanation}</p>
            <footer>Copyright: {pastData.copyright}</footer>
        </Pastcard>
    )
}