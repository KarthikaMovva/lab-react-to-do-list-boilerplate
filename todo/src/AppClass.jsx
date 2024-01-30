import {Component} from "react";
class todo extends Component{
    constructor(props){
        super(props);
        this.state={
            inputentered : "",
            savedinput : [],
        }
    }
    inputchange = ()=>{
        const{inputentered,savedinput}=this.state;
        const listofdata = [...savedinput,inputentered]
        this.setState({savedinput: listofdata, inputentered: ""})
    }
Deletetodo=(id)=>{
let savedinput=this.state
let deletedtasks=savedinput.filter((element,i)=>{
  return(i!=id)
    })
this.setState({savedinput: deletedtasks})
     }
displaychange=(event)=>{
this.setState({inputentered : event.target.value})}

       Updatedtask=(id)=>{
            const {savedinput}=this.state
            let needtoupdate=prompt('Enter the todo that need to be updated');
            let recieveupdates=savedinput.map((e,i)=>{
              if(id==i){
                return needtoupdate
              }
              else{
                return e
              }
            })
            this.setState({savedinput:recieveupdates});
          }
          render(){
       const{inputentered,savedinput}=this.state
       return(
        <div>
        <input type="text" placeholder='Enter todo...' onChange={this.displaychange} value={inputentered}/>
        <button onClick={this.inputchange}>Add</button>
        <br />
        {inputentered}
        {savedinput.map((ele,index)=>{
          return(
            <div key={index}>
              <h1>{ele}</h1>
              <button onClick={()=>{this.Deletetodo(index)}}>Remove</button>
              <button onClick={()=>{this.Updatedtask(index)}}>Edit</button>
            </div>
          )
        })}
      </div>
       )
}
}
export default todo;