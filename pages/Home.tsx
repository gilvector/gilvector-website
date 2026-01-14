import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Integration from '../components/Integration';
import BentoGrid from '../components/BentoGrid';
import { Language } from '../App';

interface HomeProps {
    lang: Language;
    onOpenTerminal: () => void;
}

const Home: React.FC<HomeProps> = ({ lang, onOpenTerminal }) => {
    return (
        <>
            <Hero lang={lang} onOpenTerminal={onOpenTerminal} />
            <About lang={lang} />
            <Features lang={lang} />
            <Integration lang={lang} />
            <BentoGrid lang={lang} onOpenTerminal={onOpenTerminal} />
        </>
    );
};

export default Home;
