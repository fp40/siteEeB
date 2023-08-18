import { useState } from 'react'

const InputFile: React.FC = () => {
  const [fileName, setFileName] = useState('Nenhum arquivo selecionado')

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name)
    } else {
      setFileName('Nenhum arquivo selecionado')
    }
  }

  return (
    <div className="custom-file-upload">
      <label htmlFor="file-input" className="file-label">
        Escolha um arquivo
      </label>
      <input
        id="file-input"
        type="file"
        onChange={handleFileChange}
        className="file-input"
      />
      <span className="file-name">{fileName}</span>

      <style jsx>{`
        .custom-file-upload {
          position: relative;
          display: inline-block;
          margin-top: 20px;
          margin-bottom: 45px;
        }

        .file-label {
          padding: 10px 35px;
          background-color: #0f0f0f;
          color: var(--gray);
          cursor: pointer;
          border-radius: 5px;
          font-size: 20px;
        }

        .file-label:hover {
          color: white;
        }

        .file-input {
          display: none;
        }

        .file-name {
          display: block;
          margin-top: 10px;
          font-size: 18px;
          color: var(--gray);
        }
      `}</style>
    </div>
  )
}

export default InputFile
