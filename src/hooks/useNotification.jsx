import { Bounce, toast } from "react-toastify";

const useNotification = () => {
    return (notify, type) => {
        toast(notify, {
            position: "top-right",
            type: type,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };
};

export default useNotification;
