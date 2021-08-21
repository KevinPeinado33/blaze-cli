import React from 'react'
import { Alert } from 'react-bootstrap';

export const AlertMsg = ({ variant, msg }) => 
    (
        <Alert variant={variant} style={{ marginTop: 70 }}>
            {msg}
        </Alert>
    )

