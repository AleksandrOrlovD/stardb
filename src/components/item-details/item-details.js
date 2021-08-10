import React, { Component } from 'react';

import './item-details.css';

export default class ItemDetails extends Component {
  render() {
    const { item, image } = this.props;

    return (
      <div className="item-details card">
        <Card
          item={item}
          image={image}
          fields={React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, { item });
          })}
        />
      </div>
    );
  }
}

const Card = ({ item, image, fields }) => {
  return (
    <React.Fragment>
      <img className="item-image" src={image} alt="" />

      <div className="card-body">
        <h4>{item.name}</h4>
        <ul className="list-group list-group-flush">{fields}</ul>
      </div>
    </React.Fragment>
  );
};

const Field = ({ item, field, label }) => {
  return (
    <li className="list-group-item" key={label}>
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Field };