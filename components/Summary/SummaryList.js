import { Card } from "semantic-ui-react";

function SummaryList({ summarys }) {
  function mapSummaryToItems(summarys) {
    return summarys.map(summary => ({
      header: summary.type,
      name: summary.name,
      ammount: summary.ammount,

    }));
  }

  return (
    <Card.Group
      stackable
      itemsPerRow="3"
      centered
      items={mapProductsToItems(summarys)}
    />
  );
}

export default SummaryList;
