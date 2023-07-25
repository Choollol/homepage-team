import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol, IonIcon, IonItem, IonImg, IonList, IonListHeader, IonLabel } from '@ionic/react';
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
  return <IonButton onClick={HandleClick} size="large">
    <div>
      <IonImg src={iconURL} style={{ width: "100px", height: "100px" }} ></IonImg>
      {name}
    </div>
  </IonButton>
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

        <IonGrid>
          <IonRow class="ion-justify-items-center">
            <IonCol>
              <LinkButton url="https://www.kyros.ai/home" name="Home" iconURL="https://csa-program.kyros.ai/dark-logo192.png" />
              <LinkButton url="https://www.kyros.ai/sprint" name="Events" iconURL="https://www.kyros.ai/static/media/StudentEvents.fe28d47b.svg" />
            </IonCol>
          </IonRow>
          <IonRow class="ion-justify-items-center">
            <IonCol>
              <LinkButton url="https://www.kyros.ai/discussion-forum" name="Forum" iconURL="https://www.kyros.ai/static/media/StudentForum.e3687d6d.svg" />
              <LinkButton url="https://www.kyros.ai/conversations" name="Chats" iconURL="https://www.kyros.ai/static/media/StudentChats.05bce75c.svg" />
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonList inset>
          <IonListHeader>
            <IonLabel>Upcoming</IonLabel>
          </IonListHeader>

          <IonItem>
            <IonLabel>
              <h1>Event Name</h1>
              <p>Description</p>
            </IonLabel>
          </IonItem>

          <IonItem>
            <IonLabel>
              <h1>Event Name</h1>
              <p>Description</p>
            </IonLabel>
          </IonItem>

        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
