import React from "react";

function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button className="remover" onClick={onDelete} type="button">
        Remover
      </button>
    </li>
  );
}

export default TechItem;
