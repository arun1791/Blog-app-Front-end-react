import{toast} from 'react-toastify';
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap";
import Base from "../components/Base";
import { useEffect, useState } from "react";
import { signUp } from "../services/user-services";


const Signup=()=>{

       const[data,setData]= useState({
        name:'',
        email:'',
        password:'',
        about:'',
        })

        const[error,setError]=useState({
            erros:{},
            isError:false
        })

        useEffect(()=>{
            console.log(data);
        },[data])
        // hnadleChnage 

        const handleChange=(event,property)=>{
            // console.log("name filed chnages");
            setData({...data,[property]:event.target.value})
        }
        //reset form
        const resetData=()=>
        {
            setData({
                name:'',
                email:'',
                password:'',
                about:'',

            })
        }

        //submit form

        const submitForm=(e)=>{
            e.preventDefault();
            if(error.isError)
            {
                toast.error("Form data invaliud correct all deatils and then submit");
                setError({...error,isError:false})
                return;
            }
            //data validate 
            console.log(data);
            //call api for sendind data 
            signUp(data).then((resp)=>{
                console.log(resp);
                console.log("succes log");
                toast.success("User is Registed sucfully !! user Id"+resp.userId);
                setData({
                    name:'',
                email:'',
                password:'',
                about:'',
                })
            }).catch((error)=>{
                console.log(error);
                console.log("Error log");
                setError({
                    erros:error,
                    isError:true
                })
            });

            
        };

    return (
        <Base>
        
       <Container>
       <Row className="mt-4">
        <Col sm={{size:6,offset:3}}>
        <Card color="dark" outline>
        <CardHeader>
            <h3>
                fill the Regsiter information!
            </h3>
            <CardBody>
                 <Form onSubmit={submitForm}>
                    {/* //name filed */}
                     <FormGroup>
                        <Label for="name">Enter name </Label>
                       <Input type="text" placeholder="name here" id="name" onChange={(e)=>handleChange(e,'name')} 
                       value={data.name}
                       invalid={error.erros?.resetData?.data?.name ? true:false}/>
                       <FormFeedback>
                        { error.erros?.resetData?.data?.name }
                       </FormFeedback>
                 </FormGroup> 
                  {/* //email filed */}
                  <FormGroup>
                        <Label for="email">Enter email </Label>
                       <Input type="email" placeholder="email here"  id="email" onChange={(e)=>handleChange(e,'email')} value={data.email}/>
                 </FormGroup> 
                  {/* //password filed */}
                  <FormGroup>
                        <Label for="password">Enter password </Label>
                       <Input type="password" placeholder="password here" id="password" onChange={(e)=>handleChange(e,'password')} value={data.password} />
                 </FormGroup> 
                 {/* //about filed */}
                 <FormGroup>
                        <Label for="about">Enter about </Label>
                       <Input type="textarea" placeholder="about here" id="about" style={{height:"250px"}}  onChange={(e)=>handleChange(e,'about')} value={data.about}/>
                 </FormGroup> 

                 <Container className="text-center">
                    <Button color="dark">
                        Register
                    </Button>
                    <Button onClick={resetData} color="secondary" className="ms-2">
                        Reset
                    </Button>
                 </Container>
                 </Form> 
            </CardBody> 
        </CardHeader>
       </Card>
        </Col>
       </Row>
       </Container>
        </Base>
    );
};

export default Signup;