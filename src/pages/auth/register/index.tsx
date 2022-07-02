import {
  IonContent,
  IonHeader,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonInput,
  IonItemGroup,
  IonCheckbox,
} from '@ionic/react';
import { checkmark, personAdd } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import './index.css';

export default function Register(): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [showSuccessToast, setShowSuccessToast] = useState<boolean>(true);
  const [showErrorToast, setShowErrorToast] = useState<boolean>(false);

  let history = useHistory();

  function handleClick() {
    history.push('/auth/login');
  }

  return (
    <IonPage>
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
          <IonCardContent>
            <IonItemGroup>
              <IonItem color={'primary'} className={'input'}>
                <IonLabel>Email</IonLabel>
                <IonInput
                  type={'email'}
                  placeholder={'Enter email'}
                  value={email}
                  onIonChange={(e) => setEmail(e.detail.value!)}
                />
              </IonItem>

              <IonItem
                style={{ marginTop: '10px' }}
                color={'primary'}
                className={'input'}>
                <IonLabel>Password</IonLabel>
                <IonInput
                  type={'email'}
                  placeholder={'Enter password'}
                  value={email}
                  onIonChange={(e) => setEmail(e.detail.value!)}
                />
              </IonItem>

              <IonItem
                style={{ marginTop: '10px' }}
                color={'primary'}
                className={'input'}>
                <IonLabel>Password</IonLabel>
                <IonInput
                  type={'password'}
                  placeholder={'Confirm password'}
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                />
              </IonItem>
            </IonItemGroup>

            <IonButton
              style={{ marginTop: '10px' }}
              color={'light'}
              expand={'full'}>
              <IonLabel>Register</IonLabel>
              <IonIcon icon={checkmark} slot="end" />
            </IonButton>

            <IonButton
              color={'light'}
              expand={'full'}
              onClick={() => history.push('/auth/login')}>
              <IonLabel>Already have an account?</IonLabel>
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}
