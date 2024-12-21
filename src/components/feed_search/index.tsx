// src/components/feed_search/index.tsx
import React from 'react'
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

// Make sure to export as default
export default FeedSearch
