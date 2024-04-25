import React from "react";
const EducationCard=({title,year})=>{
    return(<div>
      <h3>{title}</h3>
      <h5>{year}</h5>
      <p>The degree is about solving complex Physics problems using computing tools and software.
      </p>
    </div>);
};
export default EducationCard;