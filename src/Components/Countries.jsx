import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const url = "https://restcountries.com/v3.1/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const countries = await response.json();
      setCountries(countries);
    };

    fetchData();
  }, []);
  return (
    <>
      <section className="grid">
        {countries.map((country) => {
          const { name, cca2, population, region, capital, flags } = country;
          const { common } = name;
          const { svg } = flags;

          return (
            <Link to={`/countries/${common}`} key={cca2}>
              <article>
                <div>
                  <img src={svg} alt={common} />
                  <div className="info">
                    <h3 className="country-name">{common}</h3>
                    <h4>
                      Population: <span>{population}</span>
                    </h4>
                    <h4>
                      Region: <span>{region}</span>
                    </h4>
                    <h4>
                      Capital: <span>{capital}</span>
                    </h4>
                  </div>
                </div>
              </article>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default Countries;
