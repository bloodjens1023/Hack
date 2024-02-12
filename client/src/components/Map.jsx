import React, { useState, useEffect } from 'react';

const GoogleMap = ({ initialLatitude, initialLongitude }) => {
    const [latitude, setLatitude] = useState(initialLatitude);
    const [longitude, setLongitude] = useState(initialLongitude);

    useEffect(() => {
        // Mettre à jour l'URL de l'iframe lorsque les coordonnées changent
        const updateMapUrl = () => {
            const queryString = `${latitude},${longitude}`;
            const iframe = document.getElementById('google-map');
            if (iframe) {
                iframe.src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1588611.9469440584!2d${longitude}!3d${latitude}&q=${queryString}`;
            }
        };

        updateMapUrl();
    }, [latitude, longitude]);

    // Mettre à jour les coordonnées lorsque les props changent
    useEffect(() => {
        setLatitude(initialLatitude);
        setLongitude(initialLongitude);
    }, [initialLatitude, initialLongitude]);

    return (
        <div>
            <iframe
                id="google-map"
                title="Google Map"
                width="330"
                height="200"
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8836.76232126!2d${initialLongitude}!3d${initialLatitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2smg!4v1707619932376!5m2!1sfr!2smg`}
            ></iframe>

        </div >
    );
};

export default GoogleMap;
