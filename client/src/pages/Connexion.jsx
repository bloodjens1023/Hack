import React, { useState } from 'react';
import Header from '../components/Header';
import FormConnex from '../components/FormConnex';
import GoogleMap from '../components/Map';
import FormInscription from '../components/FormInscription';
import WeatherComponent from '../components/WeatherComponents';

function LoginPage() {
    const newLatitude = 40.7128; // Latitude de New York
    const newLongitude = -74.0060; // Longitude de New York

    return (
        <div>
            <WeatherComponent />
            {/* <Header />
            <FormConnex />
            <FormInscription /> */}
            {/* <GoogleMap initialLatitude={-18.9191141} initialLongitude={47.5243646} />

             */}

        </div>
    );
}

export default LoginPage;
