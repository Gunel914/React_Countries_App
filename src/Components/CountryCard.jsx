import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

const CountryCard = ({ country }) => {
  return (
    <div className="cards">
      <Link
       
        to={`/country/${country.cca3}`}
        className="card">
        <img
          src={country.flags?.png}
          alt={country.name?.common}
        />
        <h3>{country.name?.common}</h3>
        <p>
          Population: <CountUp end={country.population || 0} separator="," duration={1.2} />
        </p>
      </Link>
    </div>
      
  );
};

export default CountryCard;