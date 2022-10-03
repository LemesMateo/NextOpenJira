import { FC, ReactNode, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
   sideMenuOpen: boolean;
   isAddingEntry: boolean;
   isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  isAddingEntry: false,
  isDragging: false
}
interface PropsProvider {
children?: ReactNode;
}

export const UIProvider:FC<PropsProvider> = ({ children }) => {
   const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

   const closeSideMenu = () => {
    dispatch({type: 'UI - Close Sidebar'});
   }
   const openSideMenu = () => {
    dispatch({type: 'UI - Open Sidebar'});
   }
   const setIsAddingEntry = (isAdding: boolean) => {
    dispatch({type:'UI - Set isAddingEntry', payload: isAdding});
   }

   const startDragging = () => {
    dispatch({ type: 'UI - Start Dragging'});
   }

   const endDragging = () => {
    dispatch({ type: 'UI - End Dragging'});
   }

 return (
   <UIContext.Provider value={{
       ...state, 
       //Methods
       closeSideMenu,
       openSideMenu,

       setIsAddingEntry,

       startDragging,
       endDragging
   }}>
       {children}
   </UIContext.Provider>
)
}