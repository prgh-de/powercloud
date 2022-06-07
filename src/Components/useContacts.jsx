import { useState } from 'react';
import  {addContactToApi} from "./ContactApiService";


export default function useContacts() {
    const [contacts, setContacts] = useState([]);

    function addContact(contact) {
        setContacts([contact, ...contacts]);
        addContactToApi(contact);
    }

    return [contacts, addContact]
}