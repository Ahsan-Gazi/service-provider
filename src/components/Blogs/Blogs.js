import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='card'>
            <div className='questionAndAnswer'>
            <h2>Difference between authorization and authentication</h2>
            <p>Both authorization and authentication are used for security purposes</p>
            <p>Authorization is related to user permission like super user, admin, normal user<br/> where as authentication 
            is related to user access like login</p>
            <p>Authorization determines whether the user is authorized to access 
                the resources<br/>where as authentication confirms the identity of the user</p>
                <p>Authorization verifies user  whether access is allowed or not
                    <br/>Where as authentication validated user credentials to gain user access.</p>
                    <p>Authorization happens after the user authenticated</p>
                    <p>Authorization may vary, depending on the security level <br/>where as authentication usually requires a userName and password</p>
            </div>
            <div className='questionAndAnswer'>
                <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p>Firebase is used for Backend services</p>
                <p>It is used for the benefit of a variety of tools and services help to develop quality apps</p>
                <p>Firebase is built on Google's infrastructure</p>
                <p>Firebase is also popular as it is a NoSQL database which stores data in JSON like documents</p>
                <p>Main purposes of using Firebase we are using it as for authentication, realtime database, hosting,test lab and for notification</p>
                <br/><p>As other authentication options we can use password-based authentication,<br/>
                Two factor/multifactor authentication, Biometric authentication<br/>
                Single sign on authentication,Token based authentication,
                Certificate-based authentication...</p>
            </div>
            <div className='questionAndAnswer'>
                <h2>What other services do firebase provide other than authentication?</h2>
            </div>
           
        </div>
    );
};

export default Blogs;