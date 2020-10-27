import React, { useState } from 'react';
import AccessDeniedModal from './../../modals/AccessDenied';

import { Customer, ClientName, ClientPhone } from './styles';

export default function CustomerComponent({ content }) {
    const [RemoveCustomerModal, setRemoveCustomerModal] = useState(false);
    const [EditCustomerModal, setEditCustomerModal] = useState(false);

    return (
        <>
            <Customer onPress={() => setRemoveCustomerModal(true)} onLongPress={() => setEditCustomerModal(true)}>
                <ClientName>{content.name}</ClientName>
                <ClientPhone>{content.phone}</ClientPhone>
            </Customer>

            <AccessDeniedModal 
                show={RemoveCustomerModal}
                close={() => setRemoveCustomerModal(false)}
            />

            <AccessDeniedModal 
                show={EditCustomerModal}
                close={() => setEditCustomerModal(false)}
            />
        </>
    )
}