import { useState } from 'react';


export const AddCategory = ({onAddCategory}) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e) => setInputValue(e.target.value);
  
  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1 ) return;
    onAddCategory(inputValue.trim())
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text"
        placeholder='Buscar Gif'  
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  )
}