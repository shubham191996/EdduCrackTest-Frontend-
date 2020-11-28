import React from "react";
import axios from "axios";
import ErrorHandler from "../../Component/ErrorHandler/ErrorHandler";

require('dotenv').config();

class Home extends React.Component {
    constructor() {
        super();
        this.state = { isError: false, errorCode: "404", errorMessage: "Location not found" };
      }

      componentDidMount() {
        axios.get(process.env.REACT_APP_API_URL + '/getItems')
          .then(function (response) {
            var listOfItems = JSON.parse(response);
            console.log(response);
          })
          .catch(function (error) {
            this.setState(errorCode: error.code, errorMessage: errorMessage);
            console.log(error);
          })
      }

      render() {
        return(
            <div>
                {
                    this.state.isError
                        ?
                            <ErrorHandler errorCode = { this.state.errorCode } errorMessage = { this.state.errorMessage } />
                        :
                            <Items />
                }
            </div>
        )
      }
}

export default Home;