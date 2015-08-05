/**
* @Description: Home Page
* @Author: linhnh
*/

const{
  AppBar,
  LeftNav,
  MenuItem,
  RaisedButton,
  CardMedia
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

HomePage = React.createClass({
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

  onCustomerClick(){
    React.render(<Asker />, document.getElementById("render-target"));
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
          onLeftIconButtonTouchTap={this.onOpenLeftNav} />
        <LeftNav ref="leftNav" docked={false} menuItems={menuItems} />
        <br/>
        <div className="button-secondary">
          <RaisedButton
            label="Bạn cần giúp gì ?"
            secondary={true}
            fullWidth={true}
            onClick={this.onCustomerClick} />
        </div>
        <div className="button-secondary">
          <RaisedButton
            label="Bạn đã sẵn sàng nhận việc ?"
            primary={true}
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
