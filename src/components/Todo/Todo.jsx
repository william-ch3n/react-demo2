import React, { Component } from 'react';
import './Todo.css';

export default class Todo extends Component {

  state = {
    taskList : [], // todo列表
    taskAll : 0, // todo总数
    taskDone : 0, // todo已完成总数
    taskId: 0, // todo id用于给任务编号
    checkAll: false // 用于标记todo是否打勾
  }

  /*
    回应键盘上的enter输入，再触发添加任务
    键入的键盘的值可以直接通过event.keyCode来获取
    生成一个task对象，获取输入框中的数据。然后清除输入框中的数据。
   */
  enterTask = (event) => {
    if(event.keyCode === 13){
      if(event.target.value.trim() === ""){
        alert("输入不能为空！");
        return;
      }
      let taskList = this.state.taskList;
      let task = {id : this.state.taskId, name : event.target.value, check : false}
      taskList = [task, ...taskList];
      this.setState({taskList, taskId: this.state.taskId+1, taskAll: taskList.length});
      event.target.value = null;
    }
  }

  /*
    删除单个任务。
    难点在于如何通过deleteOne的id获取taskId
   */
  deleteOneTask = (event) => {
    let deleteOneId = event.target.id;
    let taskId = deleteOneId.replace("deleteOne_", "")
    let taskList = this.state.taskList;
    let done = this.state.taskDone;

    for(let i = 0; i < taskList.length; i++){
      if(taskList[i].id == taskId){
        done = taskList[i].check == true ? done - 1 : done;
        taskList.splice(i, 1);
        break;
      }
    }
    this.setState({taskList, taskAll: taskList.length, taskDone: done});
  }

  /*
    给task打勾/取消打勾
    由于列表中的元素个数会变动，所以需要遍历来获取对应task对象
    并动态改动taskDone的数量
   */
  taskCheck = (event) => {
    let taskList = this.state.taskList;
    let targetId = event.target.id.replace("check_","");
    let count = this.state.taskDone;
    for(let i = 0; i < taskList.length; i++){
      if(taskList[i].id == targetId){
        taskList[i].check = !taskList[i].check;
        count = taskList[i].check ? count+1 : count-1;
        break;
      }
    }
    this.setState({taskList, taskDone: count});
  }


  /*
    全选所有任务/反全选所有任务
    遍历所有对象，并将其checked属性取反
   */
  toggleAll = () => {
    let taskList = this.state.taskList;
    let flag = !this.state.checkAll;
    for(let i = 0; i < taskList.length; i++){
      let id = taskList[i].id;
      let checkbox = document.getElementById("check_"+id);
      checkbox.checked = flag;
      taskList[i].check = flag;
    }
    this.setState({taskList, taskDone: flag ? this.state.taskAll : 0, checkAll : flag});
  }

  /*
    删除全部
    重置所有state属性
   */
  deleteAllDone = () => {
    let tasks = this.state.taskList;
    let deleteAllFlag = window.confirm("Are you sure to delete all?");
    if(deleteAllFlag == true){
      for(let i = tasks.length-1; i >=0; i--){
        if(tasks[i].check == true){
          tasks.splice(i,1);
          this.state.taskAll--;
        }
      }
      this.setState({taskList:tasks, taskDone:0, taskAll:this.state.taskAll, checkAll:false});
    }
    
  }


  render() {
    return (
    <div className="outFrame">
    {/* header */}
    <div className="inputArea">
      <span className="inputSpan">Add new task:</span>
      <input className="inputInput" type="text" placeholder="enter new task..." onKeyUp={(event) => {this.enterTask(event)}}/>
    </div>

    <div className="taskList">
      {
        this.state.taskList.map(
          (task) => {
            return (
              <div className="taskDiv" key={"task_"+task.id} id={"task_"+task.id}>
                <input className="taskCheck" id={"check_"+task.id} type="checkbox" onChange={ (event)=> {this.taskCheck(event)}}/>
                <span className="taskName">{task.name}</span>
                <button className="deleteOne" key={"deleteOne_"+task.id} id={"deleteOne_"+task.id} onClick={(event) => {this.deleteOneTask(event)}}>delete</button>
              </div>
            )
          }
        )
      }
      </div>

      <input type="checkbox" onChange={ this.toggleAll }/>
      <span>已完成{this.state.taskDone} / 全部{this.state.taskAll}</span>
      <button className="deleteAll" onClick={this.deleteAllDone}>Delete done</button>
    </div>
    )
  }
}
