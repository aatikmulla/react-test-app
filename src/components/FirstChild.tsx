import React from 'react';
import {useContextSelector} from 'use-context-selector';
import { AppContext, IContextType } from '../App';

interface Props {
  // add props interface here if needed
}

const FirstChild: React.FC<Props> = () => {
  /* it renders only when context changes i.e, 4 times compared to 9 times in parent component */
    const selectedProject = useContextSelector(AppContext, (v: IContextType) => v.selectedProject);
    const renderCountRef = React.useRef(0);
    React.useLayoutEffect(() => {
      renderCountRef.current += 1;
      console.log('first child rendedrs: ',renderCountRef.current)
    });
  return (
    <div>
        {selectedProject}
    </div>
  );
};

export default React.memo(FirstChild);