import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import ScooterCard from "../components/ScooterCard";

const HomePage = () => {
  const [scooters, setScooters] = useState([]);
  // const [loading, setLoading] = useState(true);

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
      /* finally{
        setLoading(false)
      } */
    };
    fetchScooters();
  }, []);

  const filteredScooters = scooters.filter(
    (scooter) => scooter.available === true
  );

  // const sortedByPrice = scooters.sort((a,b)=> a.pricePerHour - b.pricePerHour)

  /* const scooterWithHighestAverage = scooters
  .sort((a, b) => (b.maxSpeed + b.range) - (a.maxSpeed + a.range))[0]; */

  return (
    <div className="flex items-center flex-col">
      {/* {!loading && scooters.length === 0 && (
        <p className="text-center text-gray-500">No scooters available.</p>
      )} */}

      {/* {!loading && courses.length > 0 && ( */}
      <>
        <h1>**Available Scooters**</h1>
        <div>
          {filteredScooters.length === 0 ? (
            <p className="font-bold text-3xl">No available scooters...</p>
          ) : (
            <div>
              {filteredScooters.map((scooter) => (
                /* Használd fel a Card componensedet! */
                <div key={scooter._id}>
                  <p>Model: {scooter.model}</p>
                  <p>Brand: {scooter.brand}</p>
                  <img
                    className="w-40 h-40"
                    src={scooter.img}
                    alt={scooter.model}
                  />
                  <p>Max Speed: {scooter.maxSpeed}</p>
                  <p>Range: {scooter.range}</p>
                  <p>Price: {scooter.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* <h1>**Sorted by Price**</h1>
      <div>
        {sortedByPrice.map((scooter) => (
          <ScooterCard scooter={scooter} />
        ))}
      </div>

      <h1>**Scooter with highest average**</h1>
      <div>
       <ScooterCard scooter={scooterWithHighestAverage}/>
      </div> */}
      </>
      {/* )} */}
    </div>
  );
};

export default HomePage;
