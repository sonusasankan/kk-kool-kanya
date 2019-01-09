import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import PropTypes from "prop-types";

//left right indicators
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const MenuItem = ({ text, selected }) => {
  return <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>;
};
const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: <FiChevronLeft />, className: "arrow-prev" });
const ArrowRight = Arrow({ text: <FiChevronRight />, className: "arrow-next" });

class HorizontalScrollableTags extends Component {
  state = {
    alignCenter: false,
    clickWhenDrag: false,
    dragging: true,
    hideArrows: true,
    hideSingleArrow: true,
    itemsCount: this.props.list.length,
    selected: "item1",
    translate: 0,
    transition: 0.4,
    wheel: true
  };
  constructor(props) {
    super(props);
    this.menu = null;
    this.menuItems = this.Menu(
      this.props.list.slice(0, this.props.list.length),
      this.state.selected
    )
  }

  Menu = () =>
    this.props.list.map(el => {
      return <MenuItem text={el} key={el} />;
    });

  setSelected = ev => {
    const { value } = ev.target;
    this.setState({ selected: String(value) });
  };

  render() {
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
    );
  }
}

HorizontalScrollableTags.PropTypes = {
  list: PropTypes.object.isRequired
};

export default HorizontalScrollableTags;
