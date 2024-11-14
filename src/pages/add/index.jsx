import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { CreateContext } from "../../context";
import './style.less'
const Add = () => {

  const navigate = useNavigate();// 路由跳转
  const { tasks, setTasks } = useContext(CreateContext);//获取全局数据
  const [newTasks, setNewTasks] = useState({
    id: '',
    title: '',
    desc: '',
    status: '',
    priority: ''
  }
  );//设置初始值
  
  //提交
  const handleSubmit = (e) => {
    //阻止默认提交行为
    e.preventDefault();
    //添加任务
    setTasks([
      ...tasks,
      newTasks
    ])
    alert('添加成功');
    navigate('/');
  }
  //输入框内容改变
  const handleChange = (e) => {
    //设置新值
    setNewTasks({
      ...newTasks,
      id: tasks.length + 1,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">任务名称:</label>
          <div>
          <input name="title" value={newTasks.title} onChange={handleChange} required/>
          </div>
        </div>
        
        <div>
          <label htmlFor="status">任务状态:</label>
          <div>
          <select name="status" onChange={handleChange} required>
            <option value="">请选择任务状态</option>
            <option value="待办">待办</option>
            <option value="进行中">进行中</option>
            <option value="已完成">已完成</option>
          </select>
          </div>
        </div>
        <div>
          <label htmlFor="priority">任务优先级:</label>
          <div>
          <select name="priority" onChange={handleChange} required>
            <option value="">请选择任务优先级</option>
            <option value="低">低</option>
            <option value="中">中</option>
            <option value="高">高</option>
          </select>
          </div>
        </div>
        <div>
          <label htmlFor="desc">任务描述:</label>
          <div><textarea name="desc" onChange={handleChange} required /></div>
        </div>
        <button type="submit">提交</button>
        <button onClick={()=>navigate('/')}>返回</button>
      </form>
      
    </div>
  )

}

export default Add;
