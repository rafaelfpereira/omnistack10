import React, { useEffect, useState } from 'react'
import DevItem from './components/DevItem'
import DevForm from './components/DevForm'
import api from './services/api'
import './global.css'
import './App.css'
import './Main.css'
import './Sidebar.css'

function App() {
  const [devList, setDevList] = useState([])

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs')

      setDevList(response.data)
    }

    loadDevs()
  }, [])

  async function handleAddDev(data) {
    const response = await api.post('/devs', data)

    setDevList([...devList, response.data])
  }

  return (
    <div id='app'>
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devList.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App
