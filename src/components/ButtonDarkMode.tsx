import React, { useEffect, useState } from "react"

export const ButtonDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true)
      document.querySelector("html")?.classList.add("dark")
    } else {
      setDarkMode(false)
      document.querySelector("html")?.classList.remove("dark")
    }
  }, [darkMode])

  const handleChangeDarkMode = () => {
    if (darkMode) {
      localStorage.theme = "light"
      setDarkMode(false)
    } else {
      localStorage.theme = "dark"
      setDarkMode(true)
    }
  }

  return (
    <div className="flex">
      <div className="text-xs">
        <button
          name="toggle"
          id="toggle"
          onClick={handleChangeDarkMode}
          className="toggle-checkbox"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
