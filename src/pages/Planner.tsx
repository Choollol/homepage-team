import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Planner.css';
import React from 'react';


const Tab3: React.FC = () =>
{
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Planner</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
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
