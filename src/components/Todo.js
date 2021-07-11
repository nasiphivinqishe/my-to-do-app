import React, { useEffect, useState } from "react";
const Todo = () => {

    //for list of todos
    const [todoList, setTodoList] = useState([]);

    //for input of adding to do
    const [inputToDo, setInputToDo] = useState("")

    //for index of to do when editing it
    const [todoIndex, setTodoIndex] = useState(-1)

    // handle input change
    const handleInputChange = (e) => {
        const target = e.target
        var value = target.value
        setInputToDo(value)
    };

    //handle adding todo(updating state of list)
    const addToDo = (e) => {
        e.preventDefault()

        //check if empty ignore adding(Validation)
        if (!inputToDo) {
            alert("Please enter a To-do!")
            return
        }

        if (todoIndex != -1) {
            //DO THE Update

            // get todolist to temporal variable
            let tempToDoListToUpdate = [...todoList]

            //update the value at that index
            tempToDoListToUpdate[todoIndex].value = inputToDo

            //update the main todolist state
            setTodoList(tempToDoListToUpdate)

            //default index again and stop execution
            setInputToDo("")
            setTodoIndex(-1)
            return
        }

        //get state to temporaly storage -- array
        let tempToDoList = [...todoList]

        //update the temporaly state
        tempToDoList.push({
            index: todoList.length,
            value: inputToDo,
        })

        //update input field to be empty
        setInputToDo("")

        //use the method on hooks(useState) to update you state with temp state
        setTodoList(tempToDoList)
    }

    const deleteToDo = (index) => {
        //get state to temp variable
        let tempToDoList = [...todoList]

        //getting index
        var todoToDeleteIndex = tempToDoList.findIndex(item => item.index == index)

        //update temp var(removing with index)
        tempToDoList.splice(todoToDeleteIndex, 1)

        //update real state with temp
        setTodoList(tempToDoList)
    }

    const prepareUpdatingAToDo = (index) => {
        //keep index to use when updating
        setTodoIndex(index)

        //get the item using index
        var itemToUpdate = todoList.find(item => item.index == index)

        //update the input field
        setInputToDo(itemToUpdate.value)
    }


    const allowDrop = (ev) => {
        ev.preventDefault();
    }

    const drag = (ev) => {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    const drop = (ev) => {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }

    return (

        <div className="container">
            <br></br>
            <div className="row">
                <div className="col-sm-7">
                    <form onSubmit={addToDo}>
                        <div className="form-group">
                            <input type="text" className="form-control" value={inputToDo} onChange={(e) => handleInputChange(e)} placeholder="Enter to do here..." />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-md btn-success">Add Todo </button>
                        </div>
                    </form>
                </div>
            </div>
            <hr></hr>
            <div className="row">

                <div className="col-sm-6" id="uncompletedToDoList" onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)} style={{ height: "100vh" }}>
                    <h2><b>Todo List</b></h2>
                    <div>
                        {todoList.map((item, index) => (
                            <div key={index} id={index} className="row" draggable="true" onDragStart={(event) => drag(event, index)}>
                                <div className="w3-card col-sm-9">
                                    <h3>
                                        {item.value}
                                        <div className="float-right">
                                            <i className="fa fa-pencil-square-o" onClick={() => prepareUpdatingAToDo(index)}></i>
                                            &nbsp;
                                            <i className="fa fa-trash-o" onClick={() => deleteToDo(index)}></i>
                                        </div>
                                    </h3>
                                </div>
                                <br></br><br></br><br></br><br></br>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-sm-6" id="completedToDoList" onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)} style={{ height: "100vh" }}>
                    <h2><b>Completed</b></h2>
                </div>
            </div>
        </div >
    )
}
export default Todo;

