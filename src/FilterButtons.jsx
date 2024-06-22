import React from "react";

const FilterButtons = (props) => {
  return (
    <div className="filter-buttons">
      <div className="buttons">
        {["All", "Active", "Completed"].map((e) => (
          <button
            key={e}
            onClick={() => props.setFilter(e)}
            className={props.filter === e ? e : ""}
          >
            {e}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterButtons;
