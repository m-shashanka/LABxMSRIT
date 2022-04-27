import {useState,useEffect} from "react";

function App() {
  const [data,setData] = useState("Testing");

  useEffect(()=>{
    const getData = async() =>{
      try{
        const res = await fetch("http://localhost:8080/test");
        return res.json();
      } catch(err){
        console.log(err);
      }
    }
    getData().then((res)=>{
      setData(res.message);
    }).catch((err)=> console.log(err));
  },[]);

  return (
    <h1>{data}</h1>
  );
}

export default App;
