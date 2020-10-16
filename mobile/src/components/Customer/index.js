import React from 'react';

import { Customer, ClientName, ClientPhone } from './styles';

export default function CustomerComponent({ content }) {
    return (
        <Customer>
            <ClientName>{content.name}</ClientName>
            <ClientPhone>{content.phone}</ClientPhone>
        </Customer>
    )
}