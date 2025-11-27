import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CountriesContext } from "../Context/CountriesContext";
import CountryCard from "../Components/CountryCard";

const Home = () => {
  const { regionName } = useParams(); 
  const { countries, setSelectedRegion, loading } = useContext(CountriesContext);

  useEffect(() => {
    if (regionName) setSelectedRegion(regionName);
    else setSelectedRegion("All");
    
  }, [regionName]);

  if (loading) return <p>Loading...</p>;
  if (!countries || countries.length === 0) return <p>No countries to show.</p>;

  return (
    <div className="cards">
      {countries.map((c) => (
        <CountryCard key={c.cca3} country={c} />
      ))}
    </div>
  );
};

export default Home;