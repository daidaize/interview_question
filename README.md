
## 创建项目
`npm create vite@latest`
技术栈：vite + react + react-router-dom + less
## 项目结构搭建
1. 创建pages/用来存放所有页面对应的组件
2. 创建components/用来存放所有的公共组件
3. 创建context/用来管理全局状态
4. 创建constants/用来管理全局常量
5. 创建router/配置页面路由
## 根组件
main.jsx中渲染
<错误边界组件>
  <全局的Context>
    <路由组件>
    </路由组件>
  </全局的Context>
</错误边界组件>
## 列表页/首页
1.导入了必要的模块和组件
2.定义了一个名为Home的函数组件
3.在组件内部，使用useNavigate钩子来获取navigate函数，用于导航到不同的路由。还使用useContext钩子来获取全局的任务列表和设置任务列表的函数
4.定义了一个名为handleDelete的函数，用于处理删除任务的点击事件。在这个函数中，使用setTasks函数将任务列表中不包含被删除任务的任务列表更新到全局状态
5.定义了一个名为handleHotSort和handleLowSort的函数，用于处理任务优先级从高到低（低到高）的排序。在这个函数中，首先创建任务列表的副本，然后使用sort方法对副本进行排序，最后使用setTasks函数将排序后的任务列表更新到全局状态
6.最后，返回一个包含任务列表的JSX元素
## 新增页
1.导入了必要的模块和组件
2.定义了一个名为Add的函数组件
3.在组件内部，使用useNavigate钩子来获取navigate函数，用于导航到不同的路由。还使用useContext钩子来获取全局的任务列表和设置任务列表的函数
4.使用useState钩子来创建一个名为newTasks的状态变量，用于存储新任务的详细信息
5.定义了一个名为handleSubmit的函数，用于处理表单的提交事件。在这个函数中，首先阻止表单的默认提交行为，然后使用setTasks函数将新任务添加到任务列表中，最后使用navigate函数导航到主页
6.定义了一个名为handleChange的函数，用于处理输入框和选择框的更改事件。在这个函数中，使用setNewTasks函数更新newTasks的状态
7.最后，返回一个包含表单的JSX元素
## 详情页
1.导入了必要的模块和组件
2.定义了一个名为Detail的函数组件
3.在组件内部，使用useLocation钩子来获取location对象，用于获取路由参数。还使用useNavigate钩子来获取navigate函数，用于导航到不同的路由。还使用useContext钩子来获取全局的任务列表和设置任务列表的函数
4.使用useState钩子来创建两个状态变量：newTasks和isEdit。newTasks用于存储当前任务的详细信息，isEdit用于存储当前是否处于编辑状态
5.定义了一个名为handleSubmit的函数，用于处理表单的提交事件。在这个函数中，首先阻止表单的默认提交行为，然后使用setTasks函数将任务列表中不包含被删除任务的任务列表更新到全局状态，最后使用navigate函数导航到主页
6.定义了一个名为handleChange的函数，用于处理输入框和选择框的更改事件。在这个函数中，使用setNewTasks函数更新newTasks的状
7.定义了一个名为handleEdit的函数，用于处理编辑按钮的点击事件。在这个函数中，使用setIsEdit函数将编辑状态更新为true
8.最后，返回一个包含表单的JSX元素

## 全局常量
1.定义了一个名为TASKSLIST的常量，它是一个包含一个任务的数组。每个任务都有一个id、title、desc、status和priority属性
2.定义了一个名为THLIST的常量，它是一个包含列标题的数组
3.定义了一个名为TASKSTATUS的常量，它是一个包含任务状态的映射对象。每个状态都有一个对应的数字值
4.定义了一个名为TASKPRIORITY的常量，它是一个包含任务优先级的映射对象。每个优先级都有一个对应的数字值


## 配置页面路由
1.创建了一个名为router.js的文件，用于配置页面路由
2.使用react-router-dom库中的BrowserRouter组件来创建一个路由器
3.使用Routes组件来定义路由规则。每个路由规则都包含一个path属性和一个element属性。path属性定义了路由的路径，element属性定义了当路由匹配时应该渲染的组件
4.定义了一个名为Home的组件，用于渲染首页
5.定义了一个名为Add的组件，用于渲染新增页
6.定义了一个名为Detail的组件，用于渲染详情页

## 错误边界组件
1.创建了一个名为ErrorBoundary的函数组件
2.在组件内部，使用useState钩子来创建一个名为hasError的状态变量，用于存储是否发生了错误
3.定义了一个名为componentDidCatch的函数，用于处理错误。在这个函数中，使用setState函数将hasError的状态更新为true
4.定义了一个名为render函数，用于渲染组件。在这个函数中，如果hasError为true，则渲染一个包含错误信息的JSX元素；否则，渲染props.children
5.最后，返回一个包含render函数的JSX元素.