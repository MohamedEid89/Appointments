import { Col, Container, Row } from "react-bootstrap";

function App() {
  const person = [
    {id: '1' ,name: 'Ali' , date:'12pm' , img:'img.jpeg'},
   {id:'2' ,name:'Áhmed' ,date:'5am' ,img:'img.jpeg'},
   {id: '3' ,name: 'Samy' , date:'8pm' , img:'img.jpeg'},
   {id: '4' ,name: 'John' , date:'2am' , img:'img.jpeg'},
   {id:'5' ,name:'Anna' ,date:'9pm' ,img:'img.jpeg'},
   {id:'6' ,name:'Sufian' ,date:'9pm' ,img:'img.jpeg'},
  
  ]
  return (
    <div className="font body">
      <Container className="py-2">
        <Row className="justify-content-center">
          <Col sm="8" className="cardtitle my-2 fs-5">
            You have {person.length} Appointments.
          </Col>
        </Row>

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

        <Row className="justify-content-center my-2 p-2">
          <Col sm="8" className="d-flex justify-content-between">
            <button className="brn-style">Delete all</button>
            <button className="brn-style">Show Data</button>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
