/**
* @Description: Tasker create avatar
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
  Paper,
  Card,
  CardText,
  CardMedia,
  CardTitle,
  CardActions
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
        $('.photo').attr('src', data);
      }
    });
    this.setState({
      takePhoto: false
    });
  },

  clickToAddInfo() {
    data = $('.photo').attr('src');
    //console.log(data);
    avatarId = Meteor.call('createAvatar',data);
    React.render(<TaskerInfo />, document.getElementById("render-target"));
  },

  onClickBack() {
    React.render(<HomePage />, document.getElementById("render-target"));
  },

  render() {
    return (
      <div id ="container" className="container">
        <AppBar
          title="Your Avatar"
          zDepth={0}
          iconElementRight={<FlatButton label="<< Back" onClick={this.onClickBack}/>} />
        <CardText>
          {this.state.takePhoto ?
            ("Please create your avatar") :
            ("Please create your avatar")
          }
        </CardText>
        <div className="button-secondary">
          {this.state.takePhoto ?
            (<CardMedia overlay={<CardTitle title="Your Avatar" />}>
              <img className="photo" src="images/no_avatar.jpg"/>
            </CardMedia>) :
            (<CardMedia overlay={<CardTitle title="Your Avatar" />}>
              <img className="photo"/>
            </CardMedia>)
          }
        </div>
        <div className="button-secondary">
          <RaisedButton
            id="takeAPhoto"
            label="Take a photo"
            secondary={true}
            fullWidth={true}
            onClick={this.takeAPicture}/>
        </div>
        <div className="button-secondary">
          <RaisedButton
            id="nextToChooseSkill"
            label="Next"
            secondary={true}
            fullWidth={true}
            // disabled={this.state.takePhoto}
            onClick={this.clickToAddInfo}/>
        </div>
      </div>
    );
  }
});
