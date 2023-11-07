'use client';

import { useLocalStorage } from 'usehooks-ts';

import { ChangeEvent, useState } from 'react';

// * https://usehooks-ts.com/react-hook/use-local-storage, with usehooks-ts
// * https://github.com/astoilkov/use-local-storage-state, with use-local-storage-state

type AllUsersType = {
	id: number | string;
	username: string;
};

export default function UseLocalStorage() {
	const [isDarkTheme, setDarkTheme] = useLocalStorage<boolean>(
		'whichTheme',
		true
	);

	const [newUser, setNewUser] = useState<AllUsersType>({
		id: '',
		username: ''
	});

	const [allUsers, setAllUsers] = useLocalStorage<AllUsersType[]>(
		'hookUsers',
		[]
	);

	const toggleTheme = () => {
		setDarkTheme((prevValue) => !prevValue);
	};

	const handleInputNewUser = (e: ChangeEvent<HTMLInputElement>) => {
		setNewUser((currentUser) => ({
			...currentUser,
			id: Math.random(),
			username: e.target.value
			// [e.target.name]: e.target.value
		}));
	};

	const handleAddNewUser = () => {
		setAllUsers((currentUsers) => [...currentUsers, newUser]);
		setNewUser((currentUser) => ({ ...currentUser, id: '', username: '' }));
	};

	return (
		<div className=" p-6 border-2 rounded-lg border-neutral-50">
			<p className="text-2xl font-semibold">Use LocalStorage</p>

			<button
				type="button"
				onClick={toggleTheme}
				className="text-lg p-3 bg-slate-600 text-white mt-3 rounded-lg"
			>
				{' '}
				{`The current theme is ${isDarkTheme ? `dark` : `light`}`}
			</button>

			<div className="lg:flex flex-none mt-5">
				<input
					type="text"
					className="lg:mb-0 mb-3 bg-gray-50  border border-gray-300 text-gray-900 text-base lg:rounded-l-lg lg:rounded-r-none rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					onChange={handleInputNewUser}
					value={newUser.username}
					name="username"
					placeholder="Add new user"
				/>
				<button
					type="button"
					className="text-base  lg:w-48 lg:p-0 p-2   bg-blue-600 text-white lg:rounded-r-lg lg:rounded-l-none rounded-lg"
					onClick={handleAddNewUser}
				>
					Add User
				</button>
			</div>

			<p className="text-xl font-semibold mt-5">List of Users:</p>

			{allUsers &&
				allUsers?.map(({ id, username }) => (
					<p key={id} className="text-base font-medium">
						{username}
					</p>
				))}
		</div>
	);
}
