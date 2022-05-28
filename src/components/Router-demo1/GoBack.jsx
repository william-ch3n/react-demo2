import React from 'react'
import { useNavigate } from "react-router-dom";

export default function GoBack() {

    const navigate = useNavigate();

  return (
    <div>
        <button onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}
