import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Journal.css';

const Tab2: React.FC = () =>
{
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Journal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Journal</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Journal" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
