import { createContext, useState } from "react";
import { TASKSLIST } from "../constants";

export const CreateContext = createContext(null);

const BaseProvider = ({ children }) => {

  const [tasks, setTasks] = useState(TASKSLIST);
  return (
    <CreateContext.Provider value={{ tasks, setTasks }}>
      {children}
    </CreateContext.Provider>
  )

};
export default BaseProvider;



