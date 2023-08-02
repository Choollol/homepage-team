import { useIonAlert, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol, IonItem, IonImg, IonList, IonListHeader, IonLabel, IonText, IonPopover, IonReorder, IonReorderGroup, ItemReorderEventDetail, IonIcon, IonInput, IonAlert } from '@ionic/react';
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
function AddEvent(eventList, setEventList, eventName: string, eventDesc: string)
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
      id: newID, name: eventName, description: eventDesc
    }]
  });
}
function DeleteEvent(eventList, setEventList, eventID)
{
  setEventList(eventList.filter(e => e.id !== eventID));
}
function NoUpcomingEvents({ hasEvents })
{
  if (hasEvents)
  {
    return;
  }
  return <IonItem color="favorite">
    <IonLabel>
      <h1>No Upcoming Events</h1>
      <p>Event list is empty</p>
    </IonLabel>
  </IonItem>
}
function handleReorder(event: CustomEvent<ItemReorderEventDetail>)
{
  // The `from` and `to` properties contain the index of the item
  // when the drag started and ended, respectively
  console.log('Dragged from index', event.detail.from, 'to', event.detail.to);
  // Finish the reorder and position the item in the DOM based on
  // where the gesture ended. This method can also be called directly
  // by the reorder group
  event.detail.complete();
}

const Homepage: React.FC = () =>
{
  const initialList: { id: number, name: string, description: string }[] = [];
  const [eventList, setEventList] = useState(initialList);

  const [addEventAlert] = useIonAlert();

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
          {/* Add Event Button */}
          <IonRow class="ion-justify-items-center">
            <IonCol>
              <IonButton
                id="add-event-alert"
                onClick={() =>
                  addEventAlert({
                    header: "Event Information",
                    inputs:
                      [
                        {
                          name: "name",
                          placeholder: "Event name",
                          value: ""
                        },
                        {
                          name: "description",
                          placeholder: "Date/Description",
                          value: ""
                        }
                      ],
                    buttons:
                      [
                        {
                          text: "Enter",
                          handler: (alertData) =>
                          {
                            if (alertData.name.length > 0 && alertData.description.length > 0)
                            {
                              AddEvent(eventList, setEventList, alertData.name, alertData.description);
                            }
                          },
                        }
                      ]
                  })
                }
              >Add Event</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

        { /* Upcoming Events List */}
        <IonList inset>
          <IonListHeader color="dark">
            <IonLabel>
              <IonText color="favorite">
                <h1>Upcoming</h1>
              </IonText>
            </IonLabel>
          </IonListHeader>

          <NoUpcomingEvents hasEvents={eventList.length > 0} />
          <IonReorderGroup disabled={false} onIonItemReorder={handleReorder}>

            {/*Render Event List*/}

            {eventList.map(event =>
            {
              return <IonItem color="boldgreen" key={event.id}>
                <IonReorder slot="start" />
                <IonLabel>
                  <h1>{event.name}</h1>
                  <p>{event.description}</p>
                </IonLabel>
                <IonButton onClick={() => DeleteEvent(eventList, setEventList, event.id)} color="favorite"
                  fill="clear">
                  <IonImg src="https://www.pngmart.com/files/17/Waste-Garbage-Can-Vector-PNG-Clipart.png"
                    style={{ width: "30px", height: "30px" }}></IonImg>
                </IonButton>
              </IonItem>
            })}
          </IonReorderGroup>


        </IonList>
        <div className="container">
          <IonGrid>
            <IonRow class="ion-justify-items-center">
              <IonCol>
                <IonButton id="help-button" size="large">
                  <div>
                    <IonImg src="https://www.kyros.ai/static/media/Astronaut_no_flag.abc01945.svg" style={{ width: "100px", height: "100px" }} ></IonImg>
                    Help/FAQ
                  </div>
                </IonButton>
                <IonPopover trigger="help-button" side="top" alignment="center">
                  <IonContent class="ion-padding" color="favorite">
                    <a href="https://www.kyros.ai/help-support/faq" target="_blank">FAQ's</a><br></br>
                    <a href="https://www.kyros.ai/help-support/tutorial-videos" target="_blank">Tutorial Videos</a><br></br>
                    <a href="https://www.kyros.ai/help-support/contact-us" target="_blank">Contact Us</a>
                  </IonContent>
                </IonPopover>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Homepage;
