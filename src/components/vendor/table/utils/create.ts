import {
    getCoreRowModel,
    getFilteredRowModel,
    getExpandedRowModel,
    getPaginationRowModel,
} from '@tanstack/react-table';

import { TableModels, TTableProps } from '../types/table';

export function createModelsFromTableOptions(tableOptions: TTableProps) {
    const tableState: TableModels = {
        getCoreRowModel: getCoreRowModel(),
    };

    if (tableOptions.enableExpanding)
        tableState['getExpandedRowModel'] = getExpandedRowModel();

    if (tableOptions.enablePagination)
        tableState['getPaginationRowModel'] = getPaginationRowModel();

    if (tableOptions.enableFilters)
        tableState['getFilteredRowModel'] = getFilteredRowModel();

    return tableState;
}
