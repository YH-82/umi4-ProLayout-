import { Outlet } from "@umijs/max"
import { ProLayout } from "@ant-design/pro-components";

export default function Layout(props) {
    console.log(props);

    return (
        <ProLayout
            menuDataRender={menuList => {
                console.log('menuList', menuList);
                return []
            }}
        >
            <Outlet />
        </ProLayout>

    )
}