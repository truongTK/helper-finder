//@Description: This file define update basic infomation of tasker.
//@Owner: Toanpp
const {
  AppBar,
  RaisedButton,
  IconButton,
  NavigationClose,
  FlatButton,
  IconMenu,
  FontIcon,
  TextField,
  Avatar
} = mui;

const ThemeManager = new mui.Styles.ThemeManager();

TaskerInfo = React.createClass({
  // This mixin makes the getMeteorData method work
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getInitialState() {
    return {
      taskerName: null,
      taskerPhone:null,
      taskerEmail:null
    }
  },

  getChildContext () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  getDefaultProps: function() {
    return {
      taskerName: "",
      taskerPhone: "",
      taskerEmail: "",
    };
  },

  clickToChooseSkill(){
    var name = this.refs.taskerName.getValue();
    var phone = this.refs.taskerPhone.getValue();
    var email = this.refs.taskerEmail.getValue();
    this.setState({taskerName: name});
    this.setState({taskerPhone: phone});
    this.setState({taskerEmail: email});
    React.render(
      <ChooseSkill
        taskerName={name}
        taskerPhone={phone}
        taskerEmail={email}/>
      , document.getElementById("render-target"));
    },

    onClickBack() {
      React.render(<TakePhoto />,document.getElementById("render-target"));
    },

    render() {
      return (
        <div id ="container" className="container">
          <AppBar
            title="Your basic infomation"
            zDepth={0}
            iconElementRight={<FlatButton label="<< Back" onClick={this.onClickBack}/>}
            />
          <div id="taskerAvatar">
            <Avatar src="images/avatar.jpg" size="80"/>
          </div>
          <div className="userName">
            <TextField ref="taskerName"
              floatingLabelText="Your full name"
              hintText="Example: John Smith"
              defaultValue={this.props.taskerName}
              fullWidth={true}
              id="taskerName"/>
          </div>
          <div className="phoneNumber">
            <TextField ref="taskerPhone"
              floatingLabelText="Your phone number"
              hintText="Example: 01228833055"
              defaultValue={this.props.taskerPhone}
              fullWidth={true}
              id="taskerPhone"/>
          </div>
          <div className="phoneNumber">
            <TextField ref="taskerEmail"
              floatingLabelText="Your email (optional)"
              hintText="Example: toanpp@twin.vn"
              defaultValue={this.props.taskerEmail}
              fullWidth={true}
              id="taskerPhone"/>
          </div>
          <RaisedButton id="nextToChooseSkill" label="Next" secondary={true} fullWidth={true} onClick={this.clickToChooseSkill}/>
        </div>
      );
    }
  });
