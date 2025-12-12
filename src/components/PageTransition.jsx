import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageTransition({ children }) {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState('fade-in');

    useEffect(() => {
        if (location.pathname !== displayLocation.pathname) {
            setTransitionStage('fade-out');
            const timer = setTimeout(() => {
                setDisplayLocation(location);
                setTransitionStage('fade-in');
            }, 200); // Match fade-out duration
            return () => clearTimeout(timer);
        }
    }, [location, displayLocation]);

    return (
        <div className={`${transitionStage === 'fade-out' ? 'animate-fade-out' : 'animate-fade-in'}`}>
            {children}
        </div>
    );
}
