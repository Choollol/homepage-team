import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol, IonIcon, IonItem, IonImg } from '@ionic/react';
import './Homepage.css';
import React from 'react';

function LinkButton({ url, name, iconURL })
{
  function HandleClick()
  {
    window.open(url, '_blank');
  }
  function AddNewline()
  {
    name = '\n' + name;
  }
  AddNewline();
  return <IonButton onClick={HandleClick}>
    <div>
      <IonImg src={iconURL} style={{ width: "60px", height: "60px" }}></IonImg>
      {name}
    </div>
  </IonButton>
}

const Tab1: React.FC = () =>
{
  return (
    <IonPage color="white">
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
        <IonGrid>
          <IonRow class="ion-justify-items-center">
            <IonCol>
              <LinkButton url="https://www.kyros.ai/home" name="Home" iconURL="https://csa-program.kyros.ai/dark-logo192.png" />
              <LinkButton url="https://www.kyros.ai/sprint" name="Events" iconURL="https://csa-program.kyros.ai/dark-logo192.png" />
            </IonCol>
          </IonRow>
          <IonRow class="ion-justify-items-center">
            <IonCol>
              <LinkButton url="https://www.kyros.ai/discussion-forum" name="Forum" iconURL="https://csa-program.kyros.ai/dark-logo192.png" />
              <LinkButton url="https://www.kyros.ai/conversations" name="Chats" iconURL="https://csa-program.kyros.ai/dark-logo192.png" />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
