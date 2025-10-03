import react from "react";
import React from "react";

class DisplayInfo extends React.Component {
    state = {
        isShowListUser : true
    }
    handleShowHIde = () => {
       this.setState({
        isShowListUser : !this.state.isShowListUser
       })
    }
    render() {
        //console.log(this.props)
        //destructuring array/object
        const { listUsers } = this.props;
        console.log(listUsers);
        //props -> viết tắt property
        return (
            <div>
                <div>
                    <span onClick={() => { this.handleShowHIde() }}>{this.state.isShowListUser === true ? "Hide list users:" : "Show list users:"} </span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {
                            listUsers.map((user) => {
                                return (
                                    <div key={user.id} className={user.age > 18 ? "green" : "blue"}>
                                        <div>My name's {user.name}</div>
                                        <div>My age's {user.age}</div>
                                        <hr />
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
        )
    }
}

export default DisplayInfo