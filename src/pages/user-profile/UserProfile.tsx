import styles from './UserProfile.module.scss'

import FilesContainer from "../../components/files-container/FilesContainer"
import FilesLoader from "../../components/files-loader/FilesLoader"

const UserProfile = () => {
    return (
        <div>
            <FilesLoader/>
            <FilesContainer/>
        </div>
    )
}

export default UserProfile