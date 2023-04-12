import React from "react";
import {Input} from "@mui/material";
import styles from './writeTaskCard.module.scss'
import EditorJS from "@editorjs/editorjs";
interface WriteTaskCardProps {
    title?: string;
}




const WriteTaskCard: React.FC<WriteTaskCardProps> = ({title}: WriteTaskCardProps) => {
    React.useEffect(() => {
        const editor = new EditorJS ({
            holder: 'editor'
        })
    }, [])

return (
    <div>
        <Input classes={{root: styles.titleField}} placeholder="Заголовок" defaultValue={title}/>
        <div id="editor">

        </div>
    </div>

)
}


export default WriteTaskCard;