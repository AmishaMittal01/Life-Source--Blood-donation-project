import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

export default function CampDetails() {
  const { id } = useParams();
  const [camp, setCamp] = useState(null);

  useEffect(() => {
    API.get(`/api/camps/${id}`)
      .then((res) => setCamp(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const register = async () => {
    try {
      const donor = JSON.parse(localStorage.getItem("user"));
      await API.post("/api/camp_registrations", {
        donor_id: donor.donor_id,
        camp_id: id
      });
      alert("Successfully registered!");
    } catch (err) {
      alert("Registration failed");
    }
  };

  if (!camp) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{camp.camp_name}</h2>
      <p>Date: {camp.date}</p>
      <p>Location: {camp.location}</p>
      <p>Capacity: {camp.capacity}</p>
      <button onClick={register}>Register for this Camp</button>
    </div>
  );
}
