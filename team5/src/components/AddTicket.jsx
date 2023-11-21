import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormText from 'react-bootstrap/esm/FormText';
import Header from './Header';


function AddTicket(props) {
  return (
    <>
    <Header/>
    <Form  action="https://formsubmit.co/logan@kriegertx.com" method="POST" className='add-form'>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Control type="name" placeholder="Enter First Name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Control type="name" placeholder="Enter Last Name" />
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Control type="text" placeholder="Topic" />
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Control as="textarea" rows={3} />
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>
      
      <Button variant="primary" type="submit">
        Confirm
      </Button>
    </Form>
</>
  );
}
export default AddTicket;