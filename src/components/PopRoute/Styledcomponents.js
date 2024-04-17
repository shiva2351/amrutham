import styled from "styled-components"

export const HeaderList=styled.li`
color:black;
font-weight:${(props)=>
    props.active?"bold":"normal"
};
border:${(props)=>
    props.active?"2px solid red":"none"
};`;

export const Header=styled.li`
color:black;`;