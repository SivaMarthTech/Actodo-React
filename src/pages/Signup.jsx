import { Link} from "react-router-dom"
import {useState } from "react" 
import { useNavigate } from "react-router-dom"

function Signup(props)
{
    const navigate = useNavigate()
    const users = props.users
    const setusers = props.setusers

     const [eusername,setEusername] = useState()
        const [epassword,setEpassword] = useState()

        function handleUInput(evt)
        {
            setEusername(evt.target.value)
        }
    
        function handlePInput(evt)
        {
            setEpassword(evt.target.value)
        }

        function addUser()
        {
            setusers([...users,{username:eusername,password:epassword}])
           navigate('/')
        }

    return(
    <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Hai!</h1>
            <p>You Can Sign-Up here :)</p>
          
            <div className="flex flex-col gap-2 my-2">
                <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md"
                placeholder="Username" onChange={handleUInput}/>
            </div>

            <div className="flex flex-col gap-2 my-2">
                <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md"
                placeholder="Password" onChange={handlePInput}/>
            </div>

            <div className="flex flex-col gap-2 my-2">
                <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md"
                placeholder="Confirm Password"/>
                <button className="bg-yellow-500 w-24 p-1 rounded-md" onClick={addUser}>
                Sign Up
                </button>
                <p>If Already have an account? <Link to={"/"} className="underline">Login</Link></p>
            </div>
        </div>
</div>)
}
export default Signup