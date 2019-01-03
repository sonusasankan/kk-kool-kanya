import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      <section className="kk-team-section">
        <div className="container">
          <div className="row-fluid text-center">
            <h2 className="mb-0 mb-md-5">About Us</h2>
            <h3>We are here to create the workforce of the future.</h3>
            <p>Our mission is to help young women cultivate successful careers through 
              straightforward and original career advice, community support, access to the best career coaches, 
              and a curated job board that offers you a behind the scenes look at job opportunities.</p>
          </div>
          <div className="kk-team-photos-wrapper d-flex flex-wrap">
             <div className="kk-team-photo kk-team-photo--small">
               <img src="http://placehold.jp/300x350.png" alt=""/>
             </div>
             <div className="kk-team-photo kk-team-photo--large">
               <img src="http://placehold.jp/610x400.png" alt=""/>
             </div>
             <div className="kk-team-photo kk-team-photo--lengthy">
               <img src="http://placehold.jp/300x450.png" alt=""/>
             </div>
             <div className="kk-team-photo kk-team-photo--small">
               <img src="http://placehold.jp/300x350.png" alt=""/>
             </div>
             <div className="kk-team-photo kk-team-photo--small">
               <img src="http://placehold.jp/450x300.png" alt=""/>
             </div>
          </div>
          <div className="row-fluid">
            <p>Our vision is to have women own their futures. We are here to support, 
              encourage and inspire women to stick through the initial stages of their career to 
              prevent them from leaving work when they experience changes in their personal life.</p>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row-fluid">
            <h2>Our values are highlighted by</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <img src="" alt=""/>
              <h5>Transparency</h5>
              <p>We are transparent and honest in all our communication to you. This can be  seen in all our interaction,from the articles we write to the information we post. We believe honesty is the key to a strong relationship, one that we want to form with you. 
                We are truly here to create the workforce of the future</p>
            </div>
            <div className="col-md-4">
              <img src="" alt=""/>
              <h5>Authenticity</h5>
              <p>We are transparent and honest in all our communication to you. This can be  seen in all our interaction,from the articles we write to the information we post. We believe honesty is the key to a strong relationship, one that we want to form with you. 
                We are truly here to create the workforce of the future</p>
            </div>
            <div className="col-md-4">
              <img src="" alt=""/>
              <h5>Wholeheartedness</h5>
              <p>We are transparent and honest in all our communication to you. This can be  seen in all our interaction,from the articles we write to the information we post. We believe honesty is the key to a strong relationship, one that we want to form with you. 
                We are truly here to create the workforce of the future</p>
            </div>
          </div>
        </div>
        <div className="row-fluid">
            <img className="img-fluid" src="http://placehold.jp/1600x400.png" alt=""/>
          </div>
      </section>
      <section>
        <div className="container">
          <div className="row-fluid text-center">
            <h2>What we do</h2>
            <h3>We are here to create the workforce of the future.</h3>
          </div>
        </div>
      </section>
      </React.Fragment>
    );
  }
}
