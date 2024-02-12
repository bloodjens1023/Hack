import Navi from "../components/navi";
import React, { useState, useEffect } from "react";
import LoadingAnimation from "../components/LoadinAnimation";
import Profil from "../components/profil";
export default function PageProfil() {
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
                    <Profil />
                </>
            )}
        </div>
    )
}