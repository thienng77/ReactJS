// class component
// function component
import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
    //JSX
    state = {
        listUsers: [
            { id: 1, name: "Ngo Gia Thiên", age: "16" },
            { id: 2, name: "Ngo Quốc Thiên", age: "27" },
            { id: 3, name: "Ngo Hoàng Thiên", age: "69" },
        ]
    }

    handleAddNewUser = (userObj) => {
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }

    handelDeleteUser = (userID) => {
        let listUsersClone = this.state.listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userID);
        this.setState({
            listUsers: listUsersClone
        })
    }

    render() {
        //DRY: don't repeat yourself

        const test = { name: 'thien', agr: 27 }
        return (
            <>
                {JSON.stringify(test)}
                <br />
                <div className="a">
                    <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
                    <br /><br />
                    <DisplayInfo listUsers={this.state.listUsers}
                        handelDeleteUser={this.handelDeleteUser} />
                </div>
                <div className="b">

                </div>
            </>
        );
    }
}

export default MyComponent;