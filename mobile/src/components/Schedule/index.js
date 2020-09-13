import React, {useState} from 'react';
import CompleteService from './../../modals/CompleteService';

import { Schedule, Date, Service, ClientName } from './styles';

export default function ScheduleComponent() {
    const [modal, setModal] = useState(false);

    return (
        <>
            <Schedule onPress={() => setModal(true)} >
                <Date>11/09/20 - 08:00</Date>
                <Service>Lavagem Completa</Service>
                <ClientName>Fulano de tal</ClientName>
            </Schedule>

            <CompleteService 
                show={modal}
                close={() => setModal(false)}
            />
        </>
    )
}