import React from 'react';
import { motion } from 'framer-motion';

const LoadingAnimation = () => {
    return (
        <motion.div
            className="loading-animation"
            initial={{ opacity: 0 }} // Animation d'apparition
            animate={{ opacity: 1 }} // Animation de transition vers l'état visible
            exit={{ opacity: 0 }} // Animation de disparition
        >
            <div className="loader"></div>
        </motion.div>
    );
};

export default LoadingAnimation;
