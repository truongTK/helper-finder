const{
  AppBar,
  List,
  ListItem,
  Avatar
} = mui;
const ThemeManager = new mui.Styles.ThemeManager();

Customer = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render() {
    return (
      <div>
        <AppBar
          title="Tôi cần giúp..."
          iconClassNameRight="muidocs-icon-navigation-expand-more" />
          <List>
            <ListItem
              leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
              primaryText="Massage tại nhà" />
          </List>
      </div>
    );
  }
});
