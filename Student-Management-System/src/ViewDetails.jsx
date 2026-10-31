import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ViewDetails(){
    const{studentId}=useParams();
    console.log(studentId)

    useEffect(()=>{
     fetch(`http://localhost:8000/Student/${studentId}`)
        .then((res)=> res.json())
        .then((data)=> console.log(data))
        .catch((err)=> console.log(err.message))
    },[studentId])
    
    return( 
        <>
        <div className=" mx-auto mt-12 max-w-lg rounded-lg border border-slate-200 bg-white p-6 shadow-md">
          <h1 className="text-lg font-large text-violet-700 Justify-center">ViewDetails</h1>
          <p><strong>ID:</strong>1</p>  
          <p><strong>Name:</strong>Kunal</p>
          <p><strong>Place:</strong>MP</p>
          <p><strong>Phone:</strong>7849</p>
                   <br/><Link to="/" className="justify-self-start rounded bg-red-600 px-5 py-2 font-medium text-white hover:bg-red-700">Back</Link>

        </div>
        </>
    )
}
export default ViewDetails;