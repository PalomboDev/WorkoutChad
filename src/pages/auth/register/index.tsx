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

export default function Register(): JSX.Element {
  return (
    <IonPage>
      <IonHeader className="header-content"></IonHeader>

      <IonContent className="register-content">
        <IonCard className="welcome-card" color={'white'}>
          <IonCardHeader>
            <IonCardTitle>Welcome to Workout Chad</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            We will be your personal trainer, keeping you motivated when working
            out.
          </IonCardContent>
        </IonCard>

        <IonCard className="register-card" color={'white'}>
          <IonItem color={'white'}>
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

        <div className="button-content">
          <IonButton
            color={'primary'}
            expand="block"
            className="register-button">
            <IonLabel>Register</IonLabel>
            <IonIcon icon={checkmark} slot="end" />
          </IonButton>
          <IonButton color={'warning'} expand="block" className="login-button">
            <IonLabel>Already have an account?</IonLabel>
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
}
