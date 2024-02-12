import React, { createContext, useState } from "react";
import GoogleMap from "./Map";
import { motion } from "framer-motion";
import opencage from "opencage-api-client"; // Importez le module correctement
import Principale from "./Principale";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";

export default function FormInscription() {




    const navigate = useNavigate();
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');


    const [name, setname] = useState('');
    const [prenom, setprenom] = useState('');
    const [localisation, setlocalisation] = useState('');
    const [cin, setcin] = useState('');

    const [pseudo, setpseudo] = useState('');
    const [mot_de_passe, setmot_de_passe] = useState('');

    const handleChange1 = (event) => {
        setname(event.target.value);
    };
    const handleChange2 = (event) => {
        setprenom(event.target.value);
    };
    const handleChange3 = (event) => {
        setpseudo(event.target.value);
    };
    const handleChange4 = (event) => {
        setmot_de_passe(event.target.value);
    };
    const handleChange5 = (event) => {
        setcin(event.target.value);
    };
    const handleChange6 = (event) => {
        setlocalisation(event.target.value);
    };

    const handleChange7 = (event) => {
        setCityName(event.target.value);
    };







    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
            const response = await fetch('/api/inscription', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, prenom, localisation, cin, pseudo, mot_de_passe })
            });
            if (!response.ok) {
                throw new Error('Échec de l\'inscription');
            }

            setSuccess('Utilisateur inscrit avec succès !');

            // Réinitialiser le formulaire après la soumission
            setnom('')
            setprenom('')
            setlocalisation('')
            setcin('')
            setpseudo('')
            setmot_de_passe('')
            setError(''); // Réinitialiser les erreurs
            navigate('/utilisateur')

        } catch (error) {
            console.error('Erreur:', error);
            setError('Une erreur s\'est produite lors de l\'inscription'); // Afficher le message d'erreur
        }
    };








    const [cityName, setCityName] = useState("");
    const [afficheMap, setAfficheMap] = useState(false);
    const [coordinates, setCoordinates] = useState({});
    const [mess, setMessage] = useState("");
    const [nom, setnom] = useState("")


    const antananarivoBounds = {
        minLat: -18.9343,
        maxLat: -18.8232,
        minLng: 47.5553,
        maxLng: 47.433,
    };

    const handleChange = (event) => {
        setCityName(event.target.value);
    };

    function geocodeCity(cityName) {
        return opencage
            .geocode({
                q: cityName,
                language: "fr",
                key: process.env.REACT_APP_OPENCAGE_API_KEY,
            })
            .then((data) => {
                if (data.status.code === 200 && data.results.length > 0) {
                    const place = data.results[0];
                    const formatted = place.formatted;
                    const geometry = place.geometry;
                    const timezone = place.annotations.timezone.name;
                    return { formatted, geometry, timezone };
                } else {
                    const error = data.status.message;
                    const total_results = data.total_results;
                    return { error, total_results };
                }
            })
            .catch((error) => {
                console.log("Error", error.message);
                if (error.status.code === 402) {
                    console.log("hit free trial daily limit");
                    console.log("become a customer: https://opencagedata.com/pricing");
                }
                return { error: error.message };
            });
    }

    const handleClick = () => {
        if (cityName.trim() !== "") {
            geocodeCity(cityName)
                .then((result) => {
                    if (result.geometry) {
                        const { lat, lng } = result.geometry;
                        console.log(result.geometry);
                        if (
                            (lat <= -18.9343 && lat >= -19) ||
                            (lng <= 47.7553 && lng >= 47.4333)
                        ) {
                            console.log("success");
                            setMessage("success");
                            setCoordinates({ lat, lng });

                            setAfficheMap(true);
                        } else {
                            setMessage("error");
                            console.log("error");
                            setAfficheMap(false);
                        }
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    return (
        <>
            <Header />
            <section className="py-5">
                <div className="container py-5">
                    <div className="row d-flex justify-content-end">
                        <div className="col-xl-7 corp">
                            <div className="card">
                                <div className="card-body text-center d-flex flex-column align-items-center">
                                    <div className="bs-icon-xl bs-icon-circle bs-icon-primary shadow bs-icon my-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                            className="bi bi-person-plus"
                                        >
                                            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"></path>
                                            <path
                                                fill-rule="evenodd"
                                                d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"
                                            ></path>
                                        </svg>
                                    </div>
                                    <p className="fw-bold text-success mb-2">S'inscrire</p>
                                    {error && <div style={{ color: 'red' }}>{error}</div>}
                                    {success && <div style={{ color: 'green' }}>{success}</div>}
                                    <form className="postins" data-bs-theme="light" onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <div className="row">
                                                <div className="col">
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        name="nom"
                                                        placeholder="nom"
                                                        value={name}
                                                        onChange={handleChange1}

                                                    />
                                                </div>
                                                <div className="col">
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        name="prenom"
                                                        placeholder="prenom"
                                                        value={prenom}
                                                        onChange={handleChange2}

                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                className="form-control"
                                                type="pseudo"
                                                name="pseudo"
                                                placeholder="pseudo"
                                                value={pseudo}
                                                onChange={handleChange3}

                                            />
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                className="form-control"
                                                type="password"
                                                name="mot_de_passe"
                                                placeholder="mots de passe "
                                                value={mot_de_passe}
                                                onChange={handleChange4}

                                            />
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="cin"
                                                placeholder="cin"
                                                value={cin}
                                                onChange={handleChange5}

                                            />
                                        </div>
                                        <div className="mb-3">
                                            <div className="col text-center dv1">
                                                <p className="text-center pD ">Adresse/ Localisation</p>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        name="localisation"
                                                        placeholder="votre localisation"
                                                        value={localisation}
                                                        onChange={handleChange6}
                                                    />
                                                </div>
                                                <div className="col">
                                                    <motion.button
                                                        onClick={handleClick}
                                                        layout
                                                        className="btn btn-primary child"
                                                        type="button"
                                                        whileHover={{ scale: 1.2 }}
                                                        onHoverStart={(e) => { }}
                                                        onHoverEnd={(e) => { }}
                                                    >
                                                        +
                                                    </motion.button>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-muted">
                                            <input type="checkbox" className="check" />
                                            Confirmer le mots de passe
                                        </p>
                                        <div className="mb-3">
                                            <button type="submit"
                                                className="btn btn-primary shadow d-block w-100 btnCon"

                                            >
                                                S'inscrire
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-lg-6 col-xl-4"
                            style={{ marginTop: "200px" }}
                        >
                            <div className="col-md-6 col-lg-6 col-xl-4">
                                <div hidden>
                                    {afficheMap && (
                                        <GoogleMap
                                            initialLongitude={coordinates.lng}
                                            initialLatitude={coordinates.lat}
                                        />
                                    )}
                                </div>
                                {/* Afficher la carte uniquement si afficheMap est vrai */}
                                {afficheMap && (
                                    <GoogleMap
                                        initialLongitude={coordinates.lng}
                                        initialLatitude={coordinates.lat}
                                    />
                                )}
                                {/* Afficher l'image par défaut si afficheMap est faux et message est "error" */}
                                {!afficheMap && mess === "error" && (
                                    <img
                                        src={require("../assets/images/default.png")}
                                        alt="Image par défaut" style={{ width: '500px', height: '500px' }}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
