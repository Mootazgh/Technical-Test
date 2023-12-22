import React from "react";

const StylingOptions = ({ styleOptions, onChange }) => {
  return (
    <div className="StylingOptions">
      <label>
        Color:
        <input
          type="color"
          value={styleOptions.color}
          onChange={(e) => onChange({ ...styleOptions, color: e.target.value })}
        />
      </label>
      <label>
        Font Size:
        <input
          type="number"
          value={styleOptions.fontSize}
          onChange={(e) =>
            onChange({ ...styleOptions, fontSize: `${e.target.value}px` })
          }
        />
      </label>
      {/* Add more styling options as needed */}
    </div>
  );
};

export default StylingOptions;
