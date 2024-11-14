import React, { useContext, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { CreateContext } from "../../context";

const Detail = () => {
  const location = useLocation();//获取路由参数
  const navigate = useNavigate();//跳转页面
  const { tasks, setTasks } = useContext(CreateContext);//获取任务列表
  const [newTasks, setNewTasks] = useState(location.state);//获取当前任务
  const [isEdit, setIsEdit] = useState(false);//是否处于编辑状态

  //提交新的任务
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = tasks.map((item) => {
      if (item.id == location.state.id) {
        return newTasks;
      } else {
        return item;
      }
    });
    setTasks(newTask);
    alert('修改成功');
    navigate('/');

  };
  // 编辑任务
  const handleChange = (e) => {
    e.preventDefault();
    setNewTasks({ ...newTasks, [e.target.name]: e.target.value });
  }

  // 编辑按钮
  const handleEdit = (e) => {
    e.preventDefault();
    setIsEdit(true);
  }
  
  return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">任务名称:</label>
            <div>
              <input name="title" value={newTasks.title} onChange={handleChange} disabled={isEdit?false:true}/>
            </div>
          </div>

          <div>
            <label htmlFor="status">任务状态:</label>
            <div>
              <select name="status" onChange={handleChange} disabled={isEdit?false:true}>
                <option value="待办">待办</option>
                <option value="进行中">进行中</option>
                <option value="已完成">已完成</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="priority">任务优先级:</label>
            <div>
              <select name="priority" onChange={handleChange} disabled={isEdit?false:true}>
                <option value="低">低</option>
                <option value="中">中</option>
                <option value="高">高</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="desc">任务描述:</label>
            <div><textarea name="desc" value={newTasks.desc} onChange={handleChange} disabled={isEdit?false:true}/></div>
          </div>
          {isEdit ? <button type="submit">提交</button> : <button onClick={handleEdit}>编辑</button>}
          <button onClick={() => { navigate('/') }}>返回</button>
        </form>
      </div>
  )

}

export default Detail;