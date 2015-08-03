const{
  RaisedButton
} = mui;
const ThemeManager = new mui.Styles.ThemeManager();

LandingPage = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  onGetStart(){
    Cookie.set('landingpage', 1);
    React.render(<App />, document.getElementById("landingpage"));
  },

  render() {
    return (
      <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">Slide 1</div>
            <div className="swiper-slide">Slide 2</div>
            <div className="swiper-slide">Slide 3
              <div className="btnGetStart">
                <RaisedButton label="Get Start" secondary={true} onClick={this.onGetStart} />
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
      </div>
    );
  },

  componentDidMount: function() {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
  },
});
