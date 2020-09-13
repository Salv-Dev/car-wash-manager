import React from 'react';

import { Customer, ClientName, ClientPhone } from './styles';

export default function CustomerComponent() {
    return (
        <Customer>
            <ClientName>Fulano de tal</ClientName>
            <ClientPhone>(xx)xxxxx-xxxx</ClientPhone>
        </Customer>
    )
}