import react from "react";
import React from "react";

class DisplayInfo extends React.Component {
    render() {
        //console.log(this.props)
        //destructuring array/object
        const { listUsers } = this.props;
        console.log(listUsers);
        //props -> viết tắt property
        return (
            <div>
                {
                    listUsers.map((user) => {
                        return (
                            <div key={user.id}>
                                <div>My name's {user.name}</div>
                                <div>My age's {user.age}</div>
                                <hr/>
                            </div>
                        )
                    })
                }
                {/* <div>My name's {name}</div>
                <div>My age's {age}</div>
                <hr/>
                <div>My name's {name}</div>
                <div>My age's {age}</div>
                <hr/>
                <div>My name's {name}</div>
                <div>My age's {age}</div> */}
            </div>
        )
    }
}

export default DisplayInfo