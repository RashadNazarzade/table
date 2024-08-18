export function getPagination(pageCount: number, currentPage: number) {
    const delta = 3;
    const range = [];

    for (
        let i = Math.max(2, currentPage - delta);
        i <= Math.min(pageCount - 1, currentPage + delta);
        i++
    ) {
        range.push(i);
    }

    if (currentPage - delta > 2) {
        range.unshift('...');
    }
    if (currentPage + delta < pageCount - 1) {
        range.push('...');
    }

    range.unshift(1);

    if (pageCount > 1) {
        range.push(pageCount);
    }

    return range;
}

export function splitPagination(pagination: (string | number)[]) {
    const ellipsisIndex = pagination.indexOf('...');

    if (ellipsisIndex === -1) {
        return [pagination, []] as [number[], number[]];
    }

    const beforeEllipsis = pagination.slice(0, ellipsisIndex);
    const afterEllipsis = pagination.slice(ellipsisIndex + 1);

    return [beforeEllipsis, afterEllipsis] as [number[], number[]];
}
