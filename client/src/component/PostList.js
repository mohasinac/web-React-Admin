import React from 'react'
import { List , Datagrid, TextField , DateField , EditButton , DeleteButton} from 'react-admin'

function PostList(props) {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id'/>
                <TextField source='title'/>
                <TextField source='author'/>
                <DateField source='publishedAt'/>
                <EditButton basePath="/posts"/>
                <DeleteButton basePath="/posts"/>
            </Datagrid>
        </List>
    )
}

export default PostList

