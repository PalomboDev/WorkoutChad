import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './index.css';

export default function Workouts({  }): JSX.Element {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Workouts</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Workouts</IonTitle>
                    </IonToolbar>
                </IonHeader>
            </IonContent>
        </IonPage>
    );
}
