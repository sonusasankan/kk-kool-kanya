import React from "react";
import {Link} from 'react-router-dom';
import SectionTitle from './style';
import { IoIosArrowForward } from "react-icons/io";

const sectionTitle = ({
    className,
    link,
    linkText,
    supportingData,
    children
}) => (
    <SectionTitle link={link} className={"section-title"+" "+className}>
        <div className="d-flex align-items-center">
            <h2 className="mb-0">{children}</h2>
            {supportingData ? <span className="kk-supporting-data ml-1"> - {supportingData}</span> : ""}
        </div>
        {link ? <Link to={link}><span className="kk-link-text">{linkText}</span><IoIosArrowForward /></Link> : <React.Fragment />}
    </SectionTitle>
)

export default sectionTitle;