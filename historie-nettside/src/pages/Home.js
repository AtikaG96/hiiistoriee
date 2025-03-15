import React from 'react';
import periods from '../data';
import PeriodCard from '../components/PeriodCard';

function Home() {
  return (
    <div className="container">
      <h1 className="text-center my-4">Historiske Perioder</h1>
      <div className="row">
        {periods.map(period => (
          <div key={period.id} className="col-md-4">
            <PeriodCard period={period} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;