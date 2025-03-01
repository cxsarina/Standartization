import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/**
 * Точка входу додатка.
 * Використовує `ReactDOM.createRoot` для рендерингу компонента `App` в елемент з id 'root'.
 * Обгортає додаток у `React.StrictMode` для перевірки потенційних проблем у розробці.
 *
 * @function
 * @example
 * root.render(
 *   <React.StrictMode>
 *     <App />
 *   </React.StrictMode>
 * )
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
