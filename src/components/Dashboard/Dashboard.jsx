import React, { useState } from "react";
import styled from "styled-components";
import {Sidebar} from './Sidebar.jsx'
import { Light, Dark } from '../../styles/Themes.jsx'
import { ThemeProvider } from "styled-components";
export const ThemeContext = React.createContext(null);

export const Dashboard=() =>{
 const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? Light : Dark;

  const [sidebarOpen, setSidebarOpen] = useState(true);

    return(
     <>
       <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
        <Container className={sidebarOpen ? "sidebarState active" : ""}>
<Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
        </Container>
</ThemeProvider>
      </ThemeContext.Provider>
     </>
      
     
    
  );
}
const Container = styled.div`
  display: grid;
  grid-template-columns: 90px auto;
  background: ${({ theme }) => theme.bgtotal};
  transition:all 0.3s ;
  &.active {
    grid-template-columns: 300px auto;
  }
  color:${({theme})=>theme.text};
`;