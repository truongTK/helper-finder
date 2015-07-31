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
  CardText,
  CardMedia,
  CardTitle
} = mui;

const ThemeManager = new mui.Styles.ThemeManager();

TakePhoto = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  getInitialState() {
    return {
      takePhoto: true,
    };
  },

  takeAPicture() {
    var cameraOptions = {
      width: 200,
      height: 300
    };
    MeteorCamera.getPicture(cameraOptions, function (error, data) {
      if (!error) {
        console.log(data);
        $('.photo').attr('src', data);
      }
    });
    this.setState({
      takePhoto: false
    });
  },

  render() {
    return (
      <div className="body">
        <Paper>
          <CardText>
            Create a portrait
          </CardText>
          <RaisedButton
            label="Take a photo"
            secondary={true}
            onClick={this.takeAPicture}/>
          {this.state.takePhoto ? "": (
            <CardMedia overlay={<CardTitle title="Portrait"/>}>
              <img className="photo"/>
            </CardMedia>)
          }
        </Paper>
      </div>
    );
  }
});
