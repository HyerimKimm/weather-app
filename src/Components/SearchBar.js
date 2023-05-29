import React from 'react';

const SearchBar = ({setNewKeyword}) => {
    const options = ['Seoul','Daegu','Pusan','Incheon','Gwangju','Daejeon','Ulsan','Sejong', 'Paris', 'New York', 'Tokyo'];

    function handleClick (e) {
        setNewKeyword(e.target.value);
    }

    return (
        <select onChange={handleClick}>
            {
                options.map((e,idx)=><option key={idx} value={e}>{e}</option>)
            }
        </select>
    );
};

export default SearchBar;