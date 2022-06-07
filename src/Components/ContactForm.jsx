import {useState} from 'react';
import styles from "./ContactForm.module.css";
import { useNavigate } from "react-router-dom";


export default function ContactForm({sendDataOnSubmit}) {
    const [valid, setValid] = useState({
        firstName: false,
        lastName: false,
        company: false,
        email: false,
        message: false,
        privacy:false
    });
    const[formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        message: "",
        phone: "",
        callback: "",
        newsletter: "",
        privacy:""
    });

    const invalidMessage = <p className={styles.message}>Bitte füllen Sie dieses Pflichtfeld aus.</p>
    const navigate = useNavigate();


    function onInputChange(event) {
        const {name, value, type } = event.target;
        console.log(type);
        if (event.target.type === "checkbox") {
            const { checked } = event.target;
            console.log(checked);
            if(checked) {
                setValid({...valid, [name]: false});
            }
            else {
                setValid({...valid, [name]: true});
            }
        }

            setFormData({...formData, [name]: value});


    }
    function onBlurHandler(event) {
        event.preventDefault();
        const {name} = event.target;
        if (event.target.value === "") {
            setValid({...valid, [name]: true})
        }
        else {
            setValid({...valid, [name]: false})
        }

    }

            function onSubmit(event) {
                event.preventDefault();

                sendDataOnSubmit({
                    firstname: formData.firstName,
                    lastname: formData.lastName,
                    company: formData.company,
                    email: formData.email,
                    telephonenumber: formData.phone,
                    message: formData.message,
                    callbackperiod: formData.callback,
                    newsletter: formData.newsletter,
                    informationprivacy: formData.privacy
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
                                            value={formData.firstName}
                                            onChange={onInputChange}
                                            onBlur={onBlurHandler}
                                            required
                                        />
                                        {valid.firstName && invalidMessage}
                                    </div>
                                    <div className={styles.lname}>
                                        <label htmlFor="lastName">Nachname<span style={{color: "red"}}>*</span></label>
                                        <input
                                            name="lastName"
                                            type="text"
                                            value={formData.lastName}
                                            onChange={onInputChange}
                                            onBlur={onBlurHandler}
                                            className={styles.lname}
                                            required
                                        />
                                        {valid.lastName && invalidMessage}
                                    </div>
                                </div>
                                <div>
                                <label htmlFor="company">Unternehmen<span style={{color: "red"}}>*</span></label>
                                <input
                                    name="company"
                                    type="text"
                                    value={formData.company}
                                    onChange={onInputChange}
                                    onBlur={onBlurHandler}
                                    required
                                />
                                </div>
                                {valid.company && invalidMessage}
                                <div>
                                <label htmlFor="email">E-Mail<span style={{color: "red"}}>*</span></label>
                                <input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={onInputChange}
                                    onBlur={onBlurHandler}
                                    required
                                />
                                    </div>
                                {valid.email && invalidMessage}
                                <div>
                                <label htmlFor="message">Nachricht<span style={{color: "red"}}>*</span></label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={onInputChange}
                                    onBlur={onBlurHandler}
                                    className={styles.message}
                                    required
                                />
                                </div>
                                {valid.message && invalidMessage}
                                <div className={styles.callback}>
                                    <div className={styles.phone}>
                                        <label htmlFor="phone">Telefonnummer</label>
                                        <input
                                            name="phone"
                                            type="text"
                                            value={formData.phone}
                                            onChange={onInputChange}
                                        />
                                    </div>
                                    <div className={styles.cbtime}>
                                        <label htmlFor="callback">Rückruf Zeitraum</label>
                                        <select name="callback" value={formData.callback} onChange={onInputChange}
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
                                powercloud verpflichtet sich, deine Privatsphäre zu schützen und zu respektieren. Wir
                                verwenden
                                deine persönlichen Daten nur zur Bereitstellung der von dir angeforderten Produkte und
                                Dienstleistungen.
                                Von Zeit zu Zeit möchten wir dich über unsere Produkte und Dienstleistungen sowie andere
                                Inhalte, die für
                                dich von Interesse sein könnten, informieren:
                            </p>
                            <p className={styles.newsletter}>
                                <input name="newsletter" type="checkbox" value={formData.newsletter}
                                       onChange={onInputChange}/>
                                <label htmlFor="newsletter">Ja, ich möchte den <strong>Newsletter
                                    power.news</strong> abonnieren
                                    und Informationen und
                                    Benachrichtigungen von powercloud erhalten.</label>
                            </p>
                            <div className={styles.privacy}>
                                <input name="privacy" type="checkbox" value={formData.privacy} onChange={onInputChange}
                                       required/>
                                <label htmlFor="privacy">Ich stimme der Speicherung und Verarbeitung meiner persönlichen
                                    Daten
                                    durch powercloud
                                    zu.<span style={{color: "red"}}>*</span></label>
                                {valid.privacy && invalidMessage}
                            </div>
                            <p className={styles.privacyagree}>
                                Die <a href="https://power.cloud/datenschutz/"
                                       target="blank">Datenschutzerklärung</a> habe ich gelesen.
                                Ich willige ein, dass powercloud meine Daten zu den in der Datenschutzerklärung
                                genannten
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
