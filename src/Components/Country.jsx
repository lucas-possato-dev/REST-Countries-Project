import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../country.css";

const Country = () => {
  const [country, setCountry] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}?fullText=true`
        );
        const countryData = await response.json();

        setCountry(countryData[0]);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountryData();
  }, [name]);

  if (!country) {
    return null;
  }

  const {
    flags: { svg },
    name: { common, official },
    population,
    region,
    subregion,
    capital,
    borders,
  } = country;

  const renderBorders = () => {
    if (!borders || borders.length === 0) {
      return <span>N/A</span>;
    }

    return (
      <div className="borders">
        {borders.map((border) => (
          <ul key={border}>
            <li>{border}</li>
          </ul>
        ))}
      </div>
    );
  };

  return (
    <>
      <section className="country">
        <Link to="/" className="btn btn-light">
          <i className="fas fa-arrow-left"></i> Back Home
        </Link>
        <article key={country.cca2}>
          <div className="country-inner">
            <div className="flag">
              <img src={svg} alt={common} />
            </div>

            <div className="country-details">
              <div>
                <h2>{common}</h2>
                <h5>
                  Native Name: <span>{official}</span>
                </h5>
                <h5>
                  Population: <span>{population.toLocaleString()}</span>
                </h5>
                <h5>
                  Region: <span>{region}</span>
                </h5>
                <h5>
                  Sub Region: <span>{subregion}</span>
                </h5>
                <h5>
                  Capital: <span>{capital}</span>{" "}
                </h5>
              </div>

              <div></div>
            </div>
          </div>

          <div>
            <h3>Border Countries: </h3>
            {renderBorders()}
          </div>
        </article>
      </section>
    </>
  );
};

export default Country;
