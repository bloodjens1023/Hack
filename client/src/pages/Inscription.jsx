import React, { useState } from 'react';

function SignUpPage() {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        localisation: '',
        cin: '',
        lieu_concerne: '',
        pseudo: '',
        mot_de_passe: ''
    });
    const [error, setError] = useState('');

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
            const response = await fetch('/api/inscription', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Échec de l\'inscription');
            }
            console.log('Utilisateur inscrit avec succès !');
            // Réinitialiser le formulaire après la soumission
            setFormData({
                nom: '',
                prenom: '',
                localisation: '',
                cin: '',
                lieu_concerne: '',
                pseudo: '',
                mot_de_passe: ''
            });
            setError(''); // Réinitialiser les erreurs
        } catch (error) {
            console.error('Erreur:', error);
            setError('Une erreur s\'est produite lors de l\'inscription'); // Afficher le message d'erreur
        }
    };


    return (
        <div>
            <h2>Inscription</h2>
            <form onSubmit={handleSubmit}>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <label>
                    Nom:
                    <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Prénom:
                    <input
                        type="text"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Localisation:
                    <input
                        type="text"
                        name="localisation"
                        value={formData.localisation}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Numéro de CIN:
                    <input
                        type="text"
                        name="cin"
                        value={formData.cin}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Lieu concerné:
                    <input
                        type="text"
                        name="lieu_concerne"
                        value={formData.lieu_concerne}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Pseudonyme:
                    <input
                        type="text"
                        name="pseudo"
                        value={formData.pseudo}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Mot de passe:
                    <input
                        type="password"
                        name="mot_de_passe"
                        value={formData.mot_de_passe}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    );

}
