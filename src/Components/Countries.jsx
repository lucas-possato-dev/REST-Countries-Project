import { useState, useEffect } from "react";

const url = "https://restcountries.com/v3.1/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const countries = await response.json();
      setCountries(countries);
      console.log(countries);
    };

    fetchData();
  }, []);
  return (
    <>
      <section className="grid">
        {countries.map((country) => {
          const { numericCode, name, population, region, capital, flags } =
            country;
          const { common } = name;
          const { svg } = flags;

          return (
            <article key={numericCode}>
              <div>
                <img src={svg} alt={common} />
                <div className="info">
                  <h3>{common}</h3>
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
          );
        })}
      </section>
    </>
  );
};

export default Countries;
