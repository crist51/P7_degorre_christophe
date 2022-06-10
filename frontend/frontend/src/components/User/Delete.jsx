import React, { useState, useEffect } from "react";
import axios from "axios";

function Delete() {

  const onDelete = (e) => {
    const id =37
      e.preventDefault()
    axios.delete (`http://localhost:3000/api/user/${id}`,
    {
        headers: {
          "Content-Type": "application/json",
        },
    }
    )
  };

  return (
    <div>
        <button type="submit" onCanPlay={onDelete}>supprimer</button>
    </div>
  );
}

export default Delete;
