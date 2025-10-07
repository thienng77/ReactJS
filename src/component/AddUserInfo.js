import React from "react";

class AddUserInfo extends React.Component {
    state = {
        name: 'Thien',
        address: 'Binh Dinh',
        age: 26
    };

    handleOnChangInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddNewUser({
            id: Math.floor((Math.random()*100) + 1) + '-random',
            name: this.state.name,
            age: this.state.age
        });
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name: </label>
                    <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangInput(event)} />
                    <label>Your age: </label>
                    <input value={this.state.age} type="text" onChange={(event) => this.handleOnChangAge(event)} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddUserInfo