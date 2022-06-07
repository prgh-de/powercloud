import {useState} from 'react';
import styles from "./ContactForm.module.css";
import { useNavigate } from "react-router-dom";


export default function ContactForm({sendDataOnSubmit}) {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [company, setCompany] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [phone, setPhone] = useState();
    const [callback, setCallback] = useState(" ");
    const [newsletter, setNewsletter] = useState(false);
    const [privacy, setPrivacy] = useState(false);
    const navigate = useNavigate();


    function onFirstNameChange(event) {
        setFirstName(event.target.value);
    }
    function onFirstNameBlur(event) {
        if (event.target.value === "") {
            document.getElementsByClassName( "message" )[0].innerHTML = "Bitte füllen Sie dieses Pflichtfeld aus.";
            document.getElementsByClassName("message")[0].style.color="red";}
        else{
            document.getElementsByClassName( "message" )[0].innerHTML = "";
        }
    }
    function onLastNameChange(event) {
        setLastName(event.target.value);
    }
    function onLastNameBlur(event) {
        if (event.target.value === "") {
            document.getElementsByClassName("message")[1].innerHTML = "Bitte füllen Sie dieses Pflichtfeld aus.";
            document.getElementsByClassName("message")[1].style.color = "red";
        } else {
            document.getElementsByClassName("message")[1].innerHTML = "";
        }
    }
    function onCompanyChange(event) {
        setCompany(event.target.value);
    }
    function onCompanyBlur(event) {
        if (event.target.value === "") {
            document.getElementsByClassName("message")[2].innerHTML = "Bitte füllen Sie dieses Pflichtfeld aus.";
            document.getElementsByClassName("message")[2].style.color = "red";
        } else {
            document.getElementsByClassName("message")[2].innerHTML = "";
        }
    }
    function onEmailChange(event) {
        setEmail(event.target.value);
    }
    function onEmailBlur(event) {
        if (event.target.value === "") {
            document.getElementsByClassName("message")[3].innerHTML = "Bitte füllen Sie dieses Pflichtfeld aus.";
            document.getElementsByClassName("message")[3].style.color = "red";
        } else {
            document.getElementsByClassName("message")[3].innerHTML = "";
        }
    }
    function onMessageChange(event) {
        setMessage(event.target.value);
    }
    function onMessageBlur(event) {
        if (event.target.value === "") {
            document.getElementsByClassName("message")[4].innerHTML = "Bitte füllen Sie dieses Pflichtfeld aus.";
            document.getElementsByClassName("message")[4].style.color = "red";
        } else {
            document.getElementsByClassName("message")[4].innerHTML = "";
        }
    }
    function onPhoneChange(event) {
        setPhone(event.target.value);
    }
    function onCallbackChange(event) {
        setCallback(event.target.value);
    }
    function onNewsletterChange(event) {
        setNewsletter(event.target.checked);
    }
    function onPrivacyChange(event) {
        setPrivacy(event.target.checked);
        if (!event.target.checked) {
            document.getElementsByClassName("message")[5].innerHTML = "Bitte füllen Sie dieses Pflichtfeld aus.";
            document.getElementsByClassName("message")[5].style.color = "red";
        } else {
            document.getElementsByClassName("message")[5].innerHTML = "";
        }
    }
    function onSubmit(event) {
        event.preventDefault();

        sendDataOnSubmit({
            firstname: firstName,
            lastname: lastName,
            company: company,
            email: email,
            telephonenumber: phone,
            message: message,
            callbackperiod: callback,
            newsletter: newsletter,
            informationprivacy: privacy
        });
        navigate("/datasent");
    }

    return (
        <div className={styles.ContactForm}>
            <div className={styles.container}>
                <form name="contactForm" onSubmit={onSubmit}>
                    <div className={styles.userdata}>
                        <div className={styles.name}>
                            <div className={styles.fname}>
                                <label htmlFor="firstName">Vorname<span style={{color: "red"}}>*</span></label>
                                <input
                                    name="firstName"
                                    type="text"
                                    value={firstName}
                                    onChange={onFirstNameChange}
                                    onBlur={onFirstNameBlur}
                                    required
                                />
                                <p className="message"></p>
                            </div>
                            <div className={styles.lname}>
                                <label htmlFor="lastName">Nachname<span style={{color: "red"}}>*</span></label>
                                <input
                                    name="lastName"
                                    type="text"
                                    value={lastName}
                                    onChange={onLastNameChange}
                                    onBlur={onLastNameBlur}
                                    className={styles.lname}
                                    required
                                />
                                <p className="message"></p>
                            </div>
                        </div>
                        <label htmlFor="company">Unternehmen<span style={{color: "red"}}>*</span></label>
                        <input
                            name="company"
                            type="text"
                            value={company}
                            onChange={onCompanyChange}
                            onBlur={onCompanyBlur}
                            required
                        />
                        <p className="message"></p>
                        <label htmlFor="email">E-Mail<span style={{color: "red"}}>*</span></label>
                        <input
                            name="email"
                            type="email"
                            value={email}
                            onChange={onEmailChange}
                            onBlur={onEmailBlur}
                            required
                        />
                        <p className="message"></p>
                        <label htmlFor="message">Nachricht<span style={{color: "red"}}>*</span></label>
                        <textarea
                            name="message"
                            value={message}
                            onChange={onMessageChange}
                            onBlur={onMessageBlur}
                            className={styles.message}
                            required
                        />
                        <p className="message"></p>
                        <div className={styles.callback}>
                            <div className={styles.phone}>
                                <label htmlFor="phone">Telefonnummer</label>
                                <input
                                    name="phone"
                                    type="text"
                                    value={phone}
                                    onChange={onPhoneChange}
                                />
                            </div>
                            <div className={styles.cbtime}>
                                <label htmlFor="callback">Rückruf Zeitraum</label>
                                <select name="callback" value={callback} onChange={onCallbackChange}
                                        className={styles.dropdown}>
                                    <option hidden=" ">Bitte auswählen</option>
                                    <option value="09-11">09:00 - 11:00</option>
                                    <option value="11-13">11:00 - 13:00</option>
                                    <option value="13-15">13:00 - 15:00</option>
                                    <option value="15-17">15:00 - 17:00</option>
                                    <option value="17-18">17:00 - 18:00</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <p className={styles.legalconsent}>
                        powercloud verpflichtet sich, deine Privatsphäre zu schützen und zu respektieren. Wir verwenden
                        deine persönlichen Daten nur zur Bereitstellung der von dir angeforderten Produkte und
                        Dienstleistungen.
                        Von Zeit zu Zeit möchten wir dich über unsere Produkte und Dienstleistungen sowie andere
                        Inhalte, die für
                        dich von Interesse sein könnten, informieren:
                    </p>
                    <p className={styles.newsletter}>
                        <input name="newsletter" type="checkbox" value={newsletter} onChange={onNewsletterChange}/>
                        <label htmlFor="newsletter">Ja, ich möchte den <strong>Newsletter power.news</strong> abonnieren
                            und Informationen und
                            Benachrichtigungen von powercloud erhalten.</label>
                    </p>
                    <div className={styles.privacy}>
                        <input name="privacy" type="checkbox" value={privacy} onChange={onPrivacyChange} required/>
                        <label htmlFor="privacy">Ich stimme der Speicherung und Verarbeitung meiner persönlichen Daten
                            durch powercloud
                            zu.<span style={{color: "red"}}>*</span></label>
                        <p className="message"></p>
                    </div>
                    <p className={styles.privacyagree}>
                        Die <a href="https://power.cloud/datenschutz/" target="blank">Datenschutzerklärung</a> habe ich gelesen.
                        Ich willige ein, dass powercloud meine Daten zu den in der Datenschutzerklärung genannten
                        Zwecken speichert,
                        verarbeitet und ggf. an Partner zur Kontaktaufnahme weiterleitet. Die Speicherung und
                        Verarbeitung meiner
                        Daten kann ich jederzeit widerrufen.
                    </p>
                    <div className={styles.reCapture}>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                    <p className={styles.senddata}>
                        <button className={styles.button}>Einsenden</button>
                    </p>
                </form>
            </div>
        </div>
    );
}
