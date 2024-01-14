import { useState } from "react"
import ContactsList from "./ContactsList";
import { inputs } from "../contans/inputs";
import { v4 } from "uuid";

import styles from './Contacts.module.css'

export default function Conrtacts() {

    const [contacts, setContacts] = useState([]);

    const [alert,setAlert] = useState("");

    const [contact, setContact] = useState({
       id: "", name: "", lastName:"", email:"", phone:""
    });

    const changeHandler = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        setContact((e) => 
                (
                    {...e, [name]: value}
                ))
    };

    const handleClick = () =>{

        if (!contact.name || !contact.lastName || !contact.email || !contact.phone){
            setAlert("Please enter valid data!")
            return;
        }
        setAlert("");

        const newId = {...contact, id: v4()}

        setContacts((e) => 
                (
                    [...e, newId]

                ));

        setContact({
            name: "", lastName:"", email:"", phone:""
        })
    };

    const deleteHandler = (id) => {
        const newId = contacts.filter((item) => item.id !== id);
        setContacts(newId)
    }


  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {
            inputs.map((item, index) => (
                <input
                    key={index}
                    type={item.type}
                    name={item.name}
                    placeholder={item.placeholder}
                    onChange={changeHandler}
                    value={contact[item.name]} />
                
                
                
            ))
        }
       
        <button onClick={handleClick}>Add Contact</button>
      </div>
      <div className={styles.alert}>
        {alert && <p>{alert}</p>}
      </div>
      <ContactsList contacts={contacts} deleteHandler={deleteHandler}/>
    </div>
  )
}
