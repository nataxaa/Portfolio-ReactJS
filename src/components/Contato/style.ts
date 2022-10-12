import styled from "styled-components";



export const Container = styled.div`

height:100vh ;
border-top:1px solid #FFF;
margin: 0 12rem ;


div{
    display:flex ;
    flex-direction:column ;
    margin: 5rem auto ;
    gap: 10px;
    width: 30rem;
    input{
        padding:10px ;
        border-radius:6px ;
        outline:none ;
    }
    input.corpo-email{
        height:10rem ;
    }
}

div.links{
    position:relative ;
    top:-30rem ;
    left:28rem ;
    width:fit-content ;
    display:flex ;
    flex-direction:row ;
    font-size:32px ;
    gap:20px;
    a{
        color:#FFF ;
    }
}

h1{
    margin-top:3rem ;
}

`