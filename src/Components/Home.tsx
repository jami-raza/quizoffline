import React from 'react';
import {Link} from 'react-router-dom'
import {GlobalHome,Wrapper,Card} from './HomeStyles'
import Easy from '../images/Easy.png';
import Medium from '../images/Medium.png';
import Hard from '../images/Hard.png'


export default function Home(){
    return(
        <>
        <GlobalHome/>
            <h1>Welcome to our quizzes</h1>
            <Wrapper>
            <Card>
            <img src={Easy} alt=""/>
            <Link className="link" to ="/easy"><button>Easy</button></Link></Card>
            <Card>
            <img src={Medium} alt=""/>
            <Link to ="/medium"><button>Medium Level</button></Link>
            </Card>
            <Card>
            <img src={Hard} alt=""/>
            <Link to ="/hard"><button>Hard Level</button></Link>
            </Card>
            </Wrapper>
        </>
    )
}