import React from 'react';
import {Link} from 'react-router-dom'

export default function Home() {

    return(
    <React.Fragment>
   
        <div className="main-container">
            <Link to="/trip"><button id="one">Requst a ride  now</button></Link>
            <Link to="/trip"><button id='two'>Schedule for later</button></Link>
            <Link to="/explore"><button id="three">Explore Kaduna</button></Link>
            
        </div>
        <div className="part-two">
            <div className="services">
                <img width="100%" height="300" src="" alt="" />
                <h1>Our Services</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias eum eligendi praesentium architecto atque sapiente aperiam rerum facere id doloremque, accusamus, dolores necessitatibus tempora suscipit numquam maiores laboriosam odit mollitia, ullam consequatur perspiciatis. Eius cupiditate obcaecati delectus, vel excepturi assumenda, nostrum ut quam iusto, dignissimos maiores quis quae totam accusantium!</p>
            </div>
            <div className="safety">
            <img width="100%" height="300" src="" alt="" />
            <h1>Focused on safety, wherever, whenever</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui molestiae a voluptatum animi similique odit voluptates. Vero, nihil ad excepturi rerum corrupti ducimus libero distinctio nostrum rem voluptate. Doloribus inventore magnam quis explicabo nemo doloremque. Error eveniet qui, explicabo culpa ipsum soluta omnis nobis odit inventore itaque. Dolores, sed harum?</p>
            </div>
          <footer>
              <div className="about">
                    <h3>About US</h3>
                    <hr style={{backgroundColor:"white"}} />
                    <ul className="footer-list">
                        <li>Services</li><br /><br />
                        <li>E-mail:</li><br />
                        <li>Phone:</li><br />
                        <li>Address:</li><br />
                    </ul>
                    <hr style={{backgroundColor:"white"}}  />
              </div>
              <div className="social">
                  <h3>Get in touch with us</h3>
                  <hr style={{backgroundColor:"white"}} />
                  <div className="social-links">
                      
                  </div>

              </div>
              
          </footer>  
          
        </div>
        
  
  
    
    </React.Fragment>
    )
    
}