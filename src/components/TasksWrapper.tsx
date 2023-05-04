import { useEffect, useState } from 'react'
import AddTask from './AddTask'
import TasksList from './TasksList';
import ITasksData from '../interfaces/ITasksData';

const TasksWrapper = (): JSX.Element => {
    const [tasksData, setTasksData] = useState<ITasksData[]>([])

    const downloadTasks = async (): Promise<void> => {
        const response: Response = await fetch('http://localhost:3001/tasks')
        const data: ITasksData[] = await response.json()
        return setTasksData(data)
    }

    useEffect(() => {
        downloadTasks();
    }, [])

    return (
        <div className='text-center'>
            <AddTask setTasksData={setTasksData} tasksData={tasksData} />
            <TasksList tasksData={tasksData} setTasksData={setTasksData} />
        </div>
    )
}

export default TasksWrapper