import React from "react";
import "./Country.css";

const Country = (props) => {
  const {
    flags,
    name,
    capital,
    region,
    area,
    population,
    cca3,
    independent,
    timezones,
  } = props.country;
  return (
    <div className="countryCard">
      <h2>{name.common}</h2>
      <img
        style={{ width: "320px", height: "200px", borderRadius: "20px" }}
        src={flags.png}
        alt=""
      />
      <table>
        <tbody>
          <tr>
            <td>
              <h3>Capital : </h3>
            </td>
            <td>
              <h3>{capital}</h3>
            </td>
          </tr>
          <tr>
            <td>
              <h3>Region : </h3>
            </td>
            <td>
              <h3>{region}</h3>
            </td>
          </tr>
          <tr>
            <td>
              <h3>Area : </h3>
            </td>
            <td>
              <h3>{area}</h3>
            </td>
          </tr>
          <tr>
            <td>
              <h3>Population : </h3>
            </td>
            <td>
              <h3>{population}</h3>
            </td>
          </tr>
          <tr>
            <td>
              <h3>Country Code : </h3>
            </td>
            <td>
              <h3>{cca3}</h3>
            </td>
          </tr>
          <tr>
            <td>
              <h3>Independent :</h3>
            </td>
            <td>
              <h3>{independent ? "Yes Independent" : "Not Independent"}</h3>
            </td>
          </tr>
          <tr>
            <td>
              <h3>Time Zone :</h3>
            </td>
            <td>
              <h3>{timezones[0]}</h3>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Country;
