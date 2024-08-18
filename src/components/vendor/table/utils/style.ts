import { CSSProperties } from 'react';

import { TColumn, TRow } from '../types/table';

export function commonPinStyles(column: TColumn): CSSProperties {
    const isPinned = column.getIsPinned();

    const isLastLeftPinnedColumn =
        isPinned === 'left' && column.getIsLastColumn('left');
    const isFirstRightPinnedColumn =
        isPinned === 'right' && column.getIsFirstColumn('right');

    return {
        zIndex: isPinned ? 1 : 0,
        width: column.getSize(),
        position: isPinned ? 'sticky' : 'relative',
        backgroundColor: isPinned ? 'white' : 'transparent',
        left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
        right:
            isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
        boxShadow: isLastLeftPinnedColumn
            ? 'inset -4px 0 8px -4px #F2F3F7, inset 4px 0 8px -4px #F2F3F7 '
            : isFirstRightPinnedColumn
                ? 'inset 4px 0 8px -4px #F2F3F7, inset -4px 0 8px -4px #F2F3F7'
                : undefined,
    };
}

export function expandedRow(row: TRow): CSSProperties {
    const isExpanding = row.depth > 0;

    const borderColor = isExpanding ? "#E1E3EC" : "#F4F4F4"

    return {
        border: `1px solid ${borderColor}`,
        backgroundColor: isExpanding ? '#F2F3F7' : 'transparent'
    }
}