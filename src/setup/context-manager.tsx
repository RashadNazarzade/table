import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { theme } from '@/config/theme';

const client = new QueryClient();

export default function ContextManager({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <BrowserRouter>
            <QueryClientProvider client={client}>
                <ChakraProvider theme={theme}>{children}</ChakraProvider>
            </QueryClientProvider>
        </BrowserRouter>
    );
}
