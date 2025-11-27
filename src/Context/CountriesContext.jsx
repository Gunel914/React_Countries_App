import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const [allCountries, setAllCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = "https://restcountries.com/v3.1/all?fields=name,capital,flags,region,population,languages,borders,maps,unMember,cca3"; 
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setAllCountries(res.data || []);
      })
      .catch((err) => {
        console.error("Error fetching countries:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  
  const desiredOrder = [
    "All",
    "Antarctic",
    "Americas",
    "Europe",
    "Africa",
    "Asia",
    "Oceania",
  ];
  const foundRegions = Array.from(
    new Set(allCountries.map((c) => c.region).filter(Boolean))
  );
  
  const regions = desiredOrder.filter((r) => r === "All" || foundRegions.includes(r));

  
  const countries =
    selectedRegion === "All"
      ? allCountries
      : allCountries.filter((c) => c.region === selectedRegion);

  return (
    <CountriesContext.Provider
      value={{
        allCountries,
        countries,
        regions,
        selectedRegion,
        setSelectedRegion,
        loading,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};