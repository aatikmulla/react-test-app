import React, { useEffect } from 'react';
import './App.css';
import FirstChild from './components/FirstChild';
import { createContext } from 'use-context-selector';

export interface IContextType {
  count: number;
  setCount: (newCount: number) => void;
  selectedProject: string;
  setSelectedProject: (newProject: string) => void;
}

export const AppContext = createContext<IContextType>({
  count: 0,
  setCount: () => {},
  selectedProject: '',
  setSelectedProject: () => {},
});

function App() {
  const [count, setCount] = React.useState(0);
  const [selectedProject, setSelectedProject] = React.useState<string>('');

  const renderCountRef = React.useRef(0);
  React.useLayoutEffect(() => {
    renderCountRef.current += 1;
    console.log('myapp rendedrs: ',renderCountRef.current)
  });


  const contextValue = {
    count,
    setCount,
    selectedProject,
    setSelectedProject,
  };

  useEffect(() => {
    const newProject = count > 4 ? 'project 2' : count > 2 ? 'project 1' : '';
    if (newProject && newProject !== selectedProject) {
      setSelectedProject(newProject);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <AppContext.Provider value={contextValue}>
      <FirstChild />
      <button onClick={handleClick}>counter</button>
      <div>{count}</div>
    </AppContext.Provider>
  );
}

export default App;
