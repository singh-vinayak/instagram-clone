import React from 'react';
import useUser from '../../hooks/use-user';

export default function Sidebar() {
    const { user: { docId, userId, following, username, fullName } = {} } = useUser();
    //console.log(following)
    return (<p>I am the sidebar</p>);
}