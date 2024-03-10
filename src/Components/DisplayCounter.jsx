import { useSelector } from "react-redux";
const DisplayCounter=()=>{
 const counter= useSelector((store) => store.counter);
  return(
   
      <p className="lead mb-4 display">Current value of counter:{counter} </p>
  )
};
export default DisplayCounter;