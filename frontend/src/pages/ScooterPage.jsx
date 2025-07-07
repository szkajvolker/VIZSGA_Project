import React, { useEffect, useState } from "react";
import ScooterCard from "../components/ScooterCard";
import { useParams } from "react-router-dom";

const ScooterPage = () => {
  const [scooter, setScooter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchScooters = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/scooters/${id}`);
        const data = await res.json();
        setScooter(data.scooter);
      } catch (error) {
        console.error("error", error);
      }
    };
    fetchScooters();
  }, [id]);

  return (
    <div className="flex flex-row mt-25">
      <h2>Scooter</h2>
      <ul>
        <ScooterCard key={scooter._id} scooter={scooter} />
      </ul>
    </div>
  );
};

export default ScooterPage;
