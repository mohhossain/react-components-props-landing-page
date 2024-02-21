import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Body from "./components/Body";

import vrHeadset from "./data";

// component:
// its a function
// its a child -> it can be a parent
// renders or return jsx -> one html element
// you can import and export
// declarative/customizable
// Reusable
// should be capitalized the first letter
// fragment of html/jsx

// prop:
// property
// argument passed into a componet like a function
// a prop to a component is an argument to a function
// static data -> immutable
// passed from parent to a child
// it could be passed as an object or an array
// a function can also be passed as a prop

//                 app
//  navbar   header  body  contact  footer

function App() {
  return (
    <div className="App">
      {/* navbar */}

      <Navbar />
      {/* header */}
      <Header
        name={vrHeadset.name}
        price={vrHeadset.price}
        brand={vrHeadset.brand}
        description={vrHeadset.description}
        image={vrHeadset.images[0]}
      />

      {/* body */}

      <Body features={vrHeadset.features} image={vrHeadset.images[1]} />

      {/* contact */}

      {/* footer */}
    </div>
  );
}

export default App;
