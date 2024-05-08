import {
    Card, CardBody, Col, Row,
  } from 'react-bootstrap'
  import Forgot from '@/app/(authentication)/forgot/forgot'
  
  export default function Page() {
    return (
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="mb-4 rounded-0">
            <CardBody className="p-4">
              <h1>Forgot</h1>
              <p className="text-black-50">Forgot your password ?</p>
              <Forgot />
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
  