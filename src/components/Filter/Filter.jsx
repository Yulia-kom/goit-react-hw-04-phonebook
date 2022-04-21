import React from 'react';
import styles from '../Data/Filter.module.css';

const Filter = ({ onChange }) => {
  return (
    <label>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        onChange={onChange}
        name="filter"
        autoComplete="off"
      />
    </label>
  );
};

export default Filter;
