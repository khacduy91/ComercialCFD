import { Button, Menu, Tooltip } from "antd";
import React from "react";
import { CaretDownOutlined, SearchOutlined } from "@ant-design/icons";
import "./index.scss";
import SubMenu from "antd/lib/menu/SubMenu";
import { Link } from "react-router-dom";
import { imgUrl } from "../../../../../api/config";

class MainHeader extends React.Component {
  //state
  state = {
    current: "home",
  };
  handleClick = (e) => {
    this.setState({ current: e.key });
  };

  render() {
    //Declare
    const { current } = this.state;

    //Style
    const menuStyle = {
      lineHeight: 1,
      border: "none",
      paddingTop: "38px",
    };

    const subMenuStyle = {
      padding: 0,
      border: "none",
      margin: 0,
    };

    return (
      <Menu
        onClick={(e) => this.handleClick(e)}
        selectedKeys={[current]}
        mode="horizontal"
        className="mainHeader"
        style={menuStyle}
      >
        <Menu.Item key="home" style={subMenuStyle}>
          <Link to="/ComercialCFD" className="mainHeader-button">
            HOME
          </Link>
        </Menu.Item>

        <Menu.Item key="shop" style={subMenuStyle}>
          <Link
            to="/ComercialCFD/shop/category/dien-thoai-may-tinh-bang-id1789"
            className="mainHeader-button"
          >
            SHOP
          </Link>
        </Menu.Item>
        <Menu.Item key="about" style={subMenuStyle}>
          <a
            href="https://khacduy91.github.io/DuyVuCV/"
            target="_blank"
            className="mainHeader-button"
          >
            ABOUT
          </a>
        </Menu.Item>

        {/* Logo */}
        <Button type="link" id="logo">
          <Link to="/ComercialCFD">
            <img
              src={`${imgUrl}Image/4375057785_952d0b97-7f3e-419b-8ed4-4c8e62fac080.png`}
              alt="logo"
            />
          </Link>
        </Button>

        <Menu.Item key="news" style={subMenuStyle}>
          <Link to="/ComercialCFD/news" className="mainHeader-button">
            NEWS
          </Link>
        </Menu.Item>

        <Menu.Item key="contact" style={subMenuStyle}>
          <Link to="/ComercialCFD/contact" className="mainHeader-button">
            CONTACT
          </Link>
        </Menu.Item>

        <Tooltip title="search">
          <Button shape="circle" id="tooltip" icon={<SearchOutlined />} />
        </Tooltip>
      </Menu>
    );
  }
}

export default MainHeader;
