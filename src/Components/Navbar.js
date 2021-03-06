import React, { useEffect} from 'react';
import{ connect } from 'react-redux'
import{ getNumbers } from '../Actions/getAction';
import{ Link } from 'react-router-dom'


function Navbar(props) {
  console.log(props);

  useEffect(()=>{
   getNumbers();
  },[])
  
  return (
    <header>
        <div className='overlay'></div>
        <nav>
              
                
        <h2> Nike Shoe Factory</h2>
            <ul>
              <li>< Link  to="/">Home</ Link ></li>
              <li>< a href="https://www.nike.com/sa/">About</ a ></li>
              <li className="cart">< Link  to="/cart">
               <ion-icon name="basket"></ion-icon>Cart <span>{props.basketProps.basketNumbers}</span>
                </ Link ></li>
            </ul>
          </nav>
    </header>
    );
}
const mapStateToProps=state=>({
    basketProps:state.basketState
})
export default connect(mapStateToProps, {getNumbers })(Navbar);