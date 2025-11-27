import React from "react";
import { useContext } from "react";
import { CountriesContext } from "../Context/CountriesContext";
import { useNavigate } from "react-router-dom";

const FilterButtons = () => {
  const { regions = [], selectedRegion, setSelectedRegion } =
    useContext(CountriesContext);
  const navigate = useNavigate();

  if (!regions || regions.length === 0) return null;

  const onClick = (region) => {
    setSelectedRegion(region);
    if (region === "All") navigate("/");
    else navigate(`/region/${region}`);
  };

  return (
    <div className="filterbutton">
      {regions.map((r) => (
        <button
          key={r}
          onClick={() => onClick(r)}
          style={{
            padding: "6px 10px",
            borderRadius: 8,
            border: selectedRegion === r ? "2px solid #108018ff" : "1px solid #cbd5e1",
            background: selectedRegion === r ? "#108015ff" : "white",
            color: selectedRegion === r ? "white" : "green",
            cursor: "pointer",
          }}
        >
          {r}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;