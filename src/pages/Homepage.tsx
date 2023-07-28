import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol, IonItem, IonImg, IonList, IonListHeader, IonLabel, IonText } from '@ionic/react';
import './Homepage.css';
import './customcolors.css'
import React from 'react';
import { useState } from 'react';

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
function AddEvent(eventList, setEventList)
{
  setEventList(() =>
  {
    let newID;
    if (eventList.length == 0)
    {
      newID = 0;
    }
    else
    {
      newID = eventList[eventList.length - 1].id + 1;
    }
    return [...eventList, {
      id: newID, name: "Sample Event " + newID, description: "test"
    }]
  });
}
function DeleteEvent(eventList, setEventList)
{
  setEventList(() =>
  {
    return eventList.slice(1, eventList.length);
  });
}

const Homepage: React.FC = () =>
{
  const initialList: { id: number, name: string, description: string }[] = [];
  const [eventList, setEventList] = useState(initialList);

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

        { /* Hyperlink Buttons */}
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

        <IonButton onClick={() => { AddEvent(eventList, setEventList) }}>Add Event</IonButton>
        <IonButton onClick={() => { DeleteEvent(eventList, setEventList) }}>Delete Event</IonButton>

        { /* Upcoming Events List */}
        <IonList inset>
          <IonListHeader color="dark">
            <IonLabel>
              <IonText color="favorite">
                <h1>Upcoming</h1>
              </IonText>
            </IonLabel>
          </IonListHeader>

          {/*Render Event List*/}
          {eventList.map(event =>
          {
            console.log(event);
            return <IonItem color="boldgreen" key={event.name}>
              <IonLabel>
                <h1>{event.name}</h1>
              </IonLabel>
            </IonItem>
          })}

        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Homepage;
