/**
* @Description: Services List
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

ListService = React.createClass({
  // This mixin makes the getMeteorData method work
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  onCheck() {
    console.log("asd");
  },

  render() {
    return (
      <ListItem
        rightToggle={ <Checkbox onCheck={this.onCheck}/>}
        leftAvatar={<Avatar> {this.props.avatar} </Avatar>}
        primaryText={this.props.text} />
    );
  }
});
