import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "./style";
import { Button } from "../../components/Button";
import { FiChevronRight } from "react-icons/fi";

const sectionTitle = ({
  className,
  link,
  linkText,
  supportingData,
  children
}) => (
  <SectionTitle link={link} className={"section-title " + className}>
    <div className="d-flex align-items-center">
      <h2 className="mb-0">{children}</h2>
      {supportingData ? (
        <span className="kk-supporting-data ml-1"> - {supportingData}</span>
      ) : (
        ""
      )}
    </div>
    {link ? (
      <Link aria-label={linkText} to={link}>
        <Button
          styleName="d-none d-md-flex align-items-center"
          primary={false}
          isAlignRight={true}
          label={linkText}
          click={()=>{}}
          icon={<FiChevronRight className="icon" />}
        />
      </Link>
    ) : (
      <React.Fragment />
    )}
  </SectionTitle>
);

export default sectionTitle;
