import React,{useState} from 'react'


export default function Inputs(props) {
  const [weight,setWeight] = useState(0);
  const[height,setHeight]=useState(0);
  const[bmi,setBmi]=useState('');
  const[message,setMessage]=useState('');
  
  const bmiValue = (event)=>{
    event.preventDefault()
    const weightNum=parseFloat(weight)
    const heightNum=parseFloat(height)
     if(!weightNum || !heightNum){
      alert('enter valid details')
      setMessage('invalid Inputs')
     }
     else{
      let bmi=weight/(height*height)
      setBmi(bmi.toFixed(1))

     if(bmi<18.5){
      setMessage('under weight')
     }
     else if(bmi>=18.5 && bmi<=25){
      setMessage('healthy weight')
     }
     else{
      setMessage('over weight')
     }
  }
}

  let reload=()=>{
    window.location.reload()
    setWeight(0)
    setHeight(0)
    setMessage('')
    setBmi('')
  }
  return (
    <>
    <h2>Weight:</h2>
    <div className="form-floating mb-3">
        <input type="weight" className="form-control" id="floatingInput" onChange={(e)=>setWeight(e.target.value)} placeholder="Enter your weight in Kg's" />
        <label htmlFor="floatingInput" >Enter your weight in Kg's</label>
    </div>
    <h2>Height:</h2>
    <div className="form-floating mb-3">
        <input type="Height" className="form-control" id="floatingPassword" onChange={(e)=>setHeight(e.target.value)} placeholder="enter your Height in mt's" />
        <label htmlFor="floatingPassword">Enter your Height in mt's</label>
    </div>
    <button type="button" className="btn btn-outline-warning my-3" onClick={bmiValue} >Calculate</button>
    <button type="button" className="btn btn-outline-warning mx-3" onClick={reload} >reload</button>

    <div className="result">
    <h2>Your BMI:</h2>
    <div className="form-floating mb-3">
        <input type="BMI" className="form-control" id="floatingInput" placeholder="Your BMI" />
        <label htmlFor="floatingInput">Your Body Mass is {bmi}</label>
    </div>
    <h3>Status:</h3>
    <div className="form-floating mb-3">
        <input type="message" className="form-control" id="floatingInput" />
        <label htmlFor="floatingInput"><h3>{message}</h3></label>
        
    </div>
  
      
   
    </div>

    </>
  );
}

