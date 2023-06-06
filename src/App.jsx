import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form,Container } from 'react-bootstrap';

function App() {
  let initialvalue={username:"",password:""};
  const [initial, setState] = useState(initialvalue)
  
  
  function handlechange(a){
    console.clear();
    console.log(a.target);
     const {name,value}=a.target
     setState({...initial,[name]:value})
    
  } 
  
  return (
    <Container >
      
      
      <Form.Group className='m-5 text-center ' >
        <Form.Control className='w-25 container ' type="text" name="username" placeholder='username' value={initial.username} onChange={handlechange} /><br />
        <Form.Control className='w-25 container' type="password" name="password" id="" placeholder='password' value={initial.password} onChange={handlechange}/><br />
       <Button type="submit" value="submit" className=''>Submit</Button>
        <pre className='mt-3'>Username:{initial.username} <br />password:{initial.password}</pre>
      </Form.Group>
      
    </Container>
  )
}

export default App
