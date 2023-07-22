import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'

 
export const DatesAction = ({deleteData, onViewData}) => {
    
  return (
 
                <Row className="justify-content-center my-2 p-2">
          <Col sm="8" className="d-flex justify-content-between">
            <button onClick={deleteData} className="brn-style">Delete all</button>
            <button onClick={onViewData} className="brn-style">Show Data</button>

          </Col>
        </Row>
  
  )
}
