const {
  AppBar,
  RaisedButton,
  IconButton,
  NavigationClose,
  FlatButton,
  IconMenu,
  FontIcon,
  TextField,
  Paper,
  Card,
  CardText
} = mui;

const ThemeManager = new mui.Styles.ThemeManager();

Test = React.createClass({
  // This mixin makes the getMeteorData method work
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render() {
    return (
      <div className="body">
        <Paper>
          <CardText>
            Hi there, Hi Helloworld. I am free here.
          </CardText>
        </Paper>
      </div>
    );
  }
});
