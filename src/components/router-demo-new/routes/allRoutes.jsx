import { Navigate } from "react-router-dom";
import ChildPage1 from "../pages/ChildPage1";
import ChildPage2 from "../pages/ChildPage2";
import GrandChildPage1 from "../pages/GrandChildPage1";
import GrandChildPage2 from "../pages/GrandChildPage2";
import LastChild1 from "../pages/LastChild1";
import LastChild2 from "../pages/LastChild2";
import LastChild3 from "../pages/LastChild3";
import LastChild4 from "../pages/LastChild4";

export default [
    {
        path: '/childPage1',
        element: <ChildPage1 />,
        children: [
            {
                path: 'grandChildPage1',
                element: <GrandChildPage1 />,
                children: [
                    {
                        //在地址中匹配key
                        path: 'lastChild1/:id/:name',
                        element: <LastChild1 />
                    },
                    {
                        path: 'lastChild2',
                        element: <LastChild2 />
                    },
                    {
                        path: 'lastChild3',
                        element: <LastChild3 />
                    },
                    {
                        path: 'lastChild4',
                        element: <LastChild4 />
                    },
                ]
            },
            {
                path: 'grandChildPage2',
                element: <GrandChildPage2 />
            }
        ]
    },
    {
        path: '/childPage2',
        element: <ChildPage2 />,
        children: [
            {
                path: 'grandChildPage1',
                element: <GrandChildPage1 />
            },
            {
                path: 'grandChildPage2',
                element: <GrandChildPage2 />
            }
        ]
    },
    {
        path: '/', //需要设定默认路径
        element: <Navigate to="/childPage1"/>
    }
]