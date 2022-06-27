import { Redirect, Route } from 'react-router-dom';
import * as React from "react";
import {
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
import { home, barbell, person } from 'ionicons/icons';
import Home from './pages/home';
import Workouts from './pages/workouts';
import Profile from './pages/profile';

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

/* Theme variables */
import './theme/variables.css';

import { supabase } from "./utils/supabaseClient";
import { useEffect, useState } from "react";

setupIonicReact();

export default function App({  }): JSX.Element {
    const [text, setText] = useState<string>("No text");

    useEffect(() => {
        async function setTextAsync() {
            const { data, error } = await supabase
                .from("fuck")
                .select(`*`);

            if (error) {
                console.error(error);
                return;
            }

            const fuck: any = data[0];

            setText(fuck["text"]);
        }

        setTextAsync();
    }, []);

    return (
        <IonApp>
            <IonReactRouter>
                <IonTabs>
                    <IonRouterOutlet>
                        <Route exact path="/home">
                            <h1>{text}</h1>
                        </Route>
                        <Route exact path="/workouts">
                            <Workouts />
                        </Route>
                        <Route path="/profile">
                            <Profile />
                        </Route>
                        <Route exact path="/">
                            <Redirect to="/home" />
                        </Route>
                    </IonRouterOutlet>
                    <IonTabBar slot="bottom">
                        <IonTabButton tab="home" href="/home">
                            <IonIcon icon={home} />
                            <IonLabel>Home</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="workouts" href="/workouts">
                            <IonIcon icon={barbell} />
                            <IonLabel>Workouts</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="profile" href="/profile">
                            <IonIcon icon={person} />
                            <IonLabel>Profile</IonLabel>
                        </IonTabButton>
                    </IonTabBar>
                </IonTabs>
            </IonReactRouter>
        </IonApp>
    );
}