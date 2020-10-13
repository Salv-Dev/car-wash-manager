import React, { useState } from 'react';
import CompleteService from './../../modals/CompleteService';

import { Schedule, Date, Service, ClientName } from './styles';

export default function ScheduleComponent({ content, completed }) {
    const [modal, setModal] = useState(false);

    return (
        <>
            <Schedule onPress={() => setModal(true)}>
                <Date completed={completed}>{content.date}</Date>
                <Service completed={completed}>{content.service}</Service>
                <ClientName completed={completed}>{content.client_name}</ClientName>
            </Schedule>

            { !completed && 
                <CompleteService 
                    show={modal}
                    close={() => setModal(false)}
                    content={content}
                />
            }
        </>
    )
}