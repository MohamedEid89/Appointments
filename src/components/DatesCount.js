import React from 'react'
import { Row, Col } from 'react-bootstrap'

export const DatesCount = ({person}) => {
  return (
 
            <Row className="justify-content-center">
          <Col sm="8" className="cardtitle my-2 fs-5">
            You have {person.length} Appointments.
          </Col>
        </Row>
 
  )
}
