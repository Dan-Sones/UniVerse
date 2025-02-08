import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../home";
import styled from "styled-components";

const Wrapper = styled.div`
    max-height: 100vh;
`

const Router = () => {
    return(
    <Wrapper>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} ></Route>
              
          </Routes>
      </BrowserRouter>
      </Wrapper>
    )
  }
  
  export default Router;