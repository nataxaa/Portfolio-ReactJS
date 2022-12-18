import styled from "styled-components";
import img from '../../images/2.jpg'
import img2 from '../../images/me.jpg'


export const Container = styled.div`

height:100vh ;
border-top:1px solid #FFF;
margin: 0;
justify-content:center ;
background-image: url(${img}) ;
background-position:100% ;
display:flex ;
align-items:center ;

h1{
    position: absolute;
    top:42rem ;
    left:10rem ;
}

div.about-me{
    
    p{
        width:28rem ;
        font-size:20px ;
    }
    img{
        width:15rem; 
         float: left;
         border-radius:1000px;
    }
    margin:27rem 10rem 20rem;
}

div.competencias{
    margin-top:6rem ;
    span{
        font-weight:bold ;
    }
    width:30rem ;
    
    h3{
        margin: 20px 0 7px;
    }
    p{
        margin-bottom:5px ;
    }
}

h1{
    margin-top:3rem ;
    height:fit-content ;
}


`