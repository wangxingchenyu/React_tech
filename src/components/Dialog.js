import React, {Component} from 'react'  //必须要有,必须要引入
export default function Dialog(props) {
    let {title, content, footer, children} = props;
    return <div className='container'>
        <div className='card text-white bg-dark' style={{marginBottom: "20px"}}>
            <div className='card-header'>{title ? title : "没有命名"}</div>
            <div className='card-body'>{children ? children : "没有给内容"}</div>
            <div className='card-footer'>{footer ? footer : "没有给尾部内容"}</div>
        </div>
    </div>
}

d
