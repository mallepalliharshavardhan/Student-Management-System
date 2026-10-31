import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function StudentTable() {
    const [students, setStudents] = useState("")
    const Navigate =useNavigate();
    const displayDetails= (items,Id)=>{
        Navigate(`/student/view/ ${items.Id}`)
        console.log(Id)
    }

    useEffect(() => {
        fetch('http://localhost:8000/Student')
            .then((res) => res.json()).then((data) => setStudents(data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
            <section className="mx-auto max-w-6xl">
                <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm font-medium text-violet-700">Student Management</p>
                        <h1 className="mt-1 text-3xl font-semibold tracking-tight">Students</h1>
                        <p className="mt-2 text-sm text-slate-500">Manage your student records.</p>
                    </div>
                    <Link
                        to="/student/create"
                        className="inline-flex items-center justify-center rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-violet-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
                    >
                        Add new student
                    </Link>
                </header>

                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                    <div className="border-b border-slate-200 px-5 py-4">
                        <h2 className="font-medium">Student directory</h2>
                        <p className="mt-1 text-sm text-slate-500">A list of students in your system.</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[640px] text-left text-sm">
                            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                                <tr>
                                    <th scope="col" className="px-5 py-3 font-medium">ID</th>
                                    <th scope="col" className="px-5 py-3 font-medium">Name</th>
                                    <th scope="col" className="px-5 py-3 font-medium">Place</th>
                                    <th scope="col" className="px-5 py-3 font-medium">Phone</th>
                                    <th scope="col" className="px-5 py-3 font-medium">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {students && students.map((items) =>
                                    <tr className="transition hover:bg-slate-50" key={items.id}>
                                        <td className="px-5 py-4 text-slate-500">{items.Id}</td>
                                        <td className="px-5 py-4 font-medium">{items.name}</td>
                                        <td className="px-5 py-4 text-slate-600">{items.place}</td>
                                        <td className="px-5 py-4 text-slate-600">{items.phone}</td>
                                        <td className="px-5 py-4 flex items-center gap-3">
                                            <button className="font-medium text-violet-700 hover:text-violet-900"
                                            onClick={()=> displayDetails(items.Id)}>View</button>
                                            <button className="font-medium text-slate-600 hover:text-slate-900">Edit</button>
                                            <button type="button" className="font-medium text-red-600 hover:text-red-800">Delete</button>
                                        </td>
                                    </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default StudentTable;