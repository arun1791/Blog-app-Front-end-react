import React from "react";
import Base from "../../components/Base";
import AddPost from "../../components/AddPost";
import { Container } from "reactstrap";

const  Userdashboard=()=>{
    return(
      <Base>

      <Container>
      <AddPost/>
      </Container>
      {/* <div>
        <h1>Welcome to dash bord </h1>
      </div> */}

     
      </Base>
    )
}

export default Userdashboard;