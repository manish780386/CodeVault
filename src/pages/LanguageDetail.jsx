import React from 'react';
import { useParams } from 'react-router-dom';

export default function LanguageDetail() {
  const { name } = useParams(); 
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
        {name.toUpperCase()} Language
      </h1>

      <p style={{ fontSize: "18px" }}>
        This is the detail page for <b>{name}</b>.  
        
      </p>
    </div>
  );
}
