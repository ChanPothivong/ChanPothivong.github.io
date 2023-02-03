import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import Header from "./Header";
import Footer from "./Footer";

export default function login() {
    return (
        <>
        <Header/>
        <MDBContainer fluid className='p-4'>

            <MDBRow>

                <MDBCol md='3' className='text-center text-md-start d-flex flex-column justify-content-center'>

                    <h2 className="my-4 display-3 fw-bold ls-tight px-3">
                        We Fix <br />
                        <span className="text-primary">Your Problems</span>
                    </h2>

                    <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
                        We will your heart!!!!!!!
                    </p>

                </MDBCol>

                <MDBCol md='9'>

                    <MDBCard className='mx-auto' >
                        <h2 className='pt-5'> Login</h2>
                        <MDBCardBody className='p-5'>
                            <MDBRow>
                                <MDBCol col='6'>
                                    <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                                </MDBCol>

                                <MDBCol col='6'>
                                    <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text'/>
                                </MDBCol>
                            </MDBRow>

                            <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
                            <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' minLength={8} invalid/>

                            <div className='d-flex justify-content-center mb-4'>
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember Password' />
                            </div>

                            <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>

                            <div className="text-center">

                                <a href="/registration">or sign up ?</a>

                            </div>

                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>

            </MDBRow>

        </MDBContainer>
            <Footer/>
        </>
    );
}
