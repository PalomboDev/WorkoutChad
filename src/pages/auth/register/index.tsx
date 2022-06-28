import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonList,
  IonInput,
} from '@ionic/react';
import { checkmark, personAdd } from 'ionicons/icons';

import './index.css';

export default function Register({}): JSX.Element {
  return (
    <IonPage>
      <IonHeader className="header-content">
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="register-content">
        <IonCard className="welcome-card">
          <IonCardHeader>
            <IonCardTitle>Welcome to WorkoutChad</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            We will be your personal trainer, keeping you motivated when working
            out. Remember pleabian, there is never an excuse not to get in a
            pump.
          </IonCardContent>
        </IonCard>

        <IonCard className="register-card">
          <IonItem>
            <IonIcon icon={personAdd} slot="start" />
            <IonLabel>Register User</IonLabel>
          </IonItem>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonLabel position="stacked">Name</IonLabel>
                <IonInput></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Username</IonLabel>
                <IonInput></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Email</IonLabel>
                <IonInput></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Password</IonLabel>
                <IonInput></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Confirm Password</IonLabel>
                <IonInput></IonInput>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>

        <IonButton color={'light'} expand="full" className="register-button">
          <IonLabel>Register</IonLabel>
          <IonIcon icon={checkmark} slot="end" />
        </IonButton>
        <IonButton color={'warning'} expand="full" className="login-button">
          <IonLabel>Already have an account?</IonLabel>
        </IonButton>
      </IonContent>
    </IonPage>
  );
}
