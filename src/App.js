import React, { Component } from "react";
import { createBrowserHistory } from "history";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import "./style/icon.scss";

/*Layout*/
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ModalRoot from './container/ModalRoot';

/*routes*/
import { Main } from "./route";


const history = createBrowserHistory();
    // const location = history.location;

class App extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  state = {
    list: []
  };

  componentDidMount(){
    if(this.props.location.pathname === '/'){
      document.body.classList.add('kk-home')
    }else{
      document.body.classList.remove('kk-home')
    }
  }
  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      let header = document.getElementById('Header')
      if(location.pathname === '/'){
        document.body.classList.add('kk-home')
        header.classList.add('invert')
      }else{
        document.body.classList.remove('kk-home')
        header.classList.remove('invert')
      }
    });
  }
  componentWillUnmount() {
      this.unlisten();
  }

  render() {
    return (
        <React.Fragment>
            <div className="main">
              <Header />
              <Main />
              <Footer />
              <ModalRoot />
            </div>
        </React.Fragment>
    );
  }
}

export default withRouter(App);
