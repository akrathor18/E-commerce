import React, { Component } from 'react'

function Loader() {
 
    return (
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        <div className="spinner"></div>
      </div>
    )
  }

export default Loader