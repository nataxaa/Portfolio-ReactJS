import styled from "styled-components";


export const Container = styled.div`

display: flex ;
align-items:center ;
gap:5rem;
margin:8rem 0rem 0rem 17rem  ;

div.links{
    display:flex ;
    flex-direction:column ;
    position:absolute ;
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

img{
    width:20rem ;
    border-radius:6px ;
    box-shadow: 15px 10px var(--button-base) ;
}

p{
    width:30rem ;
}

`