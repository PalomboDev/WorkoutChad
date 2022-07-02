import {Redirect, Route} from 'react-router-dom';
import * as React from 'react';
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    setupIonicReact,
} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import {home, barbell, person, logIn, personAdd} from 'ionicons/icons';
import Home from './pages/home';
import Workouts from './pages/workouts';
import Profile from './pages/profile';
import Login from './pages/auth/login';
import Register from './pages/auth/register';

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

import {User} from './types';
import {PostgrestResponse, Session} from '@supabase/supabase-js';

import {supabase} from './utils/supabaseClient';
import {useEffect, useState} from 'react';
import {UserContext} from './utils/useUserContext';
import {useHistory} from "react-router";

setupIonicReact();

export default function App(): JSX.Element {
    const history = useHistory();

    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null);

    function sessionSet(session: Session | null) {
        if (!session) {
            window.localStorage.removeItem('workoutchad.user');
            return;
        }

        async function setUserAndSession() {
            let user: User | undefined | null;
            let fetchUserData: boolean = true;

            if (session && session.user) {
                const localUserString: string | null =
                    window.localStorage.getItem('workoutchad.user');

                if (localUserString !== null) {
                    user = JSON.parse(localUserString);

                    if (user) {
                        if (session.user.id !== user.id) {
                            window.localStorage.removeItem('workoutchad.user');
                            supabase.auth.signOut();
                            return;
                        }

                        fetchUserData = false;
                    }
                }

                if (fetchUserData) {
                    const {data: userData, error: userError}: PostgrestResponse<any> =
                        await supabase
                            .from('user')
                            .select(
                                `
                        id,
                        slogan
                    `
                            )
                            .eq('id', session.user.id);

                    if (userError) {
                        console.error(userError);
                        return;
                    }

                    if (userData && userData[0]) {
                        user = await (userData[0] as User);
                    }
                }

                if (user) {
                    window.localStorage.setItem('workoutchad.user', JSON.stringify(user));

                    setUser(user);
                    setSession(session);
                }
            }
        }

        setUserAndSession();
    }

    useEffect(() => {
        sessionSet(supabase.auth.session());

        supabase.auth.onAuthStateChange((_event, session) => {
            sessionSet(session);
        });
    }, []);

    if (!user || history.location.pathname.includes("/auth")) {
        return (
            <IonApp>
                <IonReactRouter>
                    <IonTabs>
                        <IonRouterOutlet>
                            <Route exact path="/auth/login">
                                <Login/>
                            </Route>
                            <Route exact path="/auth/register">
                                <Register/>
                            </Route>
                            <Route>
                                <Redirect to="/auth/login"/>
                            </Route>
                        </IonRouterOutlet>
                        <IonTabBar slot="bottom">
                            <IonTabButton tab="register" href="/auth/register">
                                <IonIcon icon={personAdd}/>
                                <IonLabel>Register</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="login" href="/auth/login">
                                <IonIcon icon={logIn}/>
                                <IonLabel>Login</IonLabel>
                            </IonTabButton>
                        </IonTabBar>
                    </IonTabs>
                </IonReactRouter>
            </IonApp>
        );
    }

    return (
        <UserContext.Provider value={{user}}>
            <IonApp>
                <IonReactRouter>
                    <IonTabs>
                        <IonRouterOutlet>
                            <Route exact path="/home">
                                <Home/>
                            </Route>
                            <Route exact path="/workouts">
                                <Workouts/>
                            </Route>
                            <Route path="/profile">
                                <Profile/>
                            </Route>
                            <Route exact path="/">
                                <Redirect to="/home"/>
                            </Route>
                        </IonRouterOutlet>
                        <IonTabBar slot="bottom">
                            <IonTabButton tab="home" href="/home">
                                <IonIcon icon={home}/>
                                <IonLabel>Home</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="workouts" href="/workouts">
                                <IonIcon icon={barbell}/>
                                <IonLabel>Workouts</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="profile" href="/profile">
                                <IonIcon icon={person}/>
                                <IonLabel>Profile</IonLabel>
                            </IonTabButton>
                        </IonTabBar>
                    </IonTabs>
                </IonReactRouter>
            </IonApp>
        </UserContext.Provider>
    );
}
