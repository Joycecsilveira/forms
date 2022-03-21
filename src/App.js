import { useState } from 'react'
import './App.css'

function App() {
  const [formValues, setFormValues] = useState({})

  const handleInputChange = e => {
    const { target } = e
    const { nome, Email, value } = target
    setFormValues({ ...formValues, [nome]: value, [Email]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)
    console.log('*** handleSubmit', data)
  }
  console.log('*** handleInputChange', formValues)

  return (
    <form onSubmit={handleSubmit}>
      <h5>Informe o seu nome</h5>
      <input
        type="text"
        name="Nome"
        placeholder="Nome completo"
        onChange={handleInputChange}
        Onchange={formValues.nome || ''}
      />
      <h5>Informe a sua idade</h5>
      <input
        type="text"
        name="Email"
        placeholder="Email"
        onChange={handleInputChange}
        Onchange={formValues.Email || ''}
      />
      <h5>Dentre essas linguagens de programação, qual a sua favorita?</h5>
      <select nome="linguage">
        <option value="javascript">Javascript</option>
        <option value="Java">Java</option>
        <option value="Typescript">Typescript</option>
        <option value="C#">C#</option>
        <option value="Python">Python</option>
      </select>
      <div className="radios">
        <label>
          {' '}
          <h5>Qual o seu nível de conhecimento na linguagem selecionada?</h5>
          <input
            type="radio"
            value="5"
            name="number"
            onChange={handleInputChange}
          />{' '}
          3
        </label>
        <label>
          <input
            type="radio"
            value="2"
            name="number"
            onChange={handleInputChange}
          />{' '}
          1
        </label>
        <label>
          <input
            type="radio"
            value="3"
            name="number"
            onChange={handleInputChange}
          />{' '}
          2
        </label>
      </div>
      <textarea
        name="bio"
        onChange={handleInputChange}
        Onchange={formValues.bio || ''}
      ></textarea>
      <button type="submit">Enviar</button>
    </form>
  )
}
export default App
