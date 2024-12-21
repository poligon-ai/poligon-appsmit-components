// src/components/feed_search/index.tsx
import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm'
import { MantineProvider, Button, TextInput } from '@mantine/core'
import '@mantine/core/styles.css'

const FeedSearch = () => {
    return (
        <MantineProvider>
            <div style={{ padding: '20px' }}>
                <TextInput placeholder="Search..." />
                <Button>Search</Button>
            </div>
        </MantineProvider>
    )
}

export default FeedSearch
