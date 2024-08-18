import { useState } from 'react';

import { TTableProps } from '../types/table';
import useActionsColumns from './use-action-column';

export default function useTableMeta(options: TTableProps) {
    const { addedColumnsEnd, expandedColumns } =
        useActionsColumns(options);

    const [expanded, setExpanded] = useState({});
    const [filter, setFilter] = useState({});
    const [columnOrder, setColumnOrder] = useState<string[]>([]);
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10,
    })
    const [columnPinning, setColumnPinning] = useState({
        left: [],
        right: addedColumnsEnd,
    });

    return {
        addedColumnsEnd,
        state: {
            expanded,
            filter,
            columnOrder,
            columnPinning,
            pagination,
        },
        actions: {
            setExpanded,
            setFilter,
            setPagination,
            setColumnOrder,
            setColumnPinning,
        },
        expandedColumns,
    };
}
