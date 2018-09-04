import React from 'react'
import './ApplicantCard.css'
import ProcessGraphic from '../processGraphic/ProcessGraphic'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, ButtonDropdown, Dropdown, DropdownItem, DropdownMenu, DropdownToggle
} from 'reactstrap';

export default class ApplicantCard extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <>
        <Card className="card">
          
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <div className="options">
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle
              tag="span"
              onClick={this.toggle}
              data-toggle="dropdown"
              aria-expanded={this.state.dropdownOpen}
              >

              <button class="dropdown__button"> ... </button>
             </DropdownToggle>
        <DropdownMenu>     
          <DropdownItem>Edit</DropdownItem>
          <DropdownItem>Delete</DropdownItem>
          
        </DropdownMenu>
      </Dropdown>
      </div>
          
          
          
          
          <CardBody>
            <CardTitle>{this.props.name}</CardTitle>
            <ProcessGraphic lineSize={100} circleSize={30} stages={this.props.stages}></ProcessGraphic>
          </CardBody>
        </Card>
      </>
    )
  }
}