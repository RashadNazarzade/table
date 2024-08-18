import { ColumnDef, RowData } from '../types/table';

export const DEFAULT_ACTION_COLUMN_PROPS = {
    id: 'tb_actions',
    accessorKey: 'tb_actions',
    header: 'Əməliyyatlar',
    size: 100,
    minSize: 50,
    maxSize: 200,
} as ColumnDef<RowData>;

export const DEFAULT_EXPAND_ACTION_COLUMN_PROPS = {
    id: 'tb_expand',
    accessorKey: 'tb_expand',
    header: '',
    size: 100,
    minSize: 50,
    maxSize: 200,
} as ColumnDef<RowData>;
