import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
export default function Home() {
    const navigate = useNavigate();
    const [passData, setpassData] = useState("hello check")
  return (
      <>
    <div>Home</div>
    <button onClick={()=>{navigate('/about',{passData})}} >
    GO TO ABOUT
    </button>
      </>
  )
}
