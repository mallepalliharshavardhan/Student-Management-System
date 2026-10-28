 
 import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css'
import StudentTable from './StudentTable';
import CreateTable from './CreateTable';
import ViewDetails from './ViewDetails';
import EditStudent from './EditStudent';

function App() {
   
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<StudentTable/>}> </Route>
      <Route path="/student/create" element={<CreateTable/>}> </Route>
       <Route path="/student/view/:studentId" element={<ViewDetails/>}> </Route>
        <Route path="/student/edit/:studentId" element={<EditStudent/>}> </Route> 
     </Routes>
     </BrowserRouter>  
       
    </>
  )
}

export default App;
