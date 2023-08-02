import React from 'react';
import { Component, AfterViewInit } from '@angular/core';

import { Redirect, Route } from 'react-router-dom';
import
{
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle, home, create, calendar } from 'ionicons/icons';
import Homepage from './pages/Homepage';
import Journal from './pages/Journal';
import Planner from './pages/Planner';
import './pages/customcolors.css'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './theme/variables.css';
/* Theme variables */
import './theme/variables.css';

setupIonicReact();

// @Component({
//   selector: 'Planner',
//   templateUrl: 'planner.html',
// })
export class plannerButton implements AfterViewInit {
  ngAfterViewInit() {
    const script = document.createElement('script');
    script.src = 'src/planner-files/planner.js';
    document.body.appendChild(script);
  }
}
const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/Homepage">
            <Homepage />
          </Route>
          <Route exact path="/Journal">
            <Journal />
          </Route>
          <Route path="/Planner">
            <Planner />
          </Route>
          <Route exact path="/">
            <Redirect to="/Homepage" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" color="favorite">
          <IonTabButton tab="Homepage" href="/Homepage">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Homepage</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Journal" href="/Journal">
            <IonIcon aria-hidden="true" icon={create} />
            <IonLabel>Journal</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Planner" href="/Planner" onClick={() => plannerButton}>
            <IonIcon aria-hidden="true" icon={calendar} />
            <IonLabel>Planner</IonLabel>  
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
