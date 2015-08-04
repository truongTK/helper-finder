const{
  AppBar,
  RaisedButton,
  CardMedia
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

  onCustomerClick(){
    React.render(<Customer />, document.getElementById("render-target"));
  },

  becomeAHelper() {
      React.render(<TakePhoto />,document.getElementById("render-target"));
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
            fullWidth={true}
            onClick={this.onCustomerClick} />
        </div>
        <div className="button-secondary">
          <RaisedButton
            label="Bạn đã sẵn sàng nhận việc ?"
            secondary={true}
            fullWidth={true}
            onClick={this.becomeAHelper}/>
        </div>
        <div className="button-secondary">
          <CardMedia>
            <img src="icons/img/home-page.png"/>
          </CardMedia>
        </div>
      </div>
    );
  }
});
