import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const HomePage = () => {
  const [scooters, setScooters] = useState([]);

  useEffect(() => {
    const fetchScooters = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/scooters/all");

        if (!res.ok) {
          throw new Error("Failed to fetch scooters");
        }
        const data = await res.json();
        setScooters(data.scooters);
      } catch (error) {
        console.error(error);
      }
    };
    fetchScooters();
  }, []);

  const filteredScooters = scooters.filter((scooter) => scooter.available === true);

  return (
    <div className="flex items-center flex-col">
      <h1>**Available Scooters**</h1>
      <div>
        {filteredScooters.length === 0 ? (
          <p className="font-bold text-3xl">No available scooters...</p>
        ) : (
          <div>
            {filteredScooters.map((scooter) => (
              <div key={scooter._id}>
                <p>Model: {scooter.model}</p>
                <p>Brand: {scooter.brand}</p>
                <img className="w-40 h-40" src={scooter.img} alt={scooter.model} />
                <p>Max Speed: {scooter.maxSpeed}</p>
                <p>Range: {scooter.range}</p>
                <p>Price: {scooter.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
