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
  clickToChooseSkill(){
    var name = this.refs.taskerName.getValue();
    var phone = this.refs.taskerPhone.getValue();
    var email = this.refs.taskerEmail.getValue();
    this.setState({taskerName: name});
    this.setState({taskerPhone: phone});
    this.setState({taskerEmail: email});

  },


  render() {
    return (
      <div className="container">
      <AppBar
      title="Choose them."
      zDepth={0}
      iconElementRight={<FlatButton label="<< Back" />}
       />

      <RaisedButton id="finishStep" label="Finish" secondary={true} fullWidth={true} onClick={this.clickFinishStep}/>
      </div>
    );
  }
});
