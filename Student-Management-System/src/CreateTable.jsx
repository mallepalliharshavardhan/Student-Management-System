import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CreateTable(){
    const [Id,setId]= useState("");
    const [name,setName]= useState("");
    const [place,setPlace]= useState("");
    const [phone,setPhone]= useState("");
    const Navigate =useNavigate();

    const handleSubmit =(e)=>{
        e.preventDefault();
        const StudentData ={Id,name,place,phone};
        fetch('http://localhost:8000/Student',{
          method:"POST",
          headers:{"content-type":"application/json"},
        body: JSON.stringify(StudentData) } 
        )
        .then((res)=>{ alert("Student data sucessfully added");
          Navigate("/")}
        )
        .catch((err)=> console.log(err.message))
    }

    return(
        <div className="mx-auto mt-12 max-w-lg rounded-lg border border-slate-200 bg-white p-6 shadow-md">
            <h2 className="mb-5 text-2xl font-semibold text-slate-800">Add a Student</h2>
            <form className="grid gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-1.5">
                <label className="font-semibold text-slate-700" htmlFor="Id">Id:</label>
                <input className="w-full rounded border border-slate-300 px-3 py-2 focus:border-blue-600 focus:outline-2 focus:outline-blue-200"
                 type="text" id="Id" name="Id" value={Id} onChange={(e)=> setId(e.target.value)} 
                ></input>
                </div>
                <div className="grid gap-1.5">
                <label className="font-semibold text-slate-700" htmlFor="name">Name:</label>
                <input className="w-full rounded border border-slate-300 px-3 py-2 focus:border-blue-600 focus:outline-2 focus:outline-blue-200"
                 type="text" id="name" name="name"  value={name} onChange={(e)=> setName(e.target.value)} ></input>
                </div>
                <div className="grid gap-1.5">
                <label className="font-semibold text-slate-700" htmlFor="place">Place:</label>
                <input className="w-full rounded border border-slate-300 px-3 py-2 focus:border-blue-600 focus:outline-2 focus:outline-blue-200" 
                type="text" id="place" name="Place"  value={place} onChange={(e)=> setPlace(e.target.value)} ></input>
                </div>
                <div className="grid gap-1.5">
                <label className="font-semibold text-slate-700" htmlFor="phone">Phone:</label>
                <input className="w-full rounded border border-slate-300 px-3 py-2 focus:border-blue-600 focus:outline-2 focus:outline-blue-200" 
                type="text" id="phone" name="Phone" value={phone} onChange={(e)=> setPhone(e.target.value)} ></input>
                </div>
                <div className="flex gap-2">
                <button className="justify-self-start rounded bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700">Save</button>
                <Link to="/"   className="  justify-self-start rounded bg-red-600 px-5 py-2 font-medium text-white hover:bg-red-700">Back</Link>
            </div>
            </form>
        </div>
    )
}
export default CreateTable;