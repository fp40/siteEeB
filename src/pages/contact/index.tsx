import styles from './styles.module.scss'
import InputFile from '../../components/Form/InputFile'

export default function Form() {
  async function handleSubmit(event: any) {
    event.preventDefault()

    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      number: Number(event.target.number.value),
      message: String(event.target.message.value),
    }

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      console.log('Message sent successfully')
    }
    if (!response.ok) {
      console.log('Error sending message')
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.form} id="contato">
        <form onSubmit={handleSubmit}>
          <p className={styles.title}>SOLICITE SEU ORÇAMENTO</p>
          <input
            type="text"
            placeholder="Seu Nome"
            className={styles.input}
            id="name"
          />
          <input
            type="email"
            placeholder="Seu Email"
            className={styles.input}
            id="email"
          />
          <input
            type="number"
            placeholder="Seu Telefone"
            className={styles.input}
            id="number"
          />
          <textarea
            placeholder="Orçamento"
            className={styles.textArea}
            id="message"
          ></textarea>
          <InputFile />
          <button type="submit" className={styles.btn}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}
