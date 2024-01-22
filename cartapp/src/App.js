import './App.css';
import {Provider} from "react-redux";
import {store} from "./store"

// import CustomerView from './CustomerView';
// import CustomerAdd from './CustomerAdd';
// import ProductView from './ProductView';
// import ProductAdd from './ProductAdd';
// import Register from './Register';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Contact from './Contact';
import Blogs from './Blog';
import Home from './Home';
import LinkPages from './LinkPages';

function App() {
  return (
    <Provider store={store}>    
    {/* <div className="App">
        <Register/>
      <hr />
          <CustomerAdd/>
          <h1>hi</h1> 
         
      
          <hr />
          <ProductAdd/>
          <hr />
          <ProductView/>
          <hr />
        
 <hr />          <CustomerView/>
       
      
    </div> */}
    <Router>
        <Routes >
            <Route path="/" element={<LinkPages/>}>
                  <Route index  element={<Home/>}/>
                
                  <Route path='contact' element={<Contact/>}/>
                  <Route path='blogs' element={<Blogs/>}/>
            </Route>
        </Routes>
    </Router>


    </Provider>

  );
}

export default App;
