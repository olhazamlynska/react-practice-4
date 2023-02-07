import { nanoid } from '@reduxjs/toolkit';
import { fetchStatus } from 'components/services/statysAPI';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from 'redux/usersSlice';

export const AddPage = () => {
  const [name, setName] = useState(() => {
    const storageName = localStorage.getItem('name');
    if (storageName === null) {
      return '';
    }
    return storageName;
  });
  const [age, setAge] = useState(() => {
    const storageAge = localStorage.getItem('age');
    if (storageAge === null) {
      return '';
    }
    return storageAge;
  });
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    name === 'name' ? setName(value) : setAge(value);
    if (name === 'name') {
      localStorage.setItem('name', value);
    } else {
      localStorage.setItem('age', value);
    }
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const status = await fetchStatus();

    const formData = {
      id: nanoid(),
      name,
      age,
      status,
    };
    dispatch(addUser(formData));

    setAge('');
    setName('');

    localStorage.removeItem('name');
    localStorage.removeItem('age');
  };
  return (
    <form action="submit" onSubmit={handleSubmit} autoComplete>
      <label>
        Name
        <input name="name" type="text" value={name} onChange={handleChange} />
      </label>
      <label>
        Age
        <input name="age" type="number" value={age} onChange={handleChange} />
      </label>
      <button type="submit">Add info</button>
    </form>
  );
};
