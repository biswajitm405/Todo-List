import React, { useState } from 'react'
import TodoLists from './TodoLists';
const App = () => {

const[inputList, setInputList ]=useState("");
const[items,setItems]=useState([]);

const itemEvent =(event)=>{
setInputList(event.target.value)
}

const listofItems=()=>{
setItems((oldItems) => {
    return [...oldItems,inputList];
}) 
setInputList("");
}
const deleteItem=(id)=>{
console.log("deleted");

setItems((oldItems) => {
    return oldItems.filter((arrElem,index) =>{
return index !== id;
    });
});
}
return (
        <>
        <div className="main_div">
            <div className="center_div">
            <br />
                <h1>
                      Todo list</h1>
                      <br />
                <input type="text" placeholder="add a list" 
                value={inputList}
                onChange={itemEvent} />
                <button onClick={listofItems}>+</button>
                <ol>
                  {  items.map((itemval,index) => {
                        return <TodoLists key={index} 
                        id={index}
                        text={itemval}
                        onSelect={deleteItem}
                        />;
                    })}
                </ol>
            </div>
        </div>
        </>
    )
};

export default App
