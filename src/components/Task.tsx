import React from 'react'
import ITasksData from '../interfaces/ITasksData';

interface IProps {
    task: ITasksData,
    deleteTask: (id: number) => void,
    changeTaskStatus: (id: number) => void
}

const Task = ({ task, deleteTask, changeTaskStatus }: IProps): JSX.Element => {
    const changeStatus = async (): Promise<void> => {
        await fetch(`http://localhost:3001/tasks/${task.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                status: task.status === 0 ? 1 : 0
            })
        })
        changeTaskStatus(task.id);
    }

    const deleteCompletedTask = async (): Promise<void> => {
        await fetch(`http://localhost:3001/tasks/${task.id}`, {
            method: 'DELETE',
        })
        deleteTask(task.id);
    }

    return (
        <li>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-black">{task.title}</div>
                    <div className="text-gray-700 text-base">
                        <p className='mb-2'>{task.desc}</p>
                        {task.status === 0 && <p className='text-red-500 mb-2'>Do zrobienia</p>}
                        {task.status === 1 && <p className='text-green-500 mb-2'>Zrobione</p>}
                        {task.status === 0
                            && <button className="bg-green-500 text-white font-bold py-2 px-4 rounded text-xs" onClick={changeStatus}>Zrobione</button>}
                        {task.status === 1
                            &&
                            <>
                                <button className="bg-amber-400 text-white font-bold py-2 px-4 rounded text-xs mr-2" onClick={changeStatus}>Do zrobienia</button>
                                <button className="bg-red-500 text-white font-bold py-2 px-4 rounded text-xs" onClick={deleteCompletedTask}>Usuń</button>
                            </>
                        }
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Task