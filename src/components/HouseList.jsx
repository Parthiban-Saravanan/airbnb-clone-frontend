import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';
import HouseItem from './HouseItem';

const HouseList = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await axiosInstance.get('/api/houses');
        setHouses(response.data);
      } catch (error) {
        console.error('Error fetching houses:', error);
      }
    };
    fetchHouses();
  }, []);

  const renderHousesByType = (type) => {
    const filteredHouses = houses.filter(house => house.type === type);
    return (
      <div className="house-category mb-5">
        <h2 className="text-center text-secondary">{type}</h2>
        <div className="row">
          {filteredHouses.map(house => (
            <HouseItem key={house._id} house={house} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderHousesByType('Beach House')}
      {renderHousesByType('Boat House')}
      {renderHousesByType('Farm House')}
    </div>
  );
};

export default HouseList;
