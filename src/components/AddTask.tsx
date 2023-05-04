import React, { useState } from 'react'
import ITasksData from '../interfaces/ITasksData';

interface IProps {
    tasksData: ITasksData[],
    setTasksData: (value: ITasksData[]) => any
}

const AddTask = ({ setTasksData, tasksData }: IProps): JSX.Element => {
    const [titleInput, setTitleInput] = useState<string>('');
    const [descriptionInput, setDescriptionInput] = useState<string>('');

    const addTaskToApi = async (): Promise<void> => {
        const response = await fetch('http://localhost:3001/tasks', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: titleInput,
                desc: descriptionInput,
                status: 0
            })
        })
        const data = await response.json();
        setTasksData([...tasksData, data]);
    }

    return (
        <div className='mb-6 md:w-2/4 lg:w-1/4  text-center m-auto'>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                    Tytuł
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Tytuł" value={titleInput} onChange={(e) => setTitleInput(e.target.value)} />
            </div >
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                    Opis
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Opis" value={descriptionInput} onChange={(e) => setDescriptionInput(e.target.value)} />
            </div >
            <button onClick={addTaskToApi} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Dodaj</button>
        </div>
    )
}

export default AddTask