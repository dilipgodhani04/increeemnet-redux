
import './App.css';
import * as React from 'react';
import{useSelector, useDispatch} from 'react-redux'
import TextField from '@mui/material/TextField';
import{increement,decreement}from './Action/Action';
import newData from './REDUCER/NewData';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

function App() {

  const myState = useSelector((state)=>state.newData);
  const dispatch =useDispatch();
  return (

    <div>
   <Container fixed style={{marginTop :"50px"}}>
     <Button variant="contained"
     onClick={()=>dispatch(increement())}>increement</Button>

       <TextField id="outlined-basic" label="Outlined" variant="outlined"  value={myState}/>

       <Button variant="contained" onClick={()=>dispatch(decreement())}>decreement</Button>

   </Container>
   </div>
  );
}

export default App;
