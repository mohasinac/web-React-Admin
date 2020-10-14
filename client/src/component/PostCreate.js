import React from 'react'
import { Create , SimpleForm , TextInput , DateInput } from 'react-admin'

function PostCreate(props) {
    return (
        <Create title="create a post" {...props}>
            <SimpleForm>
                <TextInput source='title'></TextInput>
                <TextInput source='author'></TextInput>
                <DateInput label='published at' source='publishedAt'></DateInput>
            </SimpleForm>
        </Create>
    )
}

export default PostCreate
