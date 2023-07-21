import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Homepage.css';
import React from 'react';

function LinkButton({ url, name })
{
  function HandleClick()
  {
    window.open(url, '_blank');
  }
  return <IonButton onClick={HandleClick}>{name}</IonButton>
}

const Tab1: React.FC = () =>
{
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Homepage</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Homepage</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Homepage" />
        <LinkButton url="https://www.kyros.ai/sprint" name="Journal" />
        <LinkButton url="https://www.kyros.ai/discussion-forum" name="Forum" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
