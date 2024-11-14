import React, { useContext } from "react";
import { useState } from "react";
import './style.less'
import { useNavigate } from 'react-router-dom'
import { THLIST, TASKPRIORITY } from '../../constants';
import { CreateContext } from "../../context/index";
const Home = () => {
  const { tasks, setTasks } = useContext(CreateContext);//获取上下文
  const navigate = useNavigate();//路由跳转
  //删除
  const handleDelete = (id) => {
    return () => {
      setTasks(tasks.filter(item => item.id !== id))
    };
  };
  //排序高到低
  const handleHotSort = () => {
    const sortTasks = [...tasks];//深拷贝
    setTasks(sortTasks.sort((a, b) =>TASKPRIORITY[a.priority] - TASKPRIORITY[b.priority]));
  };
  //排序低到高
  const handleLowSort = () => {
    const sortTasks = [...tasks];
    setTasks(sortTasks.sort((a, b) => TASKPRIORITY[b.priority] - TASKPRIORITY[a.priority]));
  };
  return (
    <div>
      <a href="https://github.com/daidaize/interview_question" target="_blank"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEX////4+Pi3ubtvcnZNUVU+Q0cpLjLr6+x3en0sMTYkKS59gIORk5aUl5n8/Pzw8PFTV1tbX2Pc3d5DSEzn5+g3PECLjpFKTlKFh4qxs7XCxMUuMze/wcLh4uPV1tZzd3o/Q0jOz9CmqKpjZ2qfoaTxAyfNAAABPUlEQVR4AW3TBYKDMBQE0AltAgzuzur9z7ibH5oKfWjc4UEFl6s2Rl8vgcJZGMX04iTEM5UaPomzHA+KkidVAa/WfKNpffMd32oKCHUlWfb27Q19ZSMVrNHGTMDckMtQLqSegdXGpvi3Sf93W9UudRby2WzsEgL4oMvwoqY1AsrQNfFipbXkCGh1BV6oT1pfRwvfOJlo9ZA5NAonStbmB1pawBuDTAgkX4MzV/eC2H3e0C7lk1aBEzd+7SpigJOZVoXx+J5UxzADil+8+KZYoRaK5y2WZxSdgm0j+dakzkIc2kzT6W3IcFnDTzdt4sKbWMqkpNl229IMsfMmg6UaMsJXmv4qCMXDoI4mO5oADwyFDnGoO3KI0jSHQ6E3eJum5TP4Y+EVyUOGXHZjgWd7ZEwOJzZRjbPQt7mF8P4AzsYZpmkFLF4AAAAASUVORK5CYII=" alt="" /></a>
      <table id="table" border={1} width={800} >
        <caption>任务列表</caption>

        <thead>
          <tr>
            {
              THLIST.map(item => <th key={item}>{item}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            tasks.map((item) => {
              return <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.status}</td>
                <td>{item.desc}</td>
                <td>{item.priority}</td>
                <td>
                  <button onClick={() => {
                    navigate('/detail', { state: item })
                  }}>编辑</button>
                  <button style={{ background: 'red' }} onClick={handleDelete(item.id)}>删除</button>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
      <button onClick={()=>navigate('/add')}>新增任务</button>
      <button onClick={handleHotSort}>任务优先级从高到底排序</button>
      <button onClick={handleLowSort}>任务优先级从低到高排序</button>
    </div>
  );
};

export default Home;