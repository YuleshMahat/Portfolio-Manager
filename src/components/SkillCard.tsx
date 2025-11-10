import React from "react";
import style from "./SkillCard.module.css";

interface Skill {
  skill: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

const SkillCard = ({ skill, onEdit, onDelete }: Skill) => {
  return (
    <div className={style.card}>
      <div className={style.header}>
        <span className={style.skillText}>{skill}</span>
        <div className={style.actions}>
          {/* <button
            className={style.editBtn}
            onClick={onEdit}
            aria-label="Edit skill"
            title="Edit"
          >
            ✏️
          </button> */}
          <button
            className={style.deleteBtn}
            onClick={onDelete}
            aria-label="Delete skill"
            title="Delete"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
