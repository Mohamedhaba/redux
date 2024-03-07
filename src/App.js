import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { handleMoins, handlePlus, handleShow } from './redux/actions';


function App() {

  const count=useSelector(state=>state.count);
  const {isShow}=useSelector(state=>state)
  // console.log(count)
  const dispatch=useDispatch()
  return (

    
  
    <div className='App'>
      <button onClick={()=>dispatch(handleShow())} >  Show</button>
      {
isShow&&<>
        
        <h1>{count}</h1>
      <button onClick={()=>dispatch(handlePlus())} >+</button>
      <button onClick={()=>count>0&&dispatch(handleMoins())}>-</button>
</>
      }
      
    </div>
    
    
  );
}

export default App;
