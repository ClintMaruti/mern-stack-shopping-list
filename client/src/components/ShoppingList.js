import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemAction";
import PropTypes from "prop-types"
import "../App.css"

class ShoppingList extends Component {
    componentDidMount(){
        this.props.getItems()
    }
    onDeleteClick = (id) => {
        this.props.deleteItem(id)
    }
  render() {
    const { items } = this.props.item;
    return(
        <Container>
            <TransitionGroup className="shopping-list">
                {items.map(({ id, name}) => (
                    <CSSTransition key={id} timeout={500} classNames="fade">
                        <ListGroupItem>
                            <Button
                                className="remove-btn"
                                color="danger"
                                size="sm"
                                onClick={this.onDeleteClick.bind(this,id)}
                            >&times;</Button>
                            {name}
                        </ListGroupItem>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </Container>
    );
  }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, {getItems, deleteItem})(ShoppingList) 