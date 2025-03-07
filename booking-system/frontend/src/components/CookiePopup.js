import CookieConsent from "react-cookie-consent";

/**
 * Компонент для відображення попапу для погодження з використанням файлів cookie.
 * Використовує бібліотеку `react-cookie-consent` для показу попапу з можливістю прийняття або відхилення файлів cookie.
 *
 * @component
 * @example
 * return (
 *   <CookiePopup />
 * )
 */
const CookiePopup = () => {
    return (
        <CookieConsent
            location="bottom"
            buttonText="Прийняти"
            declineButtonText="Відхилити"
            enableDeclineButton
            cookieName="userConsent"
            expires={150}
            style={{ background: "#2B373B" }}
            buttonStyle={{ background: "#4CAF50", color: "#fff", fontSize: "14px" }}
            declineButtonStyle={{ background: "#F44336", color: "#fff", fontSize: "14px" }}
        >
            Ми використовуємо файли cookie для покращення вашого досвіду. Продовжуючи використовувати сайт, ви погоджуєтесь з нашою{" "}
            <a href="/privacy-policy" style={{ color: "#A8E6CF" }}>Політикою конфіденційності</a>.
        </CookieConsent>
    );
};

export default CookiePopup;
