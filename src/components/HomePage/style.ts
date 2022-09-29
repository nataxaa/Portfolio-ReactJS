import styled from "styled-components";


export const Container = styled.div`

display: flex ;
align-items:center ;
gap:5rem;
margin:0rem 0rem 0rem 17rem  ;
height:100vh ;

div.links{
    display:flex ;
    flex-direction:column ;
    position:fixed ;
    left:6rem ;
    gap:20px;
    span{
        padding:10px ;
        background-color:var(--button-base) ;
        border-radius:1000px ;
        display:flex ;
        align-items:center ;
        font-size:27px ;
        cursor:pointer ;
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