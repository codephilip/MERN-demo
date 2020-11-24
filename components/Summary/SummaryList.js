import { Card } from "semantic-ui-react";

function SummaryList({ summaries }) {
  function mapSummaryToItems(summaries) {
    return summaries.map(summary => ({
      header: summary.name,
      image: summary.mediaUrl,
      //meta: `${summary.price}`,
      color: "teal",
      fluid: true,
      childKey: summary._id,
      href: `/summary?_id=${summary._id}`
    }));
  }

  return (
    <Card.Group
      stackable
      itemsPerRow="3"
      centered
      items={mapSummaryToItems(summaries)}
    />
  );
}

export default SummaryList;
