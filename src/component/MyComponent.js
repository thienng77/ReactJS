// class component
// function component
import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
    //JSX
    state = {
        listUsers: [
            { id: 1, name: "Ngo Gia Thiên", age: "26" },
            { id: 2, name: "Ngo Quốc Thiên", age: "27" },
            { id: 3, name: "Ngo Hoàng Thiên", age: "28" },
        ]
    }
    render() {
        //DRY: don't repeat yourseft
        return (
            <div>
                <UserInfo />
                <br /><br />
                <DisplayInfo listUsers={this.state.listUsers}
                />
            </div>
        );
    }
}

export default MyComponent;