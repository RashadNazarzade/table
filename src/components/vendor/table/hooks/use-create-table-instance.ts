import { useEffect, useMemo } from 'react';
import { useReactTable } from '@tanstack/react-table';

import useTableMeta from './use-table-meta';
import { RowData, TTableProps, TAny } from '../types/table';
import { createModelsFromTableOptions } from '../utils/create';

export default function useCreateTableInstance(options: TTableProps) {
    const isDebugMode = options.enableDebug
        ? options.enableDebug
        : import.meta.env.DEV;

    const tableModels = useMemo(
        () => createModelsFromTableOptions(options),
        [options],
    );
    const { state, actions, addedColumnsEnd, expandedColumns } =
        useTableMeta(options);


    const table = useReactTable<RowData>({
        ...options,
        ...tableModels,
        columns: expandedColumns,
        initialState: {
            columnPinning: state.columnPinning,
        },
        state: {
            expanded: state.expanded,
            pagination: state.pagination,
            columnOrder: [...state.columnOrder, ...addedColumnsEnd],
        },
        debugTable: isDebugMode,
        debugHeaders: isDebugMode,
        debugColumns: isDebugMode,
        autoResetPageIndex: false,

        onExpandedChange: actions.setExpanded,
        onPaginationChange: actions.setPagination,

        enableColumnResizing: true,
        columnResizeMode: 'onChange',
        defaultColumn: {
            size: 400,
            minSize: 200,
            maxSize: Number.MAX_SAFE_INTEGER,
        },
    });

    useEffect(() => {
        const initialColumnOrder: string[] = table
            .getAllColumns()
            .filter((col: TAny) => !!col.columnDef?.accessorKey)
            .map((col: TAny) => col.columnDef?.accessorKey) as string[];

        actions.setColumnOrder(initialColumnOrder);
    }, []);

    return table;
}
