import React, { useState, useEffect } from 'react';
import LoadingAnimation from '../components/LoadinAnimation';
import Principale from '../components/Principale';
import Navi from '../components/navi';
export default function Utilisateur() {
    const UtilisateurPage = (props) => {



    }
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulation d'un délai de chargement pour tester l'animation
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        // Nettoyage du timer lorsque le composant est démonté ou lorsque isLoading devient false
        return () => clearTimeout(timer);
    }, []);
    return (
        <div>
            {isLoading ? (
                <LoadingAnimation />
            ) : (

                <>
                    <Navi />
                    <Principale />
                </>
            )}
        </div>
    )
}