import styled from "styled-components";
import img from '../../images/1.jpg'


export const Container = styled.div`

display: flex ;
align-items:center ;
gap:5rem;
margin:0rem 0rem 0rem 0rem  ;
height:100vh ;
background-image: url(${img}) ;
background-position:center;
background-size:100% ;

div.informartion{
    display:flex ;
    margin: 0 auto 4rem;
    gap:3rem;
}

div.links{
    display:flex ;
    position:fixed ;
    left:30rem ;
    top:2rem ;
    gap:20px;
   
    a{
        display:flex ;
        text-decoration:none ;
        align-items:center ;
        font-size:20px ;
        cursor:pointer ;
        color:white ;
        transition:0.3s ;
        :hover{
            border-bottom:1px solid #FFF ;
            margin: 0px 4px ;
        }
    }
}

div.tecnologias{
    display:flex ;
    gap:15px;
    margin-top:10px ;
    span{
        font-size:25px ;
        
        display:flex ;
        align-items:center ;

    }
}

img{
    width:20rem ;
    border-radius:6px ;
    box-shadow: 15px 10px #d90429 ;
}

p{
    width:30rem ;
}

p.principais{
    color: #023e8a ;
    font-size:20px ;
    margin-top:15px ;
    margin-bottom:5px ;
}

`