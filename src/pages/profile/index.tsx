import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './index.css';

export default function Profile({  }): JSX.Element {
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
            </IonContent>
        </IonPage>
    );
}
