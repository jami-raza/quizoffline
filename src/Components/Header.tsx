import React from 'react';
import Logo from '../images/Logo.png'
import Notify from '../SVG/Notification';
import styled from 'styled-components';
import {PushNotification} from '../firebase'

const HeaderWrapper = styled.div`
display:grid;
grid-template-columns: repeat(auto-fill, minmax(250px, 20fr));
grid-gap: 30px;
max-width:1100px;
img{
    max-width:300px;
    padding:10px 50px;
}
button{
    background:transparent;
    padding:0 10px;
    border:none;
    text-decoration:none;
}
`
export default function Header(){
    return(
        <HeaderWrapper>
            <img src={Logo} alt=""/>
            <button className="animate__swing" onClick={PushNotification}><Notify/></button>
            
        </HeaderWrapper>
    )
}