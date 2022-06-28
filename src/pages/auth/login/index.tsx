import "./index.css";

import { useState } from "react";

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
    IonCardContent
} from "@ionic/react";

export default function Login(): JSX.Element {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [rememberMe, setRememberMe] = useState<boolean>(false);

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
                            <IonItem color={"primary"} style={{ marginBottom: "5px" }}>
                                <IonLabel>Email</IonLabel>
                                <IonInput
                                    type={"email"}
                                    placeholder={"Enter email..."}
                                    value={email}
                                />
                            </IonItem>

                            <IonItem color={"primary"} style={{ marginBottom: "5px" }}>
                                <IonLabel>Password</IonLabel>
                                <IonInput
                                    type={"password"}
                                    placeholder={"Enter password..."}
                                    value={password}
                                />
                            </IonItem>

                            <IonItem color={"primary"}>
                                <IonLabel>Remember Me?</IonLabel>
                                <IonCheckbox
                                    slot={"end"}
                                    checked={rememberMe}
                                    color={"success"}
                                />
                            </IonItem>
                        </IonItemGroup>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
}
