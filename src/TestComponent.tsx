// src/YourComponent.tsx
import '@mantine/core/styles.css'
import { MantineProvider, Button } from '@mantine/core'

export default function YourComponent() {
    return (
        <MantineProvider>
            <Button>Hello from Component</Button>
        </MantineProvider>
    )
}
