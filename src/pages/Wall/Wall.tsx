// react
import * as React from "react";

// components
import Base from "components/Base/Base";
import Card, { CardInterface } from "components/Card/Card";

const AddButton = React.lazy(() => import("components/AddButton/AddButton"));
const InputModal = React.lazy(() => import("components/InputModal/InputModal"));

function Wall() {
  const [inputModalOpen, setInputModalOpen] = React.useState<boolean>(false);
  const defaultCard: CardInterface = {
    title: "",
    priority: 0,
    x: 0,
    y: 0,
    onStop: (x: number, y: number) => {},
  };
  const [cards, setCards] = React.useState<CardInterface[]>([]);

  const renderCards = () => {
    return cards.map((item: CardInterface, index: number) => (
      <Card
        key={`key-${index}`}
        title={item.title}
        priority={item.priority}
        x={item.x}
        y={item.y}
        onStop={(x: number, y: number) => {
          const newCards = [...cards];
          newCards[index].x = x;
          newCards[index].y = y;
          setCards(newCards);
        }}
      />
    ));
  };

  return (
    <Base>
      <InputModal
        open={inputModalOpen}
        onSubmit={(data) => {
          // Create new card
          const newCards = [...cards];
          newCards.push({
            ...defaultCard,
            title: data.title,
            priority: data.priority,
          });
          setCards(newCards);

          setInputModalOpen(false);
        }}
        onClose={() => setInputModalOpen(false)}
      />
      <AddButton
        onClick={() => {
          setInputModalOpen(true);
        }}
      />
      {renderCards()}
    </Base>
  );
}

export default Wall;
