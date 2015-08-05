const {
  List,
  ListItem,
  ListDivider,
  Avatar
} = mui;

ListService = React.createClass({
  propTypes: {
    services: React.PropTypes.array.isRequired,
    selectedService: React.PropTypes.string,
    onServiceSelected: React.PropTypes.func
  },
  selectService(serviceId) {
    console.log("asdasd");
    this.props.onServiceSelected(serviceId);
  },
  render() {
    return <List>{
      this.props.services.map((service) => {
        let style = {};
        if (this.props.selectedService === service.text) {
          style["backgroundColor"] = "#eee";
        }

        return [
          <ListItem
            key={service._id}
            primaryText={ service.text }
            onClick={ this.selectService.bind(this, service._id) }
            leftAvatar={ <Avatar src={ "/" + service.avatar + ".png" }/> }
            style={style}/>,
          <ListDivider/>
        ]
      })
    }</List>
  }
});
