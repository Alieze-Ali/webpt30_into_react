import React, {useState} from 'react'
import Footer from './components/footer';
import Header from "./components/Header"
import Main from "./components/Main";

function App() {

  const [data, setData] = useState({
    name: "Alieze",
    location: "California"
  })

  // const dataContent = data[0]
  // const dataSetter = data[1]
  // console.log(dataContent, dataSetter)
  // console.log(data)

  return (
    <>
    {/* is rendering the <Header></Header> from the Header.js file */ }
    <Header />
    {/* passing props which is an object */}
    <Main name={ data.name } location={ data.location } />
    <Footer />

    
    </>
    // you can only return one component at time
  );
}

export default App;
