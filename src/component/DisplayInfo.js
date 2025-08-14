import react from "react";
import React from "react";

class DisplayInfo extends React.Component{
    render(){
        //console.log(this.props)
        //destructuring array/object
        const {age, name} = this.props;
        //props -> viết tắt property
        return(
            <div>
                <div>My name's {name}</div>
                <div>My age's {age}</div>
            </div>
        )
    }
}

export default DisplayInfo