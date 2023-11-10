import { Outlet, useAppData, useAccessMarkedRoutes } from "@umijs/max"
import { ProLayout } from "@ant-design/pro-components";

const findLayoutRoutes = (routes: any[], layoutName: string) => {
    for (let i = 0; i < routes.length; i++) {
        if (Array.isArray(routes[i].children)) {
            if (routes[i].layoutName === layoutName) {
                return routes[i]
            } else {
                const newRoute = findLayoutRoutes(routes[i].children, layoutName)
                if (newRoute) {
                    return newRoute
                }
            }
        }
    }
}

// 格式化路由 处理因 wrapper 导致的 菜单 path 不一致
const mapRoutes = (routes: IRoute[]) => {
    if (routes.length === 0) {
        return []
    }
    return routes.map(route => {
        // 需要 copy 一份, 否则会污染原始数据
        const newRoute = { ...route }
        if (route.originPath) {
            newRoute.path = route.originPath
        }

        if (Array.isArray(route.routes)) {
            newRoute.routes = mapRoutes(route.routes);
        }

        if (Array.isArray(route.children)) {
            newRoute.children = mapRoutes(route.children);
        }

        return newRoute
    })
}

export default function Layout() {
    const { clientRoutes } = useAppData()

    const [route] = useAccessMarkedRoutes(mapRoutes([findLayoutRoutes(clientRoutes, 'BasicLayout')]));

    return (
        <ProLayout route={route}>
            <Outlet />
        </ProLayout>

    )
}