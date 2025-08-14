// class component
// function component
import React from "react";
class MyComponent extends React.Component {

    state = {
        name: 'Thien',
        address: 'Binh Dinh',
        age: 26
    };

    // handleClick = (event) => {
    //     console.log(">> Click me my button");
    //     console.log("My name is ", this.state.name);
    // }

    handleClick(event) {
        console.log(">> Click me my button");
        console.log("My name is ", this.state.name);
        this.setState({
            name: 'Sky',
            age: Math.floor((Math.random() * 100) + 1)
        })
    }

    handleOnMoverOver(event) {
        console.log(event.pageX);
    }

    handleOnChangInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = (event)=>{
        event.preventDefault();
        console.log(this.state);
    }
    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.age}
                <form onSubmit={(event)=>this.handleOnSubmit(event)}>
                    <input type="text" onChange={(event) => this.handleOnChangInput(event)} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;