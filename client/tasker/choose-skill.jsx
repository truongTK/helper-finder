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
  // This mixin makes the getMeteorData method work
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  onCheck(text) {
    console.log(text);
  },

  renderService() {
    return Service.find().fetch().map((service) => {
      return <ListItem
        rightToggle={ <Checkbox onCheck={this.onCheck.bind(this,service.text)}/>}
        leftAvatar={<Avatar src={service.icon}/>}
        primaryText={service.text} />;
    });
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
          <List>
            {this.renderService()}
          </List>
        </div>
        <RaisedButton id="finishStep" label="Finish" secondary={true} fullWidth={true} onClick={this.clickFinishStep}/>
      </div>
    );
  }
});
