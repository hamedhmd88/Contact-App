import styles from './ContactItem.module.css'

export default function ContactItem({data: {id, name, lastName, email, phone}, deleteHandler}) {
    return (
      <>
           <li className={styles.item}>
                      <p>{name} - {lastName}</p>
                      <p>{email}</p>
                      <p>{phone}</p>
                      <button onClick={() => deleteHandler(id)}>Delet</button>
                  
                  
                  </li>
      </>
    )
  }