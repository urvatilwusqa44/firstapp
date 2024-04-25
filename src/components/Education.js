import React from "react";
import EducationCard from "./EducationCard";
import styles from "./Education.module.css";
const Education=()=>{
  const education=[
    {title:"BS-Computational Physics", year:"20-24"},
    {title:"ICSP",year:"18-20"},
    {title:"Matriculation",year:"16-18"}
  ];
    return (<div className={styles.container}>
        <h1>Education</h1>
        {education.map((element)=>{
        return <EducationCard title={element.title} year={element.year}/>
        })}
        
      </div>);
};
export default Education;