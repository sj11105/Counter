import { useRef } from 'react';
import {useDispatch} from 'react-redux';
function Controls(){

 const dispatch= useDispatch();
 const number=useRef();
 const HandleIncrement=()=>{
  dispatch({type:"INCREMENT"});
 };
 const HandleDecrement=()=>{
  dispatch({type:"DECREMENT"});
 };
 const HandleAdd=()=>{
  dispatch({type:"ADD",payload:{value:number.current.value,},
});
number.current.value=""
 };
 const HandleSub=()=>{
dispatch({type:"SUB",payload:{value:number.current.value}});
 };
 const HandlePrivacy=()=>{
  dispatch({type:"PRIVACY"});
   };
 

  return(
    <>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
    <button onClick={HandleIncrement} type="button" className="btn btn-primary btn-lg px-4 gap-3" >+</button>
    <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={HandleDecrement}>-</button>
    <button  className="btn btn-warning" onClick={HandlePrivacy}>Privacy</button>
  </div>
   <div className="d-grid gap-2 d-sm-flex justify-content-sm-center advance">
   <input type='text' placeholder='enter number' ref={number} />
   <button type="button" className="btn btn-outline-secondary btn-lg px-4 btn btn-info" onClick={HandleAdd}>Add</button>
   <button type="button" className="btn btn-outline-secondary btn-lg px-4 btn btn-danger" onClick={HandleSub}>sub</button>
 </div>
 </>
  )
};
export default Controls;