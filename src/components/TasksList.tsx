import React, { useState } from 'react'
import ITasksData from '../interfaces/ITasksData';
import Task from './Task';

interface IProps {
    tasksData: ITasksData[],
    setTasksData: (value: ITasksData[]) => any
}

const TasksList = ({ tasksData, setTasksData }: IProps): JSX.Element => {
    const [filterValue, setFilterValue] = useState<number>(0);

    const filterTasks = (): ITasksData[] => {
        if (filterValue === 0) {
            return tasksData;
        }

        return tasksData.filter((task) => filterValue === 1 ? task.status === 0 : task.status === 1)
    }

    const deleteTask = (id: number): void => {
        setTasksData(tasksData.filter((task) => task.id !== id))
    }

    const changeTaskStatus = (id: number): void => {
        setTasksData(tasksData.map((task) => task.id !== id ? task : ({ ...task, status: task.status === 1 ? 0 : 1 })))
    }

    return (
        <>

            <button className="bg-amber-400 text-white font-bold py-2 px-4 rounded text-xs mr-2" onClick={e => setFilterValue(0)}>Wszystkie</button>
            <button className="bg-red-500 text-white font-bold py-2 px-4 rounded text-xs mr-2" onClick={e => setFilterValue(1)}>Do zrobienia</button>
            <button className="bg-green-500 text-white font-bold py-2 px-4 rounded text-xs" onClick={e => setFilterValue(2)}>Zrobione</button>
            <ul className='mt-8 grid justify-center xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-none gap-7'>
                {filterTasks().map((task) =>
                    <Task key={task.id} task={task} deleteTask={deleteTask} changeTaskStatus={changeTaskStatus} />
                )}
            </ul>
        </>

    )
}

export default TasksList