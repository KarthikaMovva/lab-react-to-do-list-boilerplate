import { useState } from 'react'
import "./App.css"

function App() {

  const[inputentered, changeInput]=useState("")
  const [savedinput, setsavedinput]=useState([])

  const displaychange=(event)=>{
    changeInput(event.target.value)}

  const Saveinput=()=>{
    const Listofinput=[...savedinput,inputentered]
    setsavedinput(Listofinput);
    changeInput("")
  }
  const Deletetodo=(id)=>{
     let deletedtasks=savedinput.filter((element,i)=>{
      return(i!=id)
     })
     setsavedinput(deletedtasks)
  }

  const Updatedtask=(id)=>{
    let needtoupdate=prompt('Enter the todo that need to be updated');
    let recieveupdates=savedinput.map((e,i)=>{
      if(id==i){
        return needtoupdate
      }
      else{
        return e
      }
    })
    setsavedinput(recieveupdates)
  }
  
 return(
  <div>
    <input type="text" placeholder='Enter todo...' onChange={displaychange} value={inputentered} className='inp'/>
    <button onClick={Saveinput} className='add'>Add</button>
    <br />
    {inputentered}
    {savedinput.map((ele,index)=>{
      return(
        <div  className="line" key={index}>
          <h1>{ele}</h1>
          <button onClick={()=>{Deletetodo(index)}} className='Button'>Remove</button>
          <button onClick={()=>{Updatedtask(index)}} className='Button'>Edit</button>
        </div>
      )
    })}
  </div>

 )
}

export default App

