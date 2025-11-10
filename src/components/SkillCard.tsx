import React from "react";
import style from "./SkillCard.module.css";

interface Skill {
  skill: string;
}

const SkillCard = ({ skill }: Skill) => {
  return <div className={style.card}>{skill}</div>;
};

export default SkillCard;
