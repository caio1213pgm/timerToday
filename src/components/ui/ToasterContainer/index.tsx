import { Bounce, ToastContainer } from "react-toastify";

type ToasterContainerProps = {
  children: React.ReactNode;
};

export default function ToasterContainer({ children }: ToasterContainerProps) {
  return (
    <>
      {children}
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}
