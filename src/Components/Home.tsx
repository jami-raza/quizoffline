import React from 'react';
import {Link} from 'react-router-dom'
import {GlobalHome,Wrapper,Card} from './HomeStyles'
import Footer from './Footer';



export default function Home(){
    return(
        <>
        <GlobalHome/>
            
            
            <Wrapper>
            <h3>Select quiz level </h3>  
            <Card>
            
            <Link className="link" to ="/easy"><button>Easy</button></Link></Card>
            <Card>
            
            <Link to ="/medium"><button>Medium Level</button></Link>
            </Card>
            <Card>
            
            <Link to ="/hard"><button>Hard Level</button></Link>
            </Card>
            <Footer/>
            </Wrapper>
        </>
    )
}