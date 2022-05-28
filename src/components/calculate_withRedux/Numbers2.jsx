import React from 'react'
import { useDispatch } from 'react-redux';
import { storeNumber } from '../redux/actions/count_action';

export default function Numbers2() {
  // 预先定义select中的元素
  const state = {
    "options": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  };
  // 使用dispatch hooks
  const dispatch = useDispatch();

  const select = (event) => {
    console.log(event.target.value, "is selected");
    // 使用dispatch并传入对应的action来让redux执行reducer逻辑
    // 储存选中的number
    dispatch(storeNumber(event.target.value));
  }

  return (
    <div>
      {/* 如何实现将值传入下拉列表和获取选中的下拉列表中的值 */}
      <select onChange={event => select(event)}>
        {
          state.options.map((data, index) => {
            return (
              <option value={data} key={index}>{data}</option>
            )
          })
        }
      </select>
    </div>
  )
}
