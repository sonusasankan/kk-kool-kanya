import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';

//left right indicators
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import {Chip} from '../../components/Chips';

//impor ting images for filter cards
import CareerAdvice from '../../assets/images/article-category/career-advice-square.png';
import CoffeeBreak from '../../assets/images/article-category/coffee-break-square.png';
import Connect from '../../assets/images/article-category/connect-square.png';
import Restarting from '../../assets/images/article-category/restartingcareer-square.png';
import Tools from '../../assets/images/article-category/tools-square.png';



// list of items
const list = [
    <Chip logo={CareerAdvice} alt="Career Advice" title="Career Advice" />,
    <Chip logo={CoffeeBreak} alt="Coffee Break" title="Coffee Break" />,
    <Chip logo={Connect} alt="Connect" title="Connect" />,
    <Chip logo={Restarting} alt="Restarting your Career" title="Restarting your Career" />,
    <Chip logo={Tools} alt="Tools & Skills" title="Tools & Skills" />
];

const MenuItem = ({ text, selected }) => {
    return <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>;
  };

const Menu = list =>
  list.map(el => {

    return <MenuItem text={el} key={el} />;
  });

  const Arrow = ({ text, className }) => {
    return <div className={className}>{text}</div>;
  };

  const ArrowLeft = Arrow({ text: <FiChevronLeft/>, className: "arrow-prev" });
  const ArrowRight = Arrow({ text: <FiChevronRight/>, className: "arrow-next" });

class HorizontalScroll extends Component {
    state = {
        alignCenter: false,
        clickWhenDrag: false,
        dragging: true,
        hideArrows: true,
        hideSingleArrow: true,
        itemsCount: list.length,
        selected: "item1",
        translate: 0,
        transition: 0.4,
        wheel: true
      };
      constructor(props) {
        super(props);
        this.menu = null;
        this.menuItems = Menu(list.slice(0, list.length), this.state.selected);
      }

      // onUpdate = ({ translate }) => {
      //   console.log(`onUpdate: translate: ${translate}`);
      //   this.setState({ translate });
      // };
    
      // onSelect = key => {
      //   console.log(`onSelect: ${key}`);
      //   this.setState({ selected: key });
      // };

      // setItemsCount = ev => {
      //   const { itemsCount = list.length, selected } = this.state;
      //   const val = +ev.target.value;
      //   const itemsCountNew =
      //     !isNaN(val) && val <= list.length && val >= 0
      //       ? +ev.target.value
      //       : list.length;
      //   const itemsCountChanged = itemsCount !== itemsCountNew;
    
      //   if (itemsCountChanged) {
      //     this.menuItems = Menu(list.slice(0, itemsCountNew), selected);
      //     this.setState({
      //       itemsCount: itemsCountNew
      //     });
      //   }
      // };
    
      setSelected = ev => {
        const { value } = ev.target;
        this.setState({ selected: String(value) });
      };

    render(){
        const {
            alignCenter,
            clickWhenDrag,
            hideArrows,
            dragging,
            hideSingleArrow,
            itemsCount,
            selected,
            translate,
            transition,
            wheel
            } = this.state;

            const menu = this.menuItems;
        return (
            <ScrollMenu
                ref={el => (this.menu = el)}
                data={menu}
                arrowLeft={ArrowLeft}
                arrowRight={ArrowRight}
                hideArrows={hideArrows}
                hideSingleArrow={hideSingleArrow}
                transition={+transition}
                onUpdate={this.onUpdate}
                onSelect={this.onSelect}
                selected={selected}
                translate={translate}
                alignCenter={alignCenter}
                dragging={dragging}
                clickWhenDrag={clickWhenDrag}
                wheel={wheel}
            />
        )
    }
}

export default HorizontalScroll;


{/* <Capsule
    isSelected = {this.state.selected.includes('Career Advice')}
    imgSrc="https://loremflickr.com/44/44"
    imgAlt="capsule image"
    title="Career Advice"
/> */}