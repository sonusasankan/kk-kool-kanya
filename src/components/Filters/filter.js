import React, {Component} from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import FilterWrapper from './style';
import { FiChevronDown } from "react-icons/fi";


class Filters extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputRangeValue: {
                min: 0,
                max: 4,
            }
        };
    }


    isMobile = (window.innerWidth < 768);

    showAll(e){
        e.target.closest('.kk-filters').classList.toggle('show-all');
    }

    collapseCategoryItems(e) {
        if(this.isMobile){
            document.querySelectorAll('.kk-filters-wrapper').forEach(node => {
            node.classList.add('hide');
            });
            e.target.closest(".kk-filters-wrapper").classList.remove('hide');
        }
        else{
            e.target.closest(".kk-filters-wrapper").classList.toggle('hide');
        }
    }

    getInputRange(item, min, max){
        return(
            <InputRange
                maxValue={min}
                minValue={max}
                formatLabel={value => `${value} Yr`}
                value={this.state.inputRangeValue}
                onChange={value => this.setState({ inputRangeValue: value })}
                onChangeComplete={value => console.log(value)} />
        )
    }

    getCheckboxItems(item){ 
        return (
            <React.Fragment>
                {
                    item.map((item, index)=>{
                        return(
                            <div
                            className={"custom-control custom-checkbox "+((index>2)&&(window.innerWidth>767)? " collapse ": "")}
                            id={`${item}${index}`}
                            >
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id={item}
                                />
                                <label
                                    className="custom-control-label"
                                    htmlFor={item}
                                >
                                {item}
                                </label>
                            </div>
                        )
                    })
                }
                {((item.length - 3) > 0) ? <button className="kk-filter-item__show-more" onClick={(e)=> this.showAll(e)} >+{(item.length-3)+" items"}</button> : ""}
            </React.Fragment>
        )
    }

    getOptions(filter){
        if(filter.inputType === "checkbox"){
            return this.getCheckboxItems(filter.item)
        }
        else if(filter.inputType === "range"){
            return this.getInputRange(filter.min, filter.max);
        }
    }

    render(){
        const {filters} = this.props;
        return(
            <FilterWrapper>
                <div className="kk-filter-head d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">Filters</h5>
                    {/* <button class="kk-filter-clear btn btn-link pr-0">
                    Clear All
                    </button> */}
                </div>
                <div className="d-md-none kk-filter-head__item-count">158 results</div>
                <div className="kk-filters-section">
                    <div className="kk-filter-item">
                    {
                        filters.map((filter,index)=>{
                        return (
                            //individual filter wrapper start
                            <div key={index} className={"kk-filters-wrapper "+((this.isMobile && (index !== 0)) ? "hide" : "")}>
        
                            {/* filter name + dropdown indicator start*/}
                            <span
                                className={
                                "kk-filter-btn d-flex justify-content-between align-items-center"
                                }
                                onClick={(e) => this.collapseCategoryItems(e)}
                            >
                                {filter.category}
                                <FiChevronDown className="kk-filter-icon" /> {/* dropdown indicator */}
                            </span>
                            {/* filter name + dropdown indicator end */}
        
        
        
                            {/* custom checkbox start*/}
                            <div className={
                                "kk-filters"
                                }>
                                {
                                    this.getOptions(filter)                            
                                }
        
                            </div>
                            {/* custom checkbox ends */}
        
                            </div>
                            //individual filter wrapper ends
                        )
                        })
                    }
                    </div>
                </div>
            </FilterWrapper>
        )
    }
}



export default Filters;



// getCheckboxItems(filter.item)
// ((filter.item.length - 3) > 0) ? <button className="kk-filter-item__show-more" onClick={(e)=> showAll(e)} >+{(filter.item.length-3)+" items"}</button> : ""