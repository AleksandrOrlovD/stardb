import React, { Component } from 'react';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const componentWithData = (View, getData) => {
  return class extends Component {
    state = {
      itemList: null,
      error: false,
    };

    componentDidMount() {
      this.updateItemList();
    }

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) this.updateItemList();
    }

    updateItemList() {
      getData()
        .then((itemList) => {
          this.setState({ itemList });
        })
        .catch(() => this.setState({ error: true }));
    }

    render() {
      const { itemList, error } = this.state;

      if (error) return <ErrorIndicator />;
      if (!itemList) return <Spinner />;

      return <View {...this.props} data={itemList} />;
    }
  };
};

export default componentWithData;
