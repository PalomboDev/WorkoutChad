import "./index.css";

import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton
} from "@ionic/react";

import { supabase } from "../../utils/supabaseClient";
import { useHistory } from "react-router";

export default function Profile({  }): JSX.Element {
    const history = useHistory();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Profile</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Profile</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonButton onClick={() => {
                    supabase.auth.signOut();
                    window.localStorage.removeItem("workoutchad.user");
                    history.push("/auth/login");
                }}>Sign Out</IonButton>
            </IonContent>
        </IonPage>
    );
}
