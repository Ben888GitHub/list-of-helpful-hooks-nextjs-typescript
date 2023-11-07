'use client';

import { ChangeEvent, useEffect, useState } from 'react';

import { useDebounce } from 'usehooks-ts';

// * https://usehooks-ts.com/react-hook/use-debounce, with usehooks-ts
// * https://react-hookz.github.io/web/?path=/docs/callback-usedebouncedcallback--example , with @react-hookz/web you don't have to declare useEffect()

export default function UseDebounce() {
	const [value, setValue] = useState<string>('');
	const debouncedValue = useDebounce<string>(value, 500);
	const [newNumber, setNewNumber] = useState<number>(0);

	useEffect(() => {
		const randomNum = Math.random();
		debouncedValue && setNewNumber(randomNum);
	}, [debouncedValue]);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return (
		<div className=" p-6 border-2 rounded-lg border-neutral-50">
			<p className="text-2xl font-semibold">Use Debounce</p>

			<p className="text-lg mt-3">Value real-time: {value}</p>

			<p className="text-lg mt-3">Debounce Value: {debouncedValue}</p>

			<p className="text-lg mt-3">New Digit: {debouncedValue && newNumber}</p>

			<input
				type="text"
				className="bg-gray-50 mt-3 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				onChange={handleInputChange}
				placeholder="Debounced Input value"
			/>
		</div>
	);
}
