/**
* @Description: Home Page
* @Author: linhnh
*/

const{
  AppBar,
  LeftNav,
  MenuItem,
  RaisedButton,
  CardMedia,
  CardHeader,
  IconButton
} = mui;

var customPalette = {
  primary1Color: "#ff6666",
  accent1Color: "#c0c0c0"
};

const ThemeManager = new mui.Styles.ThemeManager();
ThemeManager.setPalette(customPalette);

menuItems = [
  { route: 'get-started', text: 'Gửi yêu cầu' },
  { route: 'customization', text: 'Danh sách yêu cầu' },
  { type: MenuItem.Types.SUBHEADER, text: 'Thiết lập' },
  { route: 'customization', text: 'Trợ giúp và góp ý' },
  { route: 'customization', text: 'Giới thiệu' },
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
    let header = (
      <div className="headerLeftNav">
        <CardHeader
          title="Đăng nhập"
          avatar="images/no_avatar.jpg"/>
      </div>
    );
    return (
      <div>
        <AppBar
          title=""
          onLeftIconButtonTouchTap={this.onOpenLeftNav}
          iconElementRight={
            <div>
              <IconButton iconClassName="icon-call" />
              <IconButton iconClassName="icon-help" />
            </div>
          } />
        <LeftNav
          ref="leftNav"
          docked={false}
          menuItems={menuItems}
          header={header} />
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
