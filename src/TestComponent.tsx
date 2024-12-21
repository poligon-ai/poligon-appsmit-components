import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm'
import '@mantine/core/styles.css'
import { MantineProvider, Button } from '@mantine/core'

export default function YourComponent() {
    return (
        <MantineProvider>
            <Button>Hello from Mantine Component</Button>
        </MantineProvider>
    )
}
