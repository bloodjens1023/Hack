import logo from './img/products/image_conn.webp';
import { motion } from "framer-motion"
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
export default function FormConnex() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        pseudo: '',
        mot_de_passe: ''
    });
    const [error, setError] = useState(''); // Déclaration de l'état pour gérer les erreurs
    const [success, setSuccess] = useState('');
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/connection', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Erreur lors de la connexion');
            }
            setSuccess('Utilisateur connecté avec succès !');
            navigate('/utilisateur')
            // Réinitialiser le formulaire après la soumission
            setFormData({
                pseudo: '',
                mot_de_passe: ''
            });
            setError(''); // Réinitialiser les erreurs après une connexion réussie
        } catch (error) {
            console.error('Erreur:', error);
            setError('Une erreur s\'est produite lors de la connexion'); // Mettre à jour l'état d'erreur
        }
    };


    return (
        <section class="py-5">
            <div class="container py-5">
                <div class="row d-flex justify-content-end">
                    <motion.div animate={{
                        scale: [0.8, 0.8, 0.8, 0.8, 0.8],
                        rotate: [0, 0, 180, 180, 0],
                        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                    }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 1
                        }} class="col-xl-5"><img class="pulse animated infinite anime" src={logo} /></motion.div>
                    <div class="col-md-6 col-lg-6 col-xl-6">
                        <div class="card">
                            <div class="card-body text-center d-flex flex-column align-items-center" >
                                <div class="bs-icon-xl bs-icon-circle bs-icon-primary shadow bs-icon my-4"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-person">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"></path>
                                </svg></div>
                                <p class="fw-bold text-success mb-2">Se Connecter</p>
                                {error && <div style={{ color: 'red' }}>{error}</div>}
                                {success && <div style={{ color: 'green' }}>{success}</div>}
                                <form method="post" data-bs-theme="light" className="frm" onSubmit={handleSubmit}>
                                    <div class="mb-3"><input class="form-control" placeholder="pseudo" type="text"
                                        name="pseudo"
                                        value={formData.pseudo}
                                        onChange={handleChange} /></div>
                                    <div class="mb-3"><input class="form-control" type="password" name="mot_de_passe" placeholder="mots de passe " value={formData.mot_de_passe}
                                        onChange={handleChange} /></div>
                                    <div class="mb-3"><motion.button whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }} class="btn btn-primary shadow d-block w-100 conn" type="submit" >Connexion</motion.button></div>
                                </form>
                                <p class="text-muted">Mots de passe oublier?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}