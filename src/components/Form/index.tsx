import styles from './styles.module.scss'

import { useState, useEffect } from 'react'

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  })
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const [nameError, setNameError] = useState('')
  const [numberError, setNumberError] = useState('')
  const [messageError, setMessageError] = useState('')

  const validateForm = () => {
    let isValid = true

    if (!formData.name) {
      setNameError('Nome é obrigatório')
      isValid = false
    } else {
      setNameError('')
    }

    if (!formData.number) {
      setNumberError('Número é obrigatório')
      isValid = false
    } else {
      setNumberError('')
    }

    if (!formData.message) {
      setMessageError('Orçamento é obrigatório')
      isValid = false
    } else {
      setMessageError('')
    }

    return isValid
  }

  const removeSuccessMessage = () => {
    setSuccessMessage('')
  }

  const removeErrorMessage = () => {
    setErrorMessage('')
  }

  useEffect(() => {
    if (successMessage) {
      const successMessageTimeout = setTimeout(() => {
        removeSuccessMessage()
      }, 5000)

      return () => clearTimeout(successMessageTimeout)
    }
  }, [successMessage])

  useEffect(() => {
    if (errorMessage) {
      const errorMessageTimeout = setTimeout(() => {
        removeErrorMessage()
      }, 5000)

      return () => clearTimeout(errorMessageTimeout)
    }
  }, [errorMessage])

  async function handleSubmit(event: any) {
    event.preventDefault()

    if (!validateForm()) {
      return
    }

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
      setSuccessMessage('Mensagem enviada com sucesso')
      setFormData({
        name: '',
        email: '',
        number: '',
        message: '',
      })
    } else {
      setErrorMessage('Erro ao enviar a mensagem')
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.form} id="contato" onSubmit={handleSubmit}>
        <form>
          <p className={styles.title}>SOLICITE SEU ORÇAMENTO</p>
          <input
            type="text"
            placeholder="Seu Nome"
            className={styles.input}
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {nameError && <p className={styles.error}>{nameError}</p>}
          <input
            type="email"
            placeholder="Seu Email"
            className={styles.input}
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Seu Telefone"
            className={styles.input}
            id="number"
            value={formData.number}
            onChange={(e) =>
              setFormData({ ...formData, number: e.target.value })
            }
          />
          {numberError && <p className={styles.error}>{numberError}</p>}
          <textarea
            placeholder="Orçamento"
            className={styles.textArea}
            id="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          {messageError && <p className={styles.error}>{messageError}</p>}

          <button type="submit" className={styles.btn}>
            Enviar
          </button>
          {successMessage && (
            <p className={styles.successMessage}>{successMessage}</p>
          )}
          {errorMessage && (
            <p className={styles.errorMessage}>{errorMessage}</p>
          )}
        </form>
      </div>
    </div>
  )
}
