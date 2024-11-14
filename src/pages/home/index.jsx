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