import CustomeNavbar from "./CustomeNavbar";

const Base=({title="welcome to our website",children})=>{

    return(
        <div className="container-fluid p-0 m-0" >
            {/* <h1> this is header</h1> */}
            <CustomeNavbar/>
            {children}
            {/* <h1> this is footter</h1> */}
        </div>
    )
};

export default Base;