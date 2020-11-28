import React from "react";

class ErrorHandler extends React.Component {

    constructor() {
        super();
        this.state = { errorCode: "404", errorMessage: "Location not found" };
    }

    render() {
        return(
            <div>
                {this.props.errorCode}
                {this.props.errorMessage}
                Please contact Admin for more information
            </div>
        )
      }
}

export default ErrorHandler;