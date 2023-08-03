import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonToggle } from '@ionic/react';
import './Planner.css';
import React from 'react';
import { useState } from 'react';

const Tab3: React.FC = () =>
{
  const [isDarkMode, setDarkMode] = useState(false);

  const darkModeToggle = () => {
    setDarkMode(!isDarkMode);   // toggle the state
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Planner</IonTitle>
          <IonToggle slot="end" color="success ion-margin-end" checked={isDarkMode} onIonChange={()=>darkModeToggle()}>Dark Mode</IonToggle>
        </IonToolbar>
      </IonHeader>
      <IonContent color={isDarkMode ? "light":"dark"} fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Planner</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
