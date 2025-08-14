// class component
// function component
import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
    //JSX
    render() {
        const myInfo = ['ab','b','c'];
        return (
            <div>
                <UserInfo />
                <br/><br/>
                <DisplayInfo name="Thien IT" age="26"/>
                <hr/>
                <DisplayInfo name={"Gia Thiên"} age={26} myInfo={myInfo}/>
            </div>
        );
    }
}

export default MyComponent;