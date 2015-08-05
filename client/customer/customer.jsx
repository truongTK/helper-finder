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

  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      services: Service.find().fetch()
    }
  },

  getInitialState: function () {
    return {
      selectedServiceId: null
    };
  },

  selectService(serviceId) {
    console.log(serviceId);
    this.setState({
      selectedServiceId: serviceId
    });
  },

  render() {
    return (
      <div>
        <AppBar
          title="Tôi cần giúp..."/>
        <ListService
          services={this.data.services}
          selectedService={this.state.selectedServiceId}
          onServiceSelected={this.selectService} />
      </div>
    );
  }
});
