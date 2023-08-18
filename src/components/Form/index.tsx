import styles from './styles.module.scss'
import InputFile from './InputFile'

const Form = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form} id="contato">
        <form>
          <p className={styles.title}>SOLICITE SEU ORÇAMENTO</p>
          <input type="text" placeholder="Seu Nome" className={styles.input} />
          <input
            type="email"
            placeholder="Seu Email"
            className={styles.input}
          />
          <input
            type="number"
            placeholder="Seu Telefone"
            className={styles.input}
          />
          <textarea
            placeholder="Orçamento"
            className={styles.textArea}
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

export default Form
