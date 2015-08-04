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
    let services = [{avatar:"HM" , text: "Home Massage"},
    {avatar:"HC" , text: "House Cleaning"},
    {avatar:"HS" , text: "Help Shopping"},
    {avatar:"HC" , text: "Help Cooking"},
    {avatar:"DT" , text: "Document Translate"}];
    return services.map((service) => {
      return <ListItem
        rightToggle={ <Checkbox onCheck={this.onCheck.bind(this,service.text)}/>}
        leftAvatar={<Avatar> {service.avatar} </Avatar>}
        primaryText={service.text} />;
    });
  },

  clickFinishStep() {
    Meteor.call("createHelper",this.props);
    React.render(<HomeTasker />, document.getElementById("render-target"));
  },

  render() {
    return (
      <div className="container">
        <AppBar
          title="Choose them."
          zDepth={0}
          iconElementRight={<FlatButton label="<< Back" />}
          />
        <CardText>
          Choose your services you can provide
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
