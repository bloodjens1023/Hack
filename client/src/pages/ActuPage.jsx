import ActuPub from "../components/actupub";
import Navi from "../components/navi";
import React, { useState, useEffect } from "react";
import LoadingAnimation from "../components/LoadinAnimation";
import axios from 'axios';
export default function ActuPage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulation d'un délai de chargement pour tester l'animation
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        // Nettoyage du timer lorsque le composant est démonté ou lorsque isLoading devient false
        return () => clearTimeout(timer);
    }, []);

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/selection_publication');
                setData(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };

        fetchData();
    }, []);
    console.log(data);
    return (
        <div>
            {isLoading ? (
                <LoadingAnimation />
            ) : (
                <>
                    <Navi />
                    {data.map((item) => (
                        <ActuPub name={item.titre_pub} description={item.description} lieu={item.lieu} pseudo={item.pseudo} />
                    ))}

                </>
            )}
        </div>
    )

}