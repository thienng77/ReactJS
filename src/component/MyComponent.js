// class component
// function component
import React from "react";
class MyComponent extends React.Component {

    state = {
        name: 'Thien',
        address: 'Binh Dinh',
        age: 26
    };

    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name}
            </div>
        );
    }
}

export default MyComponent;