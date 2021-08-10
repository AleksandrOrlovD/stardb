import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './item-list.css';

export default class ItemList extends Component {
  static defaultProps = {
    onItemSelected: () => {},
  };

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    onItemSelected: PropTypes.func,
    children: PropTypes.func.isRequired,
  }

  renderItems = (items) => {
    return items.map((item) => {
      const itemLabel = this.props.children(item);

      return (
        <li
          className="list-group-item"
          key={item.id}
          onClick={() => this.props.onItemSelected(item.id)}
        >
          {itemLabel}
        </li>
      );
    });
  };

  render() {
    const { data } = this.props;
    const items = this.renderItems(data);

    return <ul className="item-list list-group">{items}</ul>;
  }
}