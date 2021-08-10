import React, { Component } from 'react';

import ItemDetails from '../item-details';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const componentItemDetails = (getItem, getItemImage) => {
  return class extends Component {
    state = {
      item: null,
      image: null,
      loading: false,
      error: false,
    };

    selectItem = (id) => {
      getItem(id)
        .then((item) =>
          this.setState({
            item,
            image: getItemImage(item.id),
            loading: false,
          })
        )
        .catch(() => this.setState({ error: true }));
    };

    updateItem = () => {
      const { selectedItem } = this.props;
      if (selectedItem) {
        this.setState({loading: true});
        this.selectItem(selectedItem);
      }
    };

    componentDidMount = () => {
      this.updateItem();
    };

    componentDidUpdate = (prevProps) => {
      if (this.props.selectedItem !== prevProps.selectedItem) {
        this.updateItem();
      }
    };

    render() {
      const { item, image, error, loading } = this.state;

      if (loading) return <Spinner />;
      if (error) return <ErrorIndicator />;
      if (!item) return null;

      return <ItemDetails {...this.props} item={item} image={image} />;
    }
  };
};

export default componentItemDetails;
