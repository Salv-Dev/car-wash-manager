import React from 'react';

import { Schedule, Date, Service, ClientName } from './styles';

export default function ScheduleComponent() {
    return (
        <Schedule>
            <Date>11/09/20 - 08:00</Date>
            <Service>Lavagem Completa</Service>
            <ClientName>Fulano de tal</ClientName>
        </Schedule>
    )
}