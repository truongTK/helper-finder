/**
* @Description: Tasker choose skill
* @Author: truongtk
*/

const {
  AppBar,
  RaisedButton,
  IconButton,
  NavigationClose,
  FlatButton,
  IconMenu,
  FontIcon,
  TextField,
  Avatar,
  List,
  ListItem,
  CardText,
  Checkbox
} = mui;

const ThemeManager = new mui.Styles.ThemeManager();

ChooseSkill = React.createClass({
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

  clickFinishStep() {
    Meteor.call("createHelperAccount",this.props);
    React.render(<HomeTasker />, document.getElementById("render-target"));
  },
  onClickBack() {
    React.render(<TaskerInfo
      taskerName={this.props.taskerName}
      taskerPhone={this.props.taskerPhone}
      taskerEmail={this.props.taskerEmail} />
    , document.getElementById("render-target"));
  },
  selectService(serviceId) {
    if (this.state.selectedServiceId.indexOf(serviceId)!= -1) {
      this.state.selectedServiceId.splice(this.state.selectedServiceId.indexOf(serviceId), 1)
    } else {
      this.state.selectedServiceId.push(serviceId)
    }
    this.setState({
      selectedServiceId: this.state.selectedServiceId
    });
    console.log(this.state.selectedServiceId);
  },

  render() {
    return (
      <div className="container">
        <AppBar
          title="Choose them."
          zDepth={0}
          iconElementRight={<FlatButton label="<< Back" onClick={this.onClickBack}/>}
          />
        <CardText>
          Choose services you can provide
        </CardText>
        <div className="service">
          <ListService
            services={this.data.services}
            selectedServiceId={this.state.selectedServiceId}
            onServiceSelected={this.selectService} />
        </div>
        <RaisedButton id="finishStep" label="Finish" secondary={true} fullWidth={true} onClick={this.clickFinishStep}/>
      </div>
    );
  }
});
