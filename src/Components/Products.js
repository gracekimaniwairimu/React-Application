import React from 'react';
import { render } from 'react-dom';
class Products extends React.Component{
      constructor(props) {
        super(props); 
        this.state = {
           type1: "Vegetables",
         
          type2: "Fruits",
        
    };
      }
      render() {
        return (
          <div style={{ textAlign: "center" }}>
        
            <h1></h1>
            <section className="products">
              <h1>VEGETABLES</h1>
              <div className="product-card">
                <div className="product-image">
                  <img className="photo" src={this.state.appleImg} alt="" />
                </div>
                
                <div className="product-info">
                  
                  <img src='./images/carrots.jpg'width="200"  height="200" alt=""/>
                  <p> Carrots </p>
                  <p> Ksh:400 {this.state.appleImgPrice}</p>
                  <p> Quantity:3kgs {this.state.spinachQuantity} </p>
                  <button className="btn" onClick="saveItem()">
                    Add To cart
                  </button>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image">
                  <img className="photo" src={this.state.veg1Img} alt="" />
                </div>
                <div className="product-info">
                  <img src='./images/kales.jpg'width="200" height="200" alt=""/>
                  <p> Kales</p>
                  <p> ksh 200</p>
                  <p> Quantity:2gs {this.state.spinachQuantity} </p>
                  <button className="btn" onClick="saveItem()">
                    Add To cart
                  </button>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image">
                  <img className="photo" src={this.state.veg2Img} alt="" />
                </div>
                <div className="product-info">
                  <img src='./images/onions.jpg'width="200" height="200" alt=""/>
                  <p> Onions </p>
                  <p> ksh 100 </p>
                  <p> Quantity:1kg {this.state.onionsQuantity} </p>
                  <button className="btn" onClick="saveItem()">
                    Add To cart
                  </button>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image">
                  <img className="photo" src={this.state.bunchImg} alt="" />
                </div>
                <div className="product-info">
                  <img src='./images/spinach.jpg' width="200" height="200" alt=""/>
                  <p> Spinach</p>
                  <p> Ksh:300 {this.state.appleImgPrice}</p>
                  <p> Quantity:3kgs {this.state.appleImgQuantity} </p>
                  <button className="btn" onClick="saveItem()">
                    Add To cart
                  </button>
                </div>
              </div>
              
        
              </section>
             <section className="products">
               <h1>FRUITS</h1>
        <div className="product-card">
        <div className="product-image">
          <img className="photo" src={this.state.veg4Img} alt="" />
        </div>
        <div className="product-info">
          <img src='./images/mangoes.jpg'width="200" height="200" alt=""/>
          <h5>mangoes</h5>
          <p> ksh 50</p>
          <p> Quantity:2kgs {this.state.peachQuantity} </p>
          <button className="btn" onClick="saveItem()">
            Add To cart
          </button>
        </div>
          </div>
        <div className="product-card">
        <div className="product-image">
          <img className="photo" src={this.state.veg4Img} alt="" />
        </div>
        <div className="product-info">
          <img src='./images/bananas.jpg'width="200" height="200" alt=""/>
          <h5>Bananas</h5>
          <p> ksh 50</p>
          <p> Quantity:1kg {this.state.peachQuantity} </p>
          <button className="btn" onClick="saveItem()">
            Add To cart
          </button>
        </div>
          </div>
        <div className="product-card">
        <div className="product-image">
          <img className="photo" src={this.state.veg4Img} alt="" />
        </div>
        <div className="product-info">
          <img src='./images/water.jpg'width="200" height="200" alt=""/>
          <h5>Water melon</h5>
          <p> ksh 400</p>
          <p> Quantity:2 {this.state.peachQuantity} </p>
          <button className="btn" onClick="saveItem()">
            Add To cart
          </button>
        </div>
          </div>
        <div className="product-card">
        <div className="product-image">
          <img className="photo" src={this.state.veg4Img} alt="" />
        </div>
        <div className="product-info">
          <img src='./images/apples.jpg'width="200" height="200" alt=""/>
          <h5>Apples</h5>
          <p> ksh 70</p>
          <p> Quantity:2 {this.state.peachQuantity} </p>
          <button className="btn" onClick="saveItem()">
            Add To cart
          </button>
        </div>
     </div>
    
            </section>
            
        </div>
            
              );
       }
    }
    export default Products;