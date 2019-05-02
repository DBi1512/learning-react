import React from "react";
import StudentData from "./StudentData";
import Header from "./Header";
import Student from "./Student";
import Main from "./Main";
import Footer from "./Footer";
import AddProduct from "./AddProduct";

// class NameOfComponent extends React.Component {
//   render() {
//     return <h1>I am a class based component</h1>
//   }
// }

//React, ReactDOM
class App extends React.Component {
  state = {
    count: 0,
    productName: "",
    description: "",
    price: "",
    products: [{ productName: "Item 1", description: "Just very new", price: 100 }],
  };

  addOne = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  minusOne = () => {
    this.setState(prevState => {
      return {
        count: prevState.count - 1,
      };
    });
  };

  addProduct = product => {
    this.setState(prevState => {
      return {
        products: [...prevState.products, product],
      };
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const product = {
      productName: this.state.productName,
      description: this.state.description,
      price: this.state.price,
    };
    this.addProduct(product);
    this.setState({ productName: "", description: "", price: "" });
  };

  render() {
    const renderStudents = () => {
      return StudentData.map(({ firstName, lastName, imgUrl, title, skills }, index) => (
        <Student key={index} firstName={firstName} lastName={lastName} imgUrl={imgUrl} title={title} skills={skills} />
      ));
    };

    const { products, productName, description, price } = this.state;
    const productList = products.map(({ productName, description, price }) => (
      <li key={productName}>
        {" "}
        {productName} {description} {price}{" "}
      </li>
    ));

    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <div className="btn">
          <button onClick={this.addOne}>Add One</button>
          <button onClick={this.minusOne}>Minus One</button>
          <br />
          <hr />
        </div>

        {productList}
        <AddProduct
          productName={productName}
          description={description}
          price={price}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <Header lastName="Yetayeh" year={new Date()} />

        <Main title="What is React" subTitle="To get started we should have:" techs={["HTML", "CSS", "JS", "React"]} />

        <div style={{ display: "flex", flexWrap: "wrap" }}>{renderStudents()}</div>

        <Footer title="Copyright &copy;" copyRight={new Date()} year={2019} />
      </div>
    );
  }
}

export default App;
