import React, { useEffect, useState } from 'react';
import Weather from '../Components/Weather';
import SearchBar from '../Components/SearchBar';
import styles from './Home.module.css'

const Home = () => {
    //geo API Key
    let apiKey = 'f64fc73f1427933e28e92638870dc3bb';
    let [keyword, setKeyword] = useState('Seoul');

    //키워드를 변경하는 함수
    const setNewKeyword = (keyword) => {
        setKeyword(keyword);
    }

    return (
        <div className={styles.home}>
            <SearchBar setNewKeyword={setNewKeyword}></SearchBar>
            <Weather keyword={keyword} apiKey={apiKey}></Weather>
        </div>
    );
};

export default Home;