export const Popup: React.FC<{ message: string, onClose: () => void }> = ({ message, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded shadow-lg text-center">
      <p className="text-lg mb-4">{message}</p>
    </div>
  </div>
);