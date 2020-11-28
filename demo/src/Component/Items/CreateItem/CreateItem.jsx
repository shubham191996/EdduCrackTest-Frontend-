import React from "react";

class CreateItem extends React.Component {
    constructor() {
        super();
        this.state = { itemName: "", rentingPrice: "", manufacturingDate: "", isError: false, errorCode: "404", errorMessage: "Location not found" };
      }

      handleNameChange = (event) => {
        this.setState.(itemName: event.value);
      }

      handleNameChange = (event) => {
        this.setState.(rentingPrice: event.value);
      }

      handleNameChange = (event) => {
        this.setState.(manufacturingDate: event.value);
      }

      addItem = () => {
        axios.post('/addItem', {
                    name: this.state.itemName,
                    rentingPrice: this.state.rentingPrice,
                    manufacturingDate: this.state.manufacturingDate
                  })
                  .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                     this.setState(errorCode: error.code, errorMessage: errorMessage);
                  });
      }

      render() {

        return(
            <div>
                Please enter below details to add item <br>
                Item Name <input type = "text" onChange = { (event) => this.handleNameChange(event) } value = { this.state.itemName } >
                Renting Price(In Rs.) <input type = "number" onChange = { (event) => this.handleRentingPriceChange(event) } value = { this.state.rentingPrice } >
                Manufacturing Date <input type = "date" onChange = { (event) => this.handleDateChange(event) } value = { this.state.manufacturingDate } >
                <button onClick = "addItem()">Add</button>
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

export default CreateItem;