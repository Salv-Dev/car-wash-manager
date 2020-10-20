import React, { useState } from 'react';
import CompleteService from './../../modals/CompleteService';
import EditService from './../../modals/EditSchedule';

import { Schedule, Date, Service, ClientName } from './styles';

export default function ScheduleComponent({ content, completed }) {
    const [CompleteServiceModal, setCompleteServiceModal] = useState(false);
    const [EditServiceModal, setEditServiceModal] = useState(false);

    return (
        <>
            <Schedule onPress={() => setCompleteServiceModal(true)} onLongPress={() => setEditServiceModal
            (true)}>
                <Date completed={completed}>{content.date}</Date>
                <Service completed={completed}>{content.service}</Service>
                <ClientName completed={completed}>{content.client_name}</ClientName>
            </Schedule>

            { !completed && 
                <CompleteService 
                    show={CompleteServiceModal}
                    close={() => setCompleteServiceModal(false)}
                    content={content}
                />
            }

            { !completed && 
                <EditService
                    show={EditServiceModal}
                    close={() => setEditServiceModal(false)}
                    content={content}
                />
            }
        </>
    )
}