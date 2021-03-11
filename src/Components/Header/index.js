/* Third Party */
import React from "react";
import { Row, Col, Container, Fade } from "reactstrap";
import { MenuIcon } from "../Icons/Menu";

/* Components */
import { Center, TourismText } from "./style";

/* Functions */

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollUp: true,
      prev: 0,
      color: "white",
    };
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const scrollingUp = window.scrollY > this.state.prev ? false : true;
      const setColor =
        window.scrollY > window.innerHeight - 80 ? "black" : "white";
      this.setState({
        scrollUp: scrollingUp,
        prev: window.scrollY,
        color: setColor,
      });
    });
  }

  render() {
    return (
      <Fade in={this.state.scrollUp}>
        <Center>
          <Container>
            <Row className="mt-5">
              <Col className="col-6 d-none d-md-flex justify-content-start">
                <TourismText style={{ color: this.state.color }}>
                  Under Production
                </TourismText>
              </Col>
              <Col className="col-5 d-flex justify-content-end">
                <TourismText style={{ color: this.state.color }}>
                  Promote Tourism NZ
                </TourismText>
              </Col>
              <Col className="col-1 d-flex justify-content-end">
                <MenuIcon color={this.state.color} />
              </Col>
            </Row>
          </Container>
        </Center>
      </Fade>
    );
  }
}

export default Header;
