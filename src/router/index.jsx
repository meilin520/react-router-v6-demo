import * as React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { KeepAlive } from 'react-activation';
import RequireAuth from '../views/Auth/RequireAuth';
import routes from './routes';
import Modal from '../views/Modal';

/**
 * 路由标签递归生成器
 * @param {*} array 
 */
const recursiveRoutes = (array) => {
    return array.map((item)=>{
        // 注意：这里的Component 引用一定用使用组件标签形式，如<C />
        const Element = item.component;
        let Component = null;
        if(item.meta){
            // 是否是权限页面，是则套RequireAuth组件
            if(item.meta.requireAuth){
                Component = (<RequireAuth><Element /></RequireAuth>);
            }
            // 是否是缓存组件，是则套KeepAlice组件
            if(item.meta.keepAlive){
                Component = (<KeepAlive><Element /></KeepAlive>);
            }
        }else{
            Component = <Element />;
        }
        if(item.children&&item.children.length) {
            return (
                <Route key={item.name} path={item.path} element={Component}>
                    {recursiveRoutes(item.children)}
                </Route>
            )
        }
        return (<Route index={Boolean(item.index)} key={item.name} path={item.path} element={Component}></Route>)
    })
}

// 路由结构
const Router = () => {
    let location = useLocation();
    let state = location.state;
    return (
        <React.Fragment>
        <Routes>
            {routes.length? recursiveRoutes(routes): <Route path="*" element={<Navigate path="*"/>}></Route>}
        </Routes>
        {state?.backgroundLocation && (
            <Routes>
                <Route path="/img/:id" element={<Modal />} />
            </Routes>
        )}
        </React.Fragment>
    );
}

export default Router;