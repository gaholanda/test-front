import React from 'react';
import { withRouter } from "react-router-dom";

import { GridItem, TabsCSS } from '../styles';

function Tabs({ location }) {

  const { Container, Content, Item } = TabsCSS;
  const path = location.pathname.replace("/","");
  const tabs = [
    { id: "cart", text: "Sacola" },
    { id: "payment", text: "Pagamento" },
    { id: "success", text: "Confirmação" }
  ]

  return (
    <GridItem area="tabs" background="white" position="sticky">
      <Container>
        <Content data-testid="tabs">
          {
            tabs.map(
              tab =>
                <Item key={tab.id} active={ path === tab.id ? true : false }>
                  {tab.text}
                </Item>
            )
          }
        </Content>
      </Container>
    </GridItem>
  )
}

export default withRouter(Tabs);