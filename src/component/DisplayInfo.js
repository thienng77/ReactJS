import react from "react";
import React from "react";
import './DisplayInfo.scss'
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
        const { listUsers } = this.props;
        return (
            <div className="display-info-container">
                <div>
                    <span onClick={() => { this.handleShowHIde() }}>{this.state.isShowListUser === true ? "Hide list users:" : "Show list users:"} </span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {
                            listUsers.map((user) => {
                                return (
                                    <div key={user.id} className={user.age > 18 ? "red" : "blue"}>
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