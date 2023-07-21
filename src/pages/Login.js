import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Base from "../components/Base";
import { useState } from "react";
import { toast } from "react-toastify";
import { loginUser } from "../services/user-services";
import { doLogin } from "../auth";
import { useNavigate } from "react-router-dom";

const Login=()=>{

    const navigate=useNavigate()

   const [loginDetail,setLoginDetail ] =useState({
        username:'',
        password:''
    })
const handleChange=(event,field)=>{
   let actuleValue= event.target.value
   setLoginDetail({
    ...loginDetail,
    [field]:actuleValue
   })
}

const handleFormSubmit=(event)=>{
    event.preventDefault();
    console.log(loginDetail);
    //validation
    if(loginDetail.username.trim()=='' || loginDetail.password.trim()=='')
    {
        toast.error("username and password  is required ");
        return;
    }

    //submit the login data
    loginUser(loginDetail).then((data)=>{
        console.log(data)

//save the data local strogae 
        doLogin(data,()=>{
            console.log("login details save locsl strogae ");
            navigate("/user/dashboard")

        })

        toast.success("login success");
    }).catch(error=>{
        console.log(error)
        if(error.response.status==400|| error.response.status==404)
        {
            toast.error(error.response.data.message);
        }
       toast.error("something went wrong ")
    })

    
};

const handleReset=()=>{
    setLoginDetail({
        username:'',
        password:'',
    });
};

    return (
        <Base>
        <Container>
            <Row className="mt-4">
                <Col sm={
                    {
                        size:6,
                        offset:3
                    }
                }>
                    <Card color="dark" inverse>
                        <CardHeader>
                            <h3>Login herer</h3>
                        </CardHeader>
                        <CardBody>
                            <Form  onSubmit={handleFormSubmit}>
                                {/* //email filed */}
                                <FormGroup>
                                    <Label for="email"/> enter email
                                    <Input type="text" id="email"
                                    onChange={(e)=> handleChange(e,'username')}
                                    value={loginDetail.username}
                                    
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password" />enter password
                                    <Input type="password" id="password"
                                     onChange={(e)=> handleChange(e,'password')}
                                      value={loginDetail.password}
                                     
                                    ></Input>
                                </FormGroup>
                                <Container className="text-center">
                                    <Button color="light" outline>
                                        Login
                                    </Button>
                                    <Button onClick={handleReset} className="ms-2" color="secondary">
                                        Reset
                                    </Button>
                                </Container>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
        
        </Base>
    );
};

export default Login;