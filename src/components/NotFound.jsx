import { Header } from "./Header";
import styles from "./NotFound.module.css";

export function NotFound() {


    return (
        <div>
            <Header />

            <div className={styles.errorBox}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width={250} fill={"#35377b"}>
                    <path
                        d="M313.3 243.4h93.3v140h-93.3v-140zm93.3 373.3h186.7V710H406.6v-93.3zM313.3 710h93.3v93.3h-93.3V710zm280.1 0h93.3v93.3h-93.3V710zm210-513.3v-93.3H710v93.3h93.4V290H616.7V103.4H710V10H103.3v980h793.4V196.7h-93.3zm0 700H196.6V103.4h326.7v280h280l.1 513.3z" />
                </svg>
                <h1> Error 404: solicitud no encontrada. </h1>
            </div>

        </div>
    );
}