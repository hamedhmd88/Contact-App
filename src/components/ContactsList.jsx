import ContactItem from "./ContactItem"
import styles from './contactList.module.css'


function ContactsList({contacts, deleteHandler}) {
  return (
    <div className={styles.container}>
      <h3>Contact List</h3>

    {
        contacts.length ? (
            <ul className={styles.contacts}>
            {contacts.map((item) => (
                <ContactItem key={item.id} data={item} deleteHandler={deleteHandler}/>            ))}
          </ul>
        ) : (
            <p className={styles.message}>No Contact Yet!</p>
        )
    }



     
    </div>
  )
}

export default ContactsList
