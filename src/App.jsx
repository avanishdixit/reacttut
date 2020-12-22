import React from 'react';
import ReactDOM from 'react-dom';
import List from './List'
import Para from './Para'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App=()=>{

    return(
        <>
        <div> 
     <h1 className="text-center text-danger text-capitalize my-5">Welcome to my channel</h1>
        </div>
     <div className="container">
  <div className="row">
    <div className="col-sm">
       <div class="card"  >
  <img class="card-img-top" src="https://picsum.photos/id/237/200/300" alt="Card image cap" height="250px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col-sm">
       <div class="card" >
  <img class="card-img-top" src="https://picsum.photos/seed/picsum/200/300" alt="Card image cap" height="250px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col-sm">
       <div class="card"  >
  <img class="card-img-top" src="https://picsum.photos/200/300?grayscale" alt="Card image cap" height="250px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div>
</div>
</>
    );
}
export default App;