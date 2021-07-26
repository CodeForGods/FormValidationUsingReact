import React from 'react';
import { Form, Button} from 'react-bootstrap';
import './Register.css';
class RegisterSeller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldErrorMessage: {
                emailErrorMessage: "",
                passwordErrorMessage: "",
                addressErrorMessage: "",
                nameErrorMessage: "",
                confirmError:""
            },
            fieldForm: {
                email: "",
                password: "",
                address: "",
                name: "",

            },
            visibility: {
                name:false,
                address:false,
                email:false,
                password:false,
                confirm:false,
                
                
            },
            buttonvisibility:false

        }
    }
    handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        let fields = this.state.fieldForm;
        fields[fieldName] = fieldValue;
        this.setState({ fieldForm: fields });
        this.validateField(fieldName, fieldValue);
    }

    validateField = (fieldName, fieldValue) => {
        let errorMessage = this.state.fieldErrorMessage;
        let visibility = this.state.visibility;
        //email validation
        if (fieldName === "email") {

            if (fieldValue === "") {

                errorMessage.emailErrorMessage = "email cannot be empty";
                visibility.email=false;

            }
            else if (!fieldValue.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                errorMessage.emailErrorMessage = "Email should be of perfect pattern and cannot be empty";
                visibility.email=false;

            }
            else {
                errorMessage.emailErrorMessage = "";
                visibility.email=true;
            }
        }
        // name validation
        const containsNumber = /\d/;
        const containsSpecial = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (fieldName === "name") {

            if (fieldValue === "") {
                errorMessage.nameErrorMessage = "Name Cannot be Empty";
                visibility.name=false;
            }
            else if (fieldValue.match(containsNumber)) {
                errorMessage.nameErrorMessage = "Name cannot contains number/digits";
                visibility.name=false;
            }
            else if (fieldValue.match(containsSpecial)) {
                errorMessage.nameErrorMessage = "Name cannot contains special Character";
                visibility.name=false;
            }
            else {
                errorMessage.nameErrorMessage = "";
                visibility.name=true;

            }
        }

        // address validation
       
        if (fieldName === "address") {

            if (fieldValue === "") {
                errorMessage.addressErrorMessage = "Address Cannot be Empty";
                visibility.address=false;

            }
            else {
                errorMessage.addressErrorMessage = "";
                visibility.address=true;

            }
        }
        //password validation
        var passwordExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

        if(fieldName==="password"){
            if(fieldValue===""){
                errorMessage.passwordErrorMessage="Password format cannot be empty";
                visibility.password=false;
            }
            else if(!fieldValue.match(passwordExp)){
                errorMessage.passwordErrorMessage="Password format is not good";
                visibility.password=false;
            }
            else {
                errorMessage.passwordErrorMessage="";
                visibility.password=true;
            }
            

        }

        
        if(fieldName==="confirm"){
            
            console.log("yes");
            if(fieldValue===""){
                errorMessage.confirmError="This cannot be Empty";
                visibility.confirm=false;

            }
            else if(fieldValue!==this.state.fieldForm.password){
                errorMessage.confirmError="Password does not match";
                visibility.confirm=false;
            }
            else{
                errorMessage.confirmError="";
                visibility.confirm=true;
            }
            
        }
        this.setState({ fieldErrorMessage: errorMessage });
        this.setState({visibility:visibility});
        this.setState({buttonvisibility:this.state.visibility.name&&this.state.visibility.email&&this.state.visibility.address&&this.state.visibility.password&&this.state.visibility.confirm})
    }

    render() {

        return (

            <div className="container-fluid">
              <div className="text-center m-5 shadow-none p-3 mb-5 bg-light rounded">
                  <h2>Welcome to HashMap </h2>
                  <h3 className="b-10">FORM VALIDATION USING REACTJS</h3>

              </div>


                <div id="formA" className="shadow-lg p-3 mb-5 bg-white rounded">

                    <Form className="" method="post">

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Enter Name" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Text className="text-danger " id="errormessage2">
                            {this.state.fieldErrorMessage.nameErrorMessage}
                        </Form.Text>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.handleChange} />

                        </Form.Group>
                        <Form.Text className=" text-danger " id="errormessage">
                            {this.state.fieldErrorMessage.emailErrorMessage}
                        </Form.Text>

                        <Form.Group className="mb-3" controlId="formBasicAddress">
                            <Form.Label>Address</Form.Label>
                                <Form.Control type="text" name="address" placeholder="Enter Address" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Text className=" text-danger " id="errormessage">
                            {this.state.fieldErrorMessage.addressErrorMessage}
                        </Form.Text>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Text className=" text-danger " id="errormessage">
                            {this.state.fieldErrorMessage.passwordErrorMessage}
                        </Form.Text>


                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" name="confirm" placeholder="Confirm Your Password" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Text className=" text-danger " id="errormessage">
                            {this.state.fieldErrorMessage.confirmError}
                        </Form.Text>

                        <Button variant="danger" type="submit" disabled={!this.state.buttonvisibility}>
                            Submit
                        </Button>
                        
                    </Form>
                </div>
            </div>
        );
    }
}
export default RegisterSeller;
