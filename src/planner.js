import {Component} from 'react';
import honey from './lipstick.png'

export class Planner extends Component{
   state = {
    userInput: '',
    plannerList:[]
   }

onChangeEvent (e){
    this.setState({userInput: e});
}

addItem (input){
if (input === ''){
    alert("Are you sure you want to leave the placeholder blank?")
    }
    else{
        let listArray = this.state.plannerList;
        listArray.push(input);
        this.setState({plannerList: listArray, userInput: ''})
    }
}

deleteItem(){
    let listArray = this.state.plannerList;
    listArray=[];
    this.setState({plannerList: listArray})
}
crossedWord(event){
    const li = event.target;
    li.classList.toggle('crossed');
}
onFormSubmit(e){
    e.preventDefault();
}

render(){
    return(
        <div>
<form onSubmit = {this.onFormSubmit}>
<div className='container'>
    <input type="text"
    placeholder = "Hey, beauty, don't forget to love yourself..."
    onChange={(e) => {this.onChangeEvent (e.target.value)}}
    value = {this.state.userInput}/>
</div>
<div className="container">
<button onClick={()=> this.addItem(this.state.userInput)} className="add">Please, add</button>
</div>
<ul>
    {this.state.plannerList.map((item,index) => (
        <li onClick ={this.crossedWord} key={index}>
            <img src = {honey} alt="lipstick icon" width="25px"/>
                {item}
        </li>
    ))}
</ul>

<div className='container'>
<button onClick = {()=> this.deleteItem()} className="delete">Please, delete</button>
</div>
</form>
        </div>
    )
    }













}