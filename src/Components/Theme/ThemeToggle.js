import React from 'react'
import { FaSun, FaMoon } from "react-icons/fa"
import { ThemeContext } from '../../Contexts/ThemeContext'

const Toggler = () => {
    const { theme, setTheme } = React.useContext(ThemeContext)

    return (
        <div className="transition duration-500 ease-in-out">
            {theme === 'dark' ? (
                <FaSun
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-gray-500 dark:text-gray-400 text-lg sm:text-2xl cursor-pointer"
                />
            ) : (
                <FaMoon
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-gray-500 dark:text-gray-400 text-lg sm:text-2xl cursor-pointer"
                />
            )}
        </div>
    )
}

export default Toggler