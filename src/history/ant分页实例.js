import React from 'react'
import ReactDOM from 'react-dom'
import Parent from "../components/Parent/Parent";
import 'antd/dist/antd.less'
import {Pagination} from 'antd';

function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
}

function change(number, pageSize) {
    /**
     *  @param number  第几页
     *  @param pageSize 一页显示多少条
     */
    console.log(number, pageSize);
}

ReactDOM.render(
    /**
     * @param onShowSizeChange
     */
    <Pagination showSizeChanger defaultPageSize={30} onShowSizeChange={onShowSizeChange}
                defaultCurrent={3} total={500} onChange={change}/>,
    root);
