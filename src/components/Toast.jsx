import { useEffect } from "react";

const Toast = ({ message, show, setShow }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => setShow(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [show, setShow]);

  if (!show) return null;

  return (
    <div className="fixed top-20 right-5 z-[100] bg-green-500 text-white px-4 py-2 rounded shadow-lg">
      {message}
    </div>
  );
};

export default Toast;