import { Layout, Menu } from "antd";
// import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

const { Sider } = Layout;

export const Sidebar: React.FC = () => {
    const router = useRouter();
    return (
        <Sider width={300} className="site-layout-background">
            <Menu
                mode="inline"
                selectedKeys={[router.pathname.replaceAll("/", "")]}
                style={{ height: "100%", borderRight: 0 }}
            >
                <Menu.Item
                    key="monthlyBudgetReport"
                    onClick={() => {
                        router.push("/monthlyBudgetReport");
                    }}
                >
                    Project Wise Budget Report
                </Menu.Item>
                <Menu.Item
                    key="projectLoggedHours"
                    onClick={() => {
                        router.push("/projectLoggedHours");
                    }}
                >
                    Project Wise Logged Hours
                </Menu.Item>
                <Menu.Item
                    key="employeeLoggedHours"
                    onClick={() => {
                        router.push("/employeeLoggedHours");
                    }}
                >
                    Employee Wise Logged Hours
                </Menu.Item>
            </Menu>
        </Sider>
    );
};
