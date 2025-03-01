import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookiePopup = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        if (!Cookies.get("cookiesAccepted")) {
            setShowPopup(true);
        }
    }, []);

    const acceptCookies = () => {
        Cookies.set("cookiesAccepted", "true", { expires: 365 });
        setShowPopup(false);
    };

    if (!showPopup) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 flex justify-between">
            <span>Цей сайт використовує cookies для покращення роботи.</span>
            <button className="bg-green-500 px-4 py-2 rounded" onClick={acceptCookies}>Згоден</button>
        </div>
    );
};

export default CookiePopup;
