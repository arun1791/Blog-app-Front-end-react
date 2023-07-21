import {Button, Card, CardBody, Container, Form, Input, Label} from "reactstrap";
const AddPost=()=>{
    return(
        <div className="warpper">
                {/* <h1> this is add    ppst compunets </h1>
                <p>
                    we are developing page 
                </p> */}

                <Card className="shadow-sm">
                    <CardBody>
                        <h3>
                            whats is going ?
                        </h3>

                        <Form>
                            <div className="my-3">
                                <Label for="titile">Post Titile</Label>
                                <Input type="text"  id="titile" placeholder="enter here"/>
                            </div>
                            <div className="my-3">
                                <Label for="content">Post Content</Label>
                                <Input type="textarea" id="content" placeholder="enter here"  style={{height:'300px'}}/>
                            </div>
                            <div className="my-3">
                                <Label for="content">Post Category</Label>
                                <Input type="select" id="category" placeholder="enter here" >
                                <option>
                                    programking
                                </option>
                                <option>
                                    bollywoood
                                </option>
                                <option>
                                    hollywood
                                </option>

                                </Input>
                            </div>
                            <Container className="text-center">
                                <Button color="primary">
                                    Create Post
                                </Button>
                                <Button color="danger" className="ms-2">
                                    Reset Content
                                </Button>
                            </Container>
                        </Form>
                    </CardBody>
                </Card>
        </div>
    )
}

export default AddPost;