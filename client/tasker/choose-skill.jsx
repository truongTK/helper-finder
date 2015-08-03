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
  ListItem
} = mui;

const ThemeManager = new mui.Styles.ThemeManager();

ChooseSkill = React.createClass({
  // This mixin makes the getMeteorData method work
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  chooseService(text){
    console.log(text);
  },

  renderService() {
    let services = [{avatar:"images/avatar.jpg" , text: "Home Massage"},
    {avatar:"images/avatar.jpg" , text: "House Cleaning"}];
    return services.map((service) => {
      return (
        <ListItem
          leftAvatar={<Avatar src={service.avatar} />}
          primaryText={service.text} onMouseEnter={this.chooseService(service.text)}/>
      );
    });
  },

  clickFinishStep() {
  },

  render() {
    return (
      <div className="container">
        <AppBar
          title="Choose them."
          zDepth={0}
          iconElementRight={<FlatButton label="<< Back" />}
          />
        <div className="service">
          <List>
            {this.renderService()}
          </List>
        </div>
        <RaisedButton id="finishStep" label="Finish" secondary={true} fullWidth={true} onClick={this.clickFinishStep}/>
      </div>
    );
  }
});
