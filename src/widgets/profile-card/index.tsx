import {useEffect, useState} from "react";
import {ProfileView} from "./ui/ProfileView";
import {observer} from "mobx-react-lite";
import {getProfileAsync, profile} from "./store/profileCardState";
import {ProfileEdit} from "./ui/ProfileEdit";

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

        {isEditMode &&
            <ProfileEdit/>
        }
    </>
})