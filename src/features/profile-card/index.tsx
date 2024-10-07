import {useState} from "react";
import {ProfileView} from "../../widgets/profile-view";
import {observer} from "mobx-react-lite";
import {profile} from "./profileCardState";

export const ProfileCard = observer(() => {
    const [isEditMode, setIsEditMode] = useState(false);

    if(!profile)
        return <div>Загрузка...</div>

    return <>
        {!isEditMode &&
            <ProfileView {...profile}/>
        }
    </>
})