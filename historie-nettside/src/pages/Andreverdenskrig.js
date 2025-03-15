import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AndreVerdenskrig = () => {
    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <h1 className="text-center my-4">Andre verdenskrig</h1>
                <div className="content">
                    <p>
                        Andre verdenskrig var en global konflikt som varte fra 1939 til 1945. Den involverte de fleste av verdens nasjoner og ble preget av massive militære operasjoner og ødeleggelser.
                    </p>

                    <h2>Viktige hendelser og trender</h2>
                    <div className="row">
                        <div className="col-md-6 col-lg-3 mb-4">
                            <Link to="/atombombene" className="card text-decoration-none">
                                <div className="card-body">
                                    <h5 className="card-title">Atombombene</h5>
                                    <p className="card-text">Bruken av atomvåpen i Hiroshima og Nagasaki.</p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                            <Link to="/holocaust" className="card text-decoration-none">
                                <div className="card-body">
                                    <h5 className="card-title">Holocaust</h5>
                                    <p className="card-text">Den systematiske utryddelsen av jøder og andre grupper.</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <h2>Mer informasjon</h2>
                    <p>
                        Andre verdenskrig førte til enorme menneskelige lidelser og endret verdenspolitikken for alltid.
                    </p>
                </div>
                <div className="navigation">
                    <Link to="/" className="btn btn-primary">Home</Link>
                    <Link to="/atombombene" className="btn btn-secondary">Next</Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AndreVerdenskrig;