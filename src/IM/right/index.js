import React , {Component} from 'react';
import { notification,Icon,Avatar,Input,Tabs,Modal, Menu, Dropdown, Button, message } from 'antd';
import globals from '../../components/unit';
const Search = Input.Search;
const TabPane = Tabs.TabPane;
const { TextArea } = Input;
export default class right extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount(){
    var that = this;

  }

  handleButtonClick = (e) => {
    message.info('Click on left button.');
    console.log('click left button', e);
  }

  handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  }





  render() {
    const menu = (
        <Menu onClick={this.handleMenuClick}>
          <Menu.Item key="1"><Icon type="user" />1st menu item</Menu.Item>
          <Menu.Item key="2"><Icon type="user" />2nd menu item</Menu.Item>
          <Menu.Item key="3"><Icon type="user" />3rd item</Menu.Item>
        </Menu>
      );
    return (
      <div className="main_right">
         <div className="right_message">

         </div>
         <div className="right_input">
            <div className="right_input_pro"></div>
            <div className="right_input_mess">
               <TextArea autosize="true" rows={4} />
            </div>
            <div className="right_input_sent">
                <Dropdown.Button type="primary" onClick={this.handleButtonClick} overlay={menu}>
                      发送
                </Dropdown.Button>
            </div>
         </div>
      </div>
    );
  }
}
