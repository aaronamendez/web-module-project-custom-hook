import { useState } from 'react';

export const useLocalStorage = (key, valuePair) => {
	// Checks Local Storage for a key and it's value pair to see
	// if a value already exists, if not, add one.
	const checkLocalStorage = () => {
		if (localStorage.getItem(key)) {
			return localStorage.getItem(key);
		} else {
			localStorage.setItem(key, valuePair);
			return valuePair;
		}
	};

	// Here we create a value and invoke useState,
	// while passing in our checkLocalStorage expression
	const [value, setValue] = useState(checkLocalStorage);

	const setStoredValue = (newValue) => {
		localStorage.setItem(key, newValue);
		setValue(newValue);
	};

	return [value, setStoredValue];
};
