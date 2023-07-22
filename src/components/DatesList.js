import React from 'react'
import { Col, Row } from 'react-bootstrap'

export const DatesList = ({person}) => {
  return (
 
                <Row className="justify-content-center">
          <Col sm="8" className="">
            <div className="rectangel p-2">
              {person.length ? (person.map((item)=>{
                return(
                  <div className="d-flex border-bottom mx-2 my-2">
                  <img className="img-avatar" src="img.jpeg" alt=""></img>
                  <div className="px-2">
                    <p className="d-inline fs-6">{item.name}</p>
                    <p className="fs-5">{item.date}</p>
                  </div>
                </div>
                )
              })) : <h3>There is no Appointments today</h3>}

            </div>
          </Col>
        </Row>
  
  )
}
