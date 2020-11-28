import React from "react";
import ErrorHandler from "../ErrorHandler/ErrorHandler";

class Items extends React.Component {
    constructor() {
        super();
        this.state = { isError: false, errorCode: "404", errorMessage: "Location not found" };
      }

      deleteItem = (id) => {
        axios.post('/deleteItem', {
            itemId: id
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            this.setState(errorCode: error.code, errorMessage: errorMessage);
          });
      }

      render() {
        var listOfItems = this.props.listOfItems.map((row, index) = > {
            let item = <li>{row.itemName}(Rs. {row.rentingPrice})</li><button onClick = { this.deleteItem(row.id)}>Delete</button>;
            return(item);
        })
        return(
            <div>
                <ul>
                    <button onClick = { createItem() }>
                    { listOfItem }
                </ul>
                {
                    this.state.isError
                        ?
                            <ErrorHandler />
                        :
                            null
                }
            </div>
        )
      }
}

export default Items;