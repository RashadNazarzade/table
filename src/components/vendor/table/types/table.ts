/* eslint no-use-before-define: 0 */

import type {
    Row,
    Table,
    Column,
    ColumnDef,
    RowModel,
    CellContext,
    TableOptions,
} from '@tanstack/react-table';
import type { ButtonProps, HeadingProps } from "@chakra-ui/react"


export type * from '@tanstack/react-table';

export type TAny = any;
export type TRow = Row<RowData>;
export type TTable = Table<RowData>;
export type TColumn = Column<RowData>;
export type TRowModel = RowModel<RowData>;
export type RowData = Record<string, TAny>;
export type TColumnsDef = ColumnDef<RowData>;
export type TModelConstructor = (table: TTable) => () => TRowModel;
export type TCellContext = CellContext<RowData, unknown>;

export type CoreTableModels = 'getCoreRowModel';
export type ManualTableModels =
    | 'getFilteredRowModel'
    | 'getExpandedRowModel'
    | 'getPaginationRowModel';

export type TableModels = Record<CoreTableModels, TModelConstructor> & {
    [K in ManualTableModels]?: TModelConstructor;
};


export type TTableOptions = TableOptions<RowData> & {
    data?: RowData;
    columns: TColumnsDef[];
    enableDebug?: boolean;
    enableToolbar?: boolean;
    enableActions?: boolean;
    enablePagination?: boolean;

    actionColumn?: Partial<TColumnsDef>;
    actionMenuItems?: React.ComponentType<TCellContext>;
    
    Toolbar?: React.ComponentType<{
        table: TTable
    }>

    toolbar?: {
        title?: string;
        btnTitle?: string;
        btnProps?: ButtonProps;
        titleProps?: HeadingProps;
        btnIcon?: React.ComponentType;
        BtnComp?: React.ComponentType<{
            table: TTable
        }>
    }


    onFilter?({
        column,
        event,
        table,
    } : {
        column: TColumn,
        table: TTable,
        event: React.ChangeEvent<HTMLInputElement>
    }): void
};

export type TTableProps = Omit<TTableOptions, 'getCoreRowModel'>;

// Contexts
export type TTableContext = {
    table: TTable;
    options: Partial<TTableProps>
};

// utils

export type TTableStateHolder = Record<string, TAny>;
export type TTableStateUpdaterHolder = Record<
    string,
    React.Dispatch<React.SetStateAction<TAny>>
>;
