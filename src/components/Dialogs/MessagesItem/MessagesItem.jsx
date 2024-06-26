import React from 'react'
import styles from './MessagesItem.module.css'

export const MessagesItem = (props) => {
    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.addMessage()
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.onMessageChange(text)
    }

    return (
        <div className={styles.message}>
            <div className={styles.message_text}>{props.message}</div>
            <div className={styles.add_message}>
                <textarea ref={newMessageElement} onChange={onMessageChange} className={styles.textarea}
                          value={props.newMessageText}/>
                <button onClick={addMessage} className={styles.send_message}>Send</button>
            </div>
        </div>
    )
}