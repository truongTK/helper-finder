/**
* @Description: Asker Page
* @Author: linhnh
*/

const{
  AppBar,
  LeftNav,
  MenuItem,
  List,
  ListItem,
  Avatar
} = mui;

var customPalette = {
  primary1Color: "#ff6666",
  accent1Color: "#c0c0c0"
};

const ThemeManager = new mui.Styles.ThemeManager();
ThemeManager.setPalette(customPalette);

menuItems = [
  { route: 'get-started', text: 'Get Started' },
  { route: 'customization', text: 'Customization' },
  { route: 'components', text: 'Components' },
  { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
  {
     type: MenuItem.Types.LINK,
     payload: 'https://github.com/callemall/material-ui',
     text: 'GitHub'
  },
  {
     text: 'Disabled',
     disabled: true
  },
  {
     type: MenuItem.Types.LINK,
     payload: 'https://www.google.com',
     text: 'Disabled Link',
     disabled: true
  },
];

Asker = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  onOpenLeftNav(){
    this.refs.leftNav.toggle();
  },

  render() {
    return (
      <div>
        <AppBar
          title="Tôi cần giúp..."
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.onOpenLeftNav} />
          <LeftNav ref="leftNav" docked={false} menuItems={menuItems} />
          <List>
            

            <ListItem
              leftAvatar={<Avatar src="icons/img/home-massage.png" />}
              primaryText="Massage tại nhà" />
            <ListItem
              leftAvatar={<Avatar src="icons/img/house-cleanning.png" />}
              primaryText="Dọn dẹp nhà" />
            <ListItem
              leftAvatar={<Avatar src="icons/img/shopping-help.png" />}
              primaryText="Đi chợ giúp" />
            <ListItem
              leftAvatar={<Avatar src="icons/img/cook-help.png" />}
              primaryText="Nấu ăn giúp" />
            <ListItem
              leftAvatar={<Avatar src="icons/img/baby-care.png" />}
              primaryText="Chăm sóc bé yêu" />
            <ListItem
              leftAvatar={<Avatar src="icons/img/elderly-care.png" />}
              primaryText="Chăm sóc người già" />
            <ListItem
              leftAvatar={<Avatar src="icons/img/medical.png" />}
              primaryText="Thầy thuốc tại nhà" />
            <ListItem
              leftAvatar={<Avatar src="icons/img/reparing.png" />}
              primaryText="Sửa đồ gia dụng tại nhà" />
            <ListItem
              leftAvatar={<Avatar src="icons/img/text-translate.png" />}
              primaryText="Dịch thuật văn bản" />
            <ListItem
              leftAvatar={<Avatar src="icons/img/teaching.png" />}
              primaryText="Dạy học tại nhà" />
          </List>
      </div>
    );
  }
});
