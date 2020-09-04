import styled,{createGlobalStyle} from 'styled-components'
export const GlobalHome = createGlobalStyle`
html {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0 20px ;
    
  }
  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
   h1{
    font-family: Fascinate Inline;
    background-image: linear-gradient(180deg, #fff, #4287f5);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #4287f5);
    font-size: 80px;
    text-align: left;
    margin: 20px; 
   } 
}
`
export const Wrapper = styled.div`
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
padding:50px 10px 50px 50px;
  button{
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    text-align:left;
    
  }
  link{
      text-decoration:none;
      color:#fff;
  }
  h3{
      color:#fff;
  }
  `
export const Card = styled.div`
  max-width:300px;
  align-items:center;
  justify-content:center;
  img{
      height:200px;
  }
`