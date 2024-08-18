import {
    createContext,
    useContext,
    ComponentProps,
    ComponentType,
    PropsWithChildren,
} from 'react';

import {
    TAny,
    TTableContext,
    TTableOptions,
    TTableProps,
} from '../types/table';
import useCreateTableInstance from '../hooks/use-create-table-instance';

type TWrapper<C extends ComponentType<TAny>> = ComponentProps<C> & {
    table: Omit<TTableOptions, 'getCoreRowModel'>;
};

const defaultTableContext = {} as TTableContext;
const TableContext = createContext(defaultTableContext);

export default function TableProvider({
    children,
    ...options
}: PropsWithChildren<TTableProps>) {
    const table = useCreateTableInstance(options);
    const tbOptions = {
        onFilter: options.onFilter,
    };

    return (
        <TableContext.Provider
            value={{ table, options: tbOptions }}
            {...{ children }}
        />
    );
}

export const useTable = () => useContext(TableContext);

export function withTableContext<C extends ComponentType<TAny>>(Component: C) {
    return function TableContextWrapper({ table, ...props }: TWrapper<C>) {
        return (
            <TableProvider {...table}>
                <Component {...(props as ComponentProps<C>)} />
            </TableProvider>
        );
    };
}
