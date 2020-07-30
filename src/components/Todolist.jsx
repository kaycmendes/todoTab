import React, { Component } from 'react'

export default class Todolist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }

        this.add = React.createRef()
        this.remove = React.createRef()
    }





    //methods

    cards = () => {
        return (
            <ul>
                <li Nameclass="card" contentEditable="true" >Add a task...
                    <svg ref={this.remove} className="icon remove icon-tabler icon-tabler-x" style={{ float: 'right' }} xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#F44336" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z"></path><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    <svg ref={this.add} xmlns="http://www.w3.org/2000/svg" style={{ float: 'right' }} className="add icon icon-tabler icon-tabler-plus" width="23" height="23" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#8BC34A" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z"></path><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </li>

            </ul>
        )
    }


    addCard = () => {
        console.log('add');
        // create a component of todolist 
        // add it to the ul 
        
    }
    removeCard = () => {
        console.log('remove');
        //remove ul last child
    }

    cleanContent = () => {

    }



    //event

    eventHandler = () => {
        let addBtn = this.add.current
        let removeBtn = this.remove.current

        addBtn.addEventListener("click", this.addCard)
        removeBtn.addEventListener("click", this.removeCard)
    }


    //run 
    componentDidMount() {
        this.eventHandler()
      }




    render() {
        return (
            <div className="todolist">
                <h2>What do you want to do today?</h2>
                {/* todo: add top margin to todo cards */}
                {this.cards()}
            </div>



        )
    }
}
