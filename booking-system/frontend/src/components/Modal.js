const Modal = ({ title, content, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-5 rounded">
            <h2 className="text-xl font-bold">{title}</h2>
            <p>{content}</p>
            <button className="mt-4 bg-red-500 text-white px-4 py-2" onClick={onClose}>
                Закрити
            </button>
        </div>
    </div>
);

export default Modal;
