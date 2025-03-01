import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom'; // Імпортуйте Link
import privacyPolicy from '../PRIVACY_POLICY.md';

const PrivacyPolicy = () => {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch(privacyPolicy)
            .then((response) => response.text())
            .then((text) => setContent(text));
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Політика конфіденційності</h2>
            <ReactMarkdown>{content}</ReactMarkdown>
            <Link to="/" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
                На головну
            </Link>
        </div>
    );
};

export default PrivacyPolicy;