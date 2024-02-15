import React, {FC, ReactElement, useState, useEffect } from "react";
import WeatherForecastService from "./weatherForecastService";
import { Summary } from "./index";
import API from './../../services/api';

 const WeatherForecast: FC = (): ReactElement => {
  const [summaries, setSummaries] = useState<Summary[]>([]);

  useEffect(() => {

    async function obtenerSumario() {
      const url = `WeatherForecast`;

      const sumarioResponse = await API.get(url);

      console.log('sumarioResponse', sumarioResponse);

      if(sumarioResponse?.data && Array.isArray(sumarioResponse.data)) {
        setSummaries(sumarioResponse.data);
      }

    }

    obtenerSumario();

    // const weatherForecastService = new WeatherForecastService(
    //   "https://localhost:7252",
    //   "WeatherForecast"
    // );

    // weatherForecastService.getList().then((items) => {
    //   setSummaries(items);
    // });
  }, []);

  return (
    <>
      <ul>
        {summaries.map((item) => (
          <li key={item.summary}>{item.summary}</li>
        ))}
      </ul>
    </>
  );
};

export default WeatherForecast;
