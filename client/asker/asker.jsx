/**
* @Description: Asker Page
* @Author: linhnh,truongtk
*/

const{
  AppBar,
  LeftNav,
  MenuItem,
  List,
  ListItem,
  Avatar,
  IconButton
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

  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      services: Service.find().fetch()
    }
  },

  getInitialState: function () {
    return {
      selectedServiceId: []
    };
  },

  onOpenLeftNav(){
    this.refs.leftNav.toggle();
  },

  onClickBack() {
    React.render(<HomePage />, document.getElementById("render-target"));
  },

  selectService(serviceId) {
    this.setState({
      selectedServiceId: [serviceId]
    });
    console.log(this.state.selectedServiceId);
  },

  render() {
    return (
      <div>
        <AppBar
          className="appbar"
          title="Tôi cần giúp..."
          onLeftIconButtonTouchTap={this.onOpenLeftNav}
          iconElementRight={<IconButton iconClassName="icon-back" onClick={this.onClickBack} />} />
          <LeftNav ref="leftNav" docked={false} menuItems={menuItems} />
          <div className="service">
            <ListService
              services={this.data.services}
              selectedServiceId={this.state.selectedServiceId}
              onServiceSelected={this.selectService} />
          </div>
      </div>
    );
  }
});
