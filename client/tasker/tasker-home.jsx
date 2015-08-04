//@Description: This file define tasker 's home page'
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
  Avatar,
  Tabs,
  Tab,
  Card,
  CardHeader,
  Paper,
  Dialog
} = mui;

const ThemeManager = new mui.Styles.ThemeManager();

HomeTasker = React.createClass({
  // This mixin makes the getMeteorData method work
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  _handleCustomDialogTouchTap() {
    this.refs.customDialog.show();
  },
  clickJob(){
    //Custom Actions
    let customActions = [
    <FlatButton
      label="Cancel"
      secondary={true}
      onTouchTap={this._handleCustomDialogCancel} />,
    <FlatButton
      label="Submit"
      primary={true}
      onTouchTap={this._handleCustomDialogSubmit} />
    ];
    return(
      <Dialog
        ref="customDialog"
        title="Dialog With Custom Actions"
        actions={customActions}
        modal={false}>
        The actions in this window were passed in as an array of react objects.
      </Dialog>
    );
  },
  unpickJobRender(){
    return(
      <Card>
        <CardHeader

          title="Cleaning"
          subtitle="01/08/2015 10AM - 01/08/2015 10PM"
          avatar={<Avatar>CL</Avatar>}
          showExpandableButton={true} onTouchTap={this._handleCustomDialogTouchTap}>

        </CardHeader>
        <CardHeader
          title="Moving"
          subtitle="02/08/2015 10AM - 02/08/2015 10PM"
          avatar={<Avatar>MV</Avatar>}
          showExpandableButton={true}/>
      </Card>
    );
  },


  render() {
    return (
      <div className="container">
        <AppBar
          title="Tasker Home"
          zDepth={0}
          />
        <Tabs zDepth={1}>
          <Tab label="Pick more jobs" >
            <div>
              {this.unpickJobRender()}
            </div>
          </Tab>
          <Tab label="Your pending jobs" >
            <div>
              <Paper zDepth={0}>
                <p>You don't have any job</p>
              </Paper>
            </div>
          </Tab>
        </Tabs>

      </div>
    );
  }
});
