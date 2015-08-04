/**
* @Description: Home Page
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
const ThemeManager = new mui.Styles.ThemeManager();

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

Customer = React.createClass({
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
              leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
              primaryText="Massage tại nhà" />
          </List>
      </div>
    );
  }
});
