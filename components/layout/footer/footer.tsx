import React, { CSSProperties } from "react";
import Image from "next/image";
import { Space } from "antd";
import {
  GithubOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

export const Footer: React.FC = () => {
  const iconStyle: CSSProperties = {
    fontSize: 22,
    color: "#fff",
  };
  return (
    <div
      style={{
        backgroundColor: "#282c34",
        color: "#fff",
        textAlign: "center",
        paddingTop: 32,
        paddingBottom: 32,
      }}
    >
      <Space direction="vertical" size="large" className="d-flex justify-content-between ]align-items-center">
        <Image
          src="/icons/pankod-icon.svg"
          alt="pankod"
          width="140"
          height="28"
        />
        <Space align="center" className="d-flex" size="middle" data-testid="icons-container">
          <a
            href="https://github.com/pankod"
            target="_blank"
            data-testid="pankod-logo"
            style={iconStyle}
          >
            <GithubOutlined />
          </a>
          <a
            href="https://twitter.com/PankodDev"
            target="_blank"
            style={iconStyle}
          >
            <TwitterOutlined />
          </a>
          <a
            href="https://www.youtube.com/channel/UCBGOeQkv1XW3ptryLWlQbAQ"
            target="_blank"
            style={iconStyle}
          >
            <YoutubeOutlined />
          </a>
          <a
            href="https://www.linkedin.com/company/pankod-yazilim-ve-danismanlik/"
            target="_blank"
            style={iconStyle}
          >
            <LinkedinOutlined />
          </a>
        </Space>
      </Space>
    </div>
  );
};
