import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

import App from './App.tsx';
import ContextManager from '@/setup/context-manager';

if (import.meta.env.PROD) {
    disableReactDevTools();
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ContextManager>
            <App />
        </ContextManager>
    </StrictMode>,
);
