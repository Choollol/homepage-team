import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonFab, IonFabButton, IonButton, IonCard, IonCardHeader, IonCardContent, IonInput, IonCardTitle} from '@ionic/react';
import './Tab2.css';
import {  add } from 'ionicons/icons';
import React from "react";
import { useState } from 'react';

const Tab2: React.FC = () => {
  const [cards, setCards] = useState([{ id: 1, inputText: '' }]);

  const handleAddCard = () => {
    const newCardId = cards.length + 1;
    setCards([...cards, { id: newCardId, inputText: '' }]);
  };

  const handleInputChange = (cardId: number, value: string) => {
    setCards((prevCards) =>
      prevCards.map((card) => (card.id === cardId ? { ...card, inputText: value } : card))
    );
  };

  const handleDeleteCard = (cardId: number) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Journal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="custom-background">
        
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={handleAddCard}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        
        <a href="https://kyros.ai" target="_blank" rel="noopener noreferrer">
          <IonCardHeader>
            <img
              src="https://media.discordapp.net/attachments/1130550292862226483/1133882509688569916/ztRZwAAAAASUVORK5CYII.png"
              width="200"
              height="200"
              alt="Logo"
            />
          </IonCardHeader>
        </a>
        <IonCardTitle className="white-text">‍  ‍‍‍‍‍‍ ‍  ‍‍ ‍‍‍‍‍   ‍‍‍Notes</IonCardTitle>
        {cards.map((card) => (
          <IonCard key={card.id}>
            <IonCardContent className="white-text">
              <IonInput
                label={`Note ${card.id}:`}
                value={card.inputText}
                onIonChange={(e) => handleInputChange(card.id, e.detail.value!)}
              />
              <IonButton fill="clear" onClick={() => handleDeleteCard(card.id)}>
                Done
              </IonButton>
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
