import React from 'react'
import { useNavigate } from "react-router-dom";

export default function  GoForward() {
    const navigate = useNavigate();

    return (
      <div>
          <button onClick={() => navigate(1)}>forward</button>
      </div>
    )
}
