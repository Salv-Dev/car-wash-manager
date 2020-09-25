import React, { useState } from 'react';
import CompleteService from './../../modals/CompleteService';

import { Schedule, Date, Service, ClientName } from './styles';

export default function ScheduleComponent({ content }) {
    const [modal, setModal] = useState(false);

    return (
        <>
            <Schedule onPress={() => setModal(true)} >
                <Date>{content.date}</Date>
                <Service>{content.service}</Service>
                <ClientName>{content.client_name}</ClientName>
            </Schedule>

            <CompleteService 
                show={modal}
                close={() => setModal(false)}
            />
        </>
    )
}