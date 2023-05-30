import React, { useEffect, useState } from 'react';
import styles from './Weather.module.css'

const Weather = ({keyword,apiKey}) => {
    let [weatherInfo, setWeatherInfo] = useState({});
    let lat=0, lon=0;
    let weather={};

    const geocodingAPI실행 = async (url) => {
        const response = await fetch(url);
        const json = await response.json();
        if(json.cod!==undefined){ //API 응답 에러
            console.log(json.cod);
        } else{
            for(let i=0; i<json.length; i++) {
                if(json[i].country==='KR'){
                    lat=json[i].lat;
                    lon=json[i].lon;
                    break;
                }
            }
            if(lat===0 && lon===0){
                lat=json[0].lat;
                lon=json[0].lon;
            }
        }
    }
    const weatherAPI실행 = async (url) => {
        let response = await fetch(url);
        let json = await response.json();
        weather = json.weather[0];
    }
    const API실행 = async (keyword) => {
        const geocodingAPI = `http://api.openweathermap.org/geo/1.0/direct?q=${keyword}&limit=5&appid=${apiKey}`;
        await geocodingAPI실행(geocodingAPI);
        const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        await weatherAPI실행(weatherAPI);
        setWeatherInfo({
            lat:`${lat}`,
            lon:`${lon}`,
            ...weather
        });
    }
    
    useEffect(()=>{
        API실행(keyword);
    },[keyword])

    return (
        <main className={styles.main}>
            <section>
                {keyword}의 날씨는....<br/>
                lat:{weatherInfo.lat}<br/>
                lon:{weatherInfo.lon}<br/>
                weather:{weatherInfo.main}<br/>
                {
                    weatherInfo.main==='Clear'?
                    <img className={styles.weatherImg} src={require('../assets/images/sunny.png')}/>:
                    weatherInfo.main==='Clouds'?
                    <img className={styles.weatherImg} src={require('../assets/images/cloudy.png')}/>:
                    weatherInfo.main==='Mist'?
                    <img className={styles.weatherImg} src={require('../assets/images/mist.png')}/>:
                    weatherInfo.main==='Rain'?
                    <img className={styles.weatherImg} src={require('../assets/images/rain.png')}/>:
                    null
                }
            </section>
        </main>
    );
};

export default Weather;