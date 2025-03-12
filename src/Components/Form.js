import React,{useState} from 'react'
 
export default function Form(props) {



    const handleUpclick=()=>{
        console.log("uppercase was clicked"+text);
        // setText("you have clicked handleupclick")
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("upppercase has been clicked","success")
    }
    const handleLoclick=()=>{
      console.log("lowercase is clicked"+text)
      let newtext=text.toLowerCase();
      setText(newtext);
      props.showAlert("lowercase has been clicked","success");

    }
    const handleClclick=()=>{
      // console.log("lowercase is clicked"+text)
      let newtext='';
      setText(newtext);
      props.showAlert("clear has been clicked","success");

    }
    //you have to declare this unless you 
    const handleOnchange=(event)=>{
        console.log("on change");
        setText(event.target.value)
    }
    // Declare a new state variable, which we'll call "count"
 const [text, setText] = useState('Enter the text here');
  return (
    <>
    <div className='conatiner' style={ {color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
  {/* <label for="my" className="form-label">Email address</label> */}
  
  <textarea className="form-control" value={text} onChange={handleOnchange} style={{background:props.mode==='dark'?'grey':'white',color:props.mode==='white'?'black':'black'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpclick}>Click to uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoclick}>click to lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClclick}>Clear Text</button>
    </div>
    <div className="container my-2" style={ {color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <p>{0.008 *text.split(" ").length} Minutes to read</p>
    </div>

    </>
  )
}
