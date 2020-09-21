import React from "react";

function Counter(props){
    return (
      <div className="counter-label col-md-6 card calculate-form">
        <span>{props.countTime}</span> seconds to left for logout 
      </div>
    )
}

export default Counter
