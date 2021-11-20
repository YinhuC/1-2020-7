/* Third Party */
import React from 'react';
import { Row, Col, Container, Fade } from 'reactstrap';

/* Components */
import { Center, TourismText, MenuButton } from './style';
import { MenuIcon } from '../Icons/Menu';
import DropdownMenu from '../DropdownMenu';
import './style.scss';

/* Functions */

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollUp: true,
      prevScroll: 0,
      color: 'white',
      isMenuOpen: false,
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  // Handle scroll event to hide or show header
  handleScroll = () => {
    const menuOpen = document.getElementById('dropdown').style.height === '50%';
    const scrollingUp =
      window.scrollY > this.state.prevScroll && !menuOpen ? false : true;
    const setColor =
      window.scrollY > window.innerHeight - 80 && !menuOpen ? 'black' : 'white';
    this.setState({
      scrollUp: scrollingUp,
      prevScroll: window.scrollY,
      color: setColor,
    });
  };

  // Update the state when the menu is clicked
  handleMenuClick = () => {
    if (this.state.isMenuOpen === true) {
      document.activeElement.blur();
    } else {
      this.setState({
        color: 'white',
      });
    }
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    });
  };

  render() {
    return (
      <>
        <DropdownMenu menuHeight={this.state.isMenuOpen ? '50' : '0'} />
        <Fade in={this.state.scrollUp}>
          <Center>
            <Container id='promote-header'>
              <Row className='d-flex justify-content-center mt-5'>
                <Col className='col-11 d-none d-md-flex justify-content-start mt-3'>
                  <TourismText style={{ color: this.state.color }}>
                    Promote Tourism NZ
                  </TourismText>
                </Col>
                <Col className='col-1 d-flex justify-content-center mt-3'>
                  <MenuButton
                    id='menuButton'
                    className={
                      this.state.isMenuOpen
                        ? 'Menu-toggle-open'
                        : 'Menu-toggle-closed'
                    }
                    onClick={this.handleMenuClick}
                  >
                    <MenuIcon color={this.state.color} />
                  </MenuButton>
                </Col>
              </Row>
            </Container>
          </Center>
        </Fade>
      </>
    );
  }
}

export default Header;
