import React, {Component} from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import './Carousel.scss';

class Carousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: {
                loop: false,
                navContainer: false,
                dots: false,
                startPosition: 0,
                margin: 10,
                nav: false,
                stagePadding: 16,
                responsive: {
                    0: {
                        items: 2,
                    },
                    768: {
                        items: 4,
                        startPosition: 1,
                    },
                    992: {
                        items: 5,
                        startPosition: 2,
                        mouseDrag: false
                    },
                }
            },
            events : {
                onDragged: function(event) { console.log('onDragged: ' + event.type); },
                onChanged: function(event) { console.log('onChanged: ' + event.type); },
                onTranslate: function(event) { console.log('onTranslate: ' + event.type); }
            }
        }
    }

    componentDidMount(){
        if(this.props.option){
            this.setState({
                options: this.props.option
            })
        }
    }

    render(){
        const {
            options,
            onTranslated,
            children
        } = this.props
        return (
            <React.Fragment>
                <OwlCarousel
                    ref="temp"
                    className="owl-theme featured-categories"
                    options={options}
                    onTranslated = {onTranslated}
                    {...this.state.options}
                >
                    {children}
                </OwlCarousel>
            </React.Fragment>
        )
    }
}

export default Carousel;
