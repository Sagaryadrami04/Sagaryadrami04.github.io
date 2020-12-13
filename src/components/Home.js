import React from 'react'
import {Row,Col} from 'react-bootstrap';
import {FaInstagram} from "react-icons/fa"
function Home() {
    return (
        <div className="container-field bg-dark">
            <Row>
                <Col>
                    <div className="d-flex justify-content-center align-items-center">
                        <img src="https://avatars3.githubusercontent.com/u/65614768?s=400&u=ab0301e6d9bdd24539305faff1f2bcf35de089fa&v=4s" alt="photo"/>
                    </div>
                    </Col>
                <Col>
                <h1 className="d=flex justify-content-center aligns-items-start">Sagar S Yadrami</h1>
               <h2>Web Developer</h2> 
                </Col>
                
          <div>
              <a href="https://google.com" target="_blank">
                  <FaInstagram color="#efefef" fontSize="50px"/>
             </a>
            </div>
            </Row>

       </div>
    )
}

export default Home;
