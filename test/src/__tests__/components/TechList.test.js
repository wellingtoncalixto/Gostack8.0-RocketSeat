import React from 'react'
import {render, fireEvent, cleanup} from '@testing-library/react'
import TechList from "~/components/TechList"
afterEach(cleanup);
describe('TechList component', () => {
  beforeEach(()=> {
    localStorage.clear()
  }) 
  it('should be able to add new tech', () => {
  const {getByText, getByTestId, getByLabelText} = render(<TechList />)
  
  
  fireEvent.change(getByLabelText('newTech'), {target: {value: 'Node.js'}})
  fireEvent.submit(getByTestId('tech-form'))
  
  expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'))
  expect(getByLabelText('newTech')).toHaveValue('');
  });
  
  it('should store tech in storage', () => {
    let {getByText, getByTestId, getByLabelText} = render(<TechList />)
  
    
    fireEvent.change(getByLabelText('newTech'), {target: {value: 'Node.js'}});
    fireEvent.submit(getByTestId('tech-form'));
   
      
    afterEach(cleanup);

    ({getByText, getByTestId, getByLabelText} = render(<TechList />));

    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
  })
})