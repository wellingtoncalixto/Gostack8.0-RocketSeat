import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

// import { Container } from './styles';

export default function TechList() {
  const [techs, setTechs] = useState([])
  const [newTech, setNewTech] = useState()


  useEffect(() => {
    const tech = localStorage.getItem( 'techs')

    if (tech) {
      setTechs(techs)
    }
  }, [techs])
  useEffect(() => {
    localStorage.setItem('techs', [techs])

  }, [techs])
  function handleAdd() {
    setTechs([...techs, newTech])
    setNewTech('')
  }

  return (
    <div>
      <form  data-testid="tech-form" onSubmit={handleAdd}>
        <label htmlFor="newTech">newTech</label>
        <input id="newTech" type="text" value={newTech} onChange={e => setNewTech(e.target.value)}/>
      <ul data-testid="tech-list">
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}
