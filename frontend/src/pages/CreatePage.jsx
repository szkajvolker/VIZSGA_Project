import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CreatePage = () => {
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [img, setImg] = useState("");
  const [maxSpeed, setMaxSpeed] = useState(0);
  const [range, setRange] = useState(0);
  const [pricePerHour, setPricePerHour] = useState(0);
  const [isElectric, setIsElectric] = useState(0); // Boolean
  const [isAvailable, setIsAvailable] = useState(0); // Boolean
  /* const [loading, setLoading] = useState(false); */

  const navigate = useNavigate();

  const handleCreatNewScooter = async (e) => {
    e.preventDefault();
    const data = {
      model,
      brand,
      img,
      maxSpeed,
      range,
      pricePerHour,
      isElectric,
      isAvailable, // available : isAvailable
    };
    try {
      setLoading(true);
      const res = await fetch("http://localhost:8080/api/scooters/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw new Error("Failed to create new scooter");
      }
      toast.success("Scooter succesfully created");
    } catch (error) {
      alert("Error happened please check console");
      console.error(error.message);
    } finally {
      navigate("/home");
      /* setLoading(false); */
    }
  };
  return (
    <div className="flex flex-col items-center mt-20">
      <h1>CreatePage</h1>
      <div className="flex flex-col p-2">
        <form className="border-2 p-5" onSubmit={handleCreatNewScooter}>
          <div className="border-2 m-2">
            <label htmlFor="model">Model: </label>
            <input
              type="text"
              value={model}
              id="model"
              onChange={(e) => setModel(e.target.value)}
            />
          </div>
          <div className="border-2 m-2">
            <label htmlFor="brand">Brand: </label>
            <input
              type="text"
              value={brand}
              id="brand"
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className="border-2 m-2">
            <label htmlFor="img">Picture: </label>
            <input
              type="text"
              value={img}
              id="img"
              onChange={(e) => setImg(e.target.value)}
            />
          </div>
          <div className="border-2 m-2">
            <label htmlFor="maxSpeed">MaxSpeed: </label>
            <input
              type="text" // number
              value={maxSpeed}
              id="maxSpeed"
              onChange={(e) => setMaxSpeed(e.target.value)}
            />
          </div>
          <div className="border-2 m-2">
            <label htmlFor="range">Range: </label>
            <input
              type="text"
              value={range}
              id="range"
              onChange={(e) => setRange(e.target.value)}
            />
          </div>
          <div className="border-2 m-2">
            <label htmlFor="pricePerHour">Price/Hour: </label>
            <input
              type="text"
              value={pricePerHour}
              id="pricePerHour"
              onChange={(e) => setPricePerHour(e.target.value)}
            />
          </div>
          <div className="border-2 m-2">
            <label htmlFor="isElectric">Electric: </label>
            <input
              type="checkbox"
              value={isElectric} // checked={isElectric}
              id="isElectric"
              onChange={(e) => setIsElectric(e.target.value)}
              /* onChange={(e) => setIsElectric(e.target.checked)} */
            />
          </div>
          <div className="border-2 m-2">
            <label htmlFor="isAvailable">Available: </label>
            <input
              type="checkbox"
              value={isAvailable} // checked={isAvailable}
              id="isAvailable"
              onChange={(e) => setIsAvailable(e.target.value)}
              /* onChange={(e) => setIsAvailable(e.target.checked)} */
            />
          </div>
          <div className="flex justify-center">
            <button
              /* disabled={loading} */
              className="border-2 border-grey-300 w-fit justify-self-center cursor-pointer hover:bg-blue-400 rounded-lg"
              type="submit"
            >
              Create new Scooter
              {/* {loading? "Loading..." : "Create new Scooter"} */}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
