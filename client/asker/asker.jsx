/**
* @Description: Home Page
* @Author: linhnh,truongtk
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

  renderService() {
    return Service.find().fetch().map((service) => {
      return <ListItem
        leftAvatar={<Avatar src={service.icon}/>}
        primaryText={service.text} />;
    });
  },

  render() {
    return (
      <div>
        <AppBar
          title="Tôi cần giúp..."
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.onOpenLeftNav} />
          <LeftNav ref="leftNav" docked={false} menuItems={menuItems} />
            <div className="service">
              <List>
                {this.renderService()}
              </List>
            </div>
      </div>
    );
  }
});
