import React, { useState, useEffect } from 'react'
import './style.css'

function DevForm({ onSubmit }) {
  const [github_username, setGithubUsername] = useState('')
  const [techs, setTechs] = useState('')
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords

        setLatitude(latitude)
        setLongitude(longitude)
      },
      err => {
        alert(err)
      },
      {
        timeout: 30000
      }
    )
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()

    await onSubmit({ github_username, techs, latitude, longitude })

    setGithubUsername('')
    setTechs('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='input-block'>
        <label htmlFor='github_username'>Usuário do Github</label>
        <input
          name='github_username'
          id='github_username'
          onChange={e => setGithubUsername(e.target.value)}
          value={github_username}
          required
        />
      </div>

      <div className='input-block'>
        <label htmlFor='techs'>Tecnologias</label>
        <input
          name='techs'
          id='techs'
          onChange={e => setTechs(e.target.value)}
          value={techs}
          required
        />
      </div>

      <div className='input-group'>
        <div className='input-block'>
          <label htmlFor='latitude'>Latitude</label>
          <input
            type='number'
            name='latitude'
            id='latitude'
            onChange={e => setLatitude(e.target.value)}
            value={latitude}
            required
          />
        </div>

        <div className='input-block'>
          <label htmlFor='longitude'>Longitude</label>
          <input
            type='number'
            name='longitude'
            id='longitude'
            onChange={e => setLongitude(e.target.value)}
            value={longitude}
            required
          />
        </div>
      </div>

      <input type='submit' value='Salvar' />
    </form>
  )
}

export default DevForm
