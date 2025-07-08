import React, { useEffect, useState } from "react";
import ScooterCard from "../components/ScooterCard";
import { useParams } from "react-router-dom";

const ScooterPage = () => {
  const [scooter, setScooter] = useState({});
  /* const [loading, setLoading] = useState(true); */
  const { id } = useParams();

  useEffect(() => {
    const fetchScooters = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/scooters/${id}`);

        /* if (!res.ok) throw new Error(`Error fetching scooter with id: ${id}`); */

        const data = await res.json();
        setScooter(data.scooter);
      } catch (error) {
        console.error("error", error);
      }
      /* finally {
        setLoading(false);
      } */
    };
    fetchScooters();
  }, [id]);

  // if (loading) return <div>Loading...</div>;
  // if (!scooter) return <div>Destination not found</div>;

  return (
    <div className="flex flex-row mt-25">
      <h2>Scooter</h2>
      {/* Mivel csak egy scootert jelenítesz meg nem kell listába tenned. */}
      <ul>
        <ScooterCard key={scooter._id} scooter={scooter} />
      </ul>
    </div>
  );
};

export default ScooterPage;
