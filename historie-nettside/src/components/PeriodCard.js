import React from 'react';
import { Link } from 'react-router-dom';

function PeriodCard({ period }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{period.name}</h5>
        <p className="card-text">{period.shortDescription}</p>
        <Link to={`/period/${period.id}`} className="btn btn-primary">Les mer</Link>
      </div>
    </div>
  );
}

export default PeriodCard;