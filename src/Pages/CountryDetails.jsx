import React, { useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { CountriesContext } from "../Context/CountriesContext";
import CountUp from "react-countup";
import { FaMapLocationDot } from "react-icons/fa6";


const CountryDetails = () => {
  const navigate = useNavigate()
  const { code } = useParams();
  const { allCountries } = useContext(CountriesContext);

  const country = allCountries.find((c) => c.cca3 === code);

  if (!country) return <p>Country not found.</p>;

  return (
    <div className="detail">

      <img src={country.flags?.png} alt={country.name?.common} />
      <p><strong>Official name: </strong> {country.name?.official}</p>
      <p><strong>Common name:</strong>  {country.name?.common }</p>
      <p><strong>Capital:</strong> {country.capital?.[0] || "—"}</p>
      <p><strong>UN Member:</strong> {country.unMember ? "Yes" : "No"}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p>
        <strong>Population:</strong>{" "}
        <CountUp end={country.population || 0} separator="," />
      </p>
      <p>
        <strong>Languages:</strong>{" "}
        {country.languages ? Object.values(country.languages).join(", ") : "—"}
      </p>

      {country.maps?.googleMaps && (
        <p>
          <a href={country.maps.googleMaps} target="_blank" rel="noreferrer" className="map-icon"><FaMapLocationDot color="black" size={45} /></a>
        </p>
      )}
      <h2>Borders</h2>
      <div className="borders1">
                {!country.borders || country.borders.length === 0 ? (<span> Sərhəd ölkəsi yoxdur</span>)
                 : (
                    country.borders.map((code) => (
                    <a key={code} onClick={() => navigate(`/country/${code}`)}> { code}</a>
                    ))
                )}
      </div>
      
    </div>
  );
};

export default CountryDetails;




