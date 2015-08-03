const{
  AppBar,
  RaisedButton
} = mui;
const ThemeManager = new mui.Styles.ThemeManager();

HomePage = React.createClass({
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
          title=""
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          showMenuIconButton={false} />
        <br/>
        <div className="button-secondary">
          <RaisedButton
            label="Bạn cần giúp gì ?"
            primary={true}
            fullWidth={true} />
        </div>
        <div className="button-secondary">
          <RaisedButton
            label="Bạn đã sẵn sàng nhận việc ?"
            secondary={true}
            fullWidth={true} />
        </div>
      </div>
    );
  }
});
