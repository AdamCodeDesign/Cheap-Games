import React, { useState } from 'react';

const ArraySearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [result, setResult] = useState([]);
  const dataArray = ['apple', 'banana', 'orange', 'grapes', 'pineapple', 'watermelon'];

  const handleSearch = (query) => {
    const filteredArray = dataArray.filter(item => item.toLowerCase().includes(query.toLowerCase()));
    setResult(filteredArray);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          handleSearch(e.target.value);
        }}
      />
      <ul>
        {result.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="lupa"></div>
    </div>
  );
};

export default ArraySearch;

