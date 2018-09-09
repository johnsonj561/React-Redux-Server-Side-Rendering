import React from 'react';

const NotFoundPage = (props) => {
  const { staticContext = {} } = props;
  staticContext.notFound = true;
  return (
    <h1 className="center-align">Route Not Found</h1>
  );
}

export default {
  component: NotFoundPage
};
