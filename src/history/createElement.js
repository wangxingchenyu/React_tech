export function createElement(type, props, ...childrens) {
    //如果childrens是一个内容则取第一个，如果没有，则取空，如果有多个，则取多个
    let obj = {
        type: typeof type === 'function' ? type() : type,//判断如果type是一个函数的话，则先执行再进行判断 ，如果不是的等方面，则直接返回
        props: {
            ...props,
            children: childrens.length <= 1 ? (childrens[0] || "") : childrens
        },
        key: null,
        ref: null
    };
    //修复之前处理的key ,ref bug内容
    'key' in obj.props ? (obj.key = obj.props.key, obj.props.key = undefined) : null;
    'ref' in obj.props ? (obj.ref = obj.props.ref, obj.props.ref = undefined) : null;
    return obj;
}

/***
 *  组件的特点:
 *
 *    - 可维护性强
 *    -  复用性强
 *
 *    - 如果type 是一个函数，在组件里面，已经引入了 import  Recat,{Component} from react
 *
 *    这个时候{type:div ,props:{...children},key,ref}
 *    只需要对于type 进行判断，如果是一个函数，则直接反选，将返回的结果赋于type，无需再更改Render里面的内容
 *
 * @param obj
 * @param container
 * @param callback
 */
export function render(obj, container, callback) {
    let {type, props} = obj;
    //用type来创建一个元素
    let el = document.createElement(type);

    for (let attr in props) {
        //求取每个属性的值
        let value = props[attr];
        //第一种处理className
        switch (attr) {
            case 'className':
                el.setAttribute('class', value);
                break;
            case 'style':
                for (let key in value) {
                    el['style'][key] = value[key];
                }
                break;
            case "children":
                !(value instanceof Array) ? value = [value] : null;
                value.forEach((item, key) => {
                    if (typeof item === 'string') {
                        let textNode = document.createTextNode(item);
                        el.appendChild(textNode);
                    } else {
                        render(item, el);  //自己调自己，就叫做递归
                    }
                });
                break;
            default:
                el.setAttribute(attr, value);
                break
        }
    }
    container.appendChild(el);
    callback && callback();
}

/*
第一个，我们写自己的createElement
 1)声明好对象
 2）对象里面有type,props,key,ref
 3）props是由传递进来props和children构成
 3)children 可以是一个文本字符串，也可以个数组
 4)如果children是一个数组的话，则要在render里面进行判断 ，然后执行递归操作
 5) render传递三个参数
    - ） jsx对象
    二） 挂载的元素
    三） callback
    四） 对于jsxojb 进行解构
    五） 根据type 来创建元素
    六） 解构props 里面有三个特殊的属性需要switch处理
        - ）className
        二）style
        三）children


第二个，写自己的render

 */




