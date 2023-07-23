import { Col, Container, Row, Button } from "react-bootstrap";
import { person } from "./Data";
import { DatesCount } from "./components/DatesCount";
import { DatesList } from "./components/DatesList";
import { DatesAction  } from "./components/DatesAction";
import React, { useState } from "react";
function App() {
  const [personData, setPersonData] = useState(person)
  const onDelete=() => {
    setPersonData([])
  }
  const onViewData=() => {
    setPersonData(person)
    
  }
  return (
    <div className="font body">
      <Container className="py-2">

        <DatesCount person={personData}/>
        <DatesList person={personData}/>
        <DatesAction deleteData={onDelete} onViewData={onViewData}/>

      </Container>
    </div>
  );
}

export default App;
