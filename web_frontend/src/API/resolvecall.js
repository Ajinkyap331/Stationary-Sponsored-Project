import { Store } from "react-notifications-component";

export const DisplayNotification = (message, counter) => {
    if (message.status === 200)
        Store.addNotification({
            title: `${message.data}`,
            message: `Updated ${counter}`,
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true,
            },
        });
    else if (message.status === 204)
        Store.addNotification({
            title: "Invalid Barcode",
            message: "No such barcode is present in Database",
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true,
            },
        });
};
