import React from "react";

class Showcatagory extends React.Component {
  ShowData = () => {
    this.props.filter(this.props.value);
  };
  render() {
    return (
      <div className="catagoryButtonDiv">
        <button type="submit" onClick={this.ShowData}>
          {this.props.value}
        </button>
      </div>
    );
  }
}

export default Showcatagory;
