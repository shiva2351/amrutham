import styled from "styled-components"

export const HeaderList=styled.li`
color:black;
font-weight:${(props)=>
    props.active?"bold":"normal"
}`;

export const Header=styled.li`
color:black;`;