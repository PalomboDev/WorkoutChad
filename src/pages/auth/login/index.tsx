import "./index.css";

import { useEffect, useState } from "react";

import {
    IonContent,
    IonHeader,
    IonPage,
    IonItem,
    IonItemGroup,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonInput,
    IonCheckbox,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonIcon,
    IonButton,
    IonToast
} from "@ionic/react";
import { checkmark } from "ionicons/icons";
import { supabase } from "../../../utils/supabaseClient";
import { useHistory } from "react-router";

export default function Login(): JSX.Element {
    const history = useHistory();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [rememberMe, setRememberMe] = useState<boolean>(false);

    const [showSuccessToast, setShowSuccessToast] = useState<boolean>(true);
    const [showErrorToast, setShowErrorToast] = useState<boolean>(false);
    const [toastMessage, setToastMessage] = useState<string>("");

    function handleLogin(): void {
        supabase.auth.signIn({
            email,
            password
        }).then(data => {
            if (data.error !== null) {
                setToastMessage(data.error.message);
                setShowErrorToast(true);
                return;
            }

            if (data.session && data.user) {
                setToastMessage("You have logged in!");
                setShowSuccessToast(true);
                history.push("/");
            }
        });
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">WorkoutChad</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonCard color={"white"}>
                    <IonCardHeader>
                        <IonCardTitle>Login</IonCardTitle>
                        <IonCardSubtitle>Insert your login information for WorkoutChad!</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>
                        <IonItemGroup>
                            <IonItem color={"primary"} className={"input"}>
                                <IonLabel>Email</IonLabel>
                                <IonInput
                                    type={"email"}
                                    placeholder={"Enter email..."}
                                    value={email}
                                    onIonChange={e => setEmail(e.detail.value!)}
                                />
                            </IonItem>

                            <IonItem color={"primary"} className={"input"}>
                                <IonLabel>Password</IonLabel>
                                <IonInput
                                    type={"password"}
                                    placeholder={"Enter password..."}
                                    value={password}
                                    onIonChange={e => setPassword(e.detail.value!)}
                                />
                            </IonItem>

                            <IonItem color={"primary"} className={"input"}>
                                <IonLabel>Remember Me?</IonLabel>
                                <IonCheckbox
                                    slot={"end"}
                                    checked={rememberMe}
                                    color={"success"}
                                    onIonChange={e => setRememberMe(e.detail.checked)}
                                />
                            </IonItem>
                        </IonItemGroup>

                        <IonButton color={"light"} expand={"full"} onClick={e => {
                            e.preventDefault();
                            handleLogin();
                        }}>
                            <IonLabel>Login</IonLabel>
                            <IonIcon icon={checkmark} slot="end" />
                        </IonButton>
                    </IonCardContent>
                </IonCard>

                <IonToast
                    isOpen={showSuccessToast}
                    onDidDismiss={() => setShowSuccessToast(false)}
                    message={toastMessage}
                    color={"success"}
                    duration={2000}
                />

                <IonToast
                    isOpen={showErrorToast}
                    onDidDismiss={() => setShowErrorToast(false)}
                    message={toastMessage}
                    color={"danger"}
                    duration={5000}
                />
            </IonContent>
        </IonPage>
    );
}
