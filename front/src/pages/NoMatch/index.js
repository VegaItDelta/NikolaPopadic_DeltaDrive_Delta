import React from "react";
import { Header, Message } from "semantic-ui-react";

export const NoMatch = () => {
  return (
    <>
      <Message className="message-container" size="huge" secondary="true">
        <Header size="huge"> 404 Page Not Found </Header>
        <h1>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
        </h1>
      </Message>
    </>
  );
};
export default NoMatch;
