
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import { useState } from 'react'

function App()
{
    const [users,setusers] = useState(
        [
            {
                username:"siva",
                password:"Siva"
            }
        ]
    )

    return(
<div>
    <BrowserRouter>
    <Routes>
  <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
  <Route path='/signup' element={<Signup users={users} setusers={setusers} />}></Route>
  <Route path='/landing' element={<Landing />}></Route>
    </Routes>
    </BrowserRouter>

</div>
    )
}

export default App;
