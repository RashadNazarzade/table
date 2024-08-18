import ExpandRow from '../components/expand-row';
import { ColumnDef, RowData, TTableProps } from '../types/table';
import DefaultActionMenu from '../components/default-action-menu';
import {
    DEFAULT_ACTION_COLUMN_PROPS,
    DEFAULT_EXPAND_ACTION_COLUMN_PROPS,
} from '../config/action';

export default function useActionsColumns(options: TTableProps) {
    const addedColumnStart = options.enableExpanding ? ['tb_expand'] : [];
    const addedColumnsEnd = options.enableActions ? ['tb_actions'] : [];

    let expandedColumns = options.enableActions
        ? [
              ...options.columns,
              {
                  ...DEFAULT_ACTION_COLUMN_PROPS,
                  cell: (props) => (
                      <DefaultActionMenu
                          {...props}
                          MenuItems={options.actionMenuItems}
                      />
                  ),
                  ...(options.actionColumn ?? {}),
              } as ColumnDef<RowData>,
          ]
        : options.columns;

    expandedColumns = options.enableExpanding
        ? [
              {
                  ...DEFAULT_EXPAND_ACTION_COLUMN_PROPS,
                  cell: (props) => <ExpandRow {...props} />,
              } as ColumnDef<RowData>,
              ...expandedColumns,
          ]
        : expandedColumns;

    return {
        addedColumnsEnd,
        addedColumnStart,
        expandedColumns,
    };
}
