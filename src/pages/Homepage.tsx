import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol, IonItem, IonImg, IonList, IonListHeader, IonLabel, IonText } from '@ionic/react';
import './Homepage.css';
import './customcolors.css'
import React from 'react';

function LinkButton({ url, name, iconURL })
{
  function HandleClick()
  {
    window.open(url, '_blank');
  }
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
        <IonToolbar color="favorite">
          <IonTitle>Homepage</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="dark" fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Homepage</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid color="favorite">
          <IonRow class="ion-justify-items-center">
            <IonCol>
              <LinkButton url="https://www.kyros.ai/home" name="Home" iconURL="assets/img/kyros_logo_transparent.png" />
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
          <IonListHeader color="dark">
            <IonLabel>
              <IonText color="favorite">
                <h1>Upcoming</h1>
              </IonText>
            </IonLabel>
          </IonListHeader>

          <IonItem color="boldgreen">
            <IonLabel>
              <h1>Event Name</h1>
              <IonText color="favorite">
                <p>Description</p>
              </IonText>
            </IonLabel>
          </IonItem>

          <IonItem color="boldgreen">
            <IonLabel>
              <h1>Event Name</h1>
              <IonText color="favorite">
                <p>Description</p>
              </IonText>
            </IonLabel>
          </IonItem>

        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
