import React from 'react'
import TasksWrapper from './components/TasksWrapper'
import githubLogo from './assets/githubLogo.png'

const App = (): JSX.Element => {
    return (
        <div className='bg-[#0093E9] bg-gradient-to-r from-bg1 to-bg2 mx-auto min-h-screen text-white p-8'>
            <h1 className='text-8xl mb-10 text-center'>To-do list</h1>
            <TasksWrapper />
            <footer className='text-center mt-10'>
                <a href="https://github.com/JMatracki">
                    <img className='m-auto' height="200" width="200" alt="githubLogo" src={githubLogo} />
                    <p>Created by Jakub Matracki</p>
                </a>
            </footer>
        </div>
    )
}

export default App