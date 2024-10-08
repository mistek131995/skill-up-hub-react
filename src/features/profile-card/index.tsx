import {useEffect, useState} from "react";
import {ProfileView} from "../../widgets/profile-view";
import {observer} from "mobx-react-lite";
import {getProfileAsync, profile} from "./profileCardState";

export const ProfileCard = observer(() => {
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        getProfileAsync()
    }, []);

    console.log(profile.lastName)

    if(!profile)
        return <div>Загрузка...</div>

    return <>
        {!isEditMode &&
            <ProfileView {...profile}/>
        }
    </>
})