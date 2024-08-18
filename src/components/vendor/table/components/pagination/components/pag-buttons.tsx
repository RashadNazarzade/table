import { useMemo } from 'react';
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';
import {
    Flex,
    HStack,
    Button,
    IconButton,
    ButtonGroup,
} from '@chakra-ui/react';

import { useTable } from '../../../context/table';
import { getPagination, splitPagination } from '../util/pag';

export default function PagButtons() {
    const { table } = useTable();

    const count = table.getPageCount();
    const pageIdx = table.getState().pagination.pageIndex + 1;

    const setPagIndex = (idx: number, separator: boolean) => () =>
        !separator && table.setPageIndex(idx);

    const [left, right] = useMemo(
        () => splitPagination(getPagination(count, pageIdx)),
        [count, pageIdx],
    );

    return (
        <HStack>
            {table.getCanPreviousPage() && (
                <IconButton
                    variant="ghost"
                    aria-label="Prev"
                    icon={<ArrowLeft2 size={16} />}
                    onClick={() => table.previousPage()}
                />
            )}
            <ButtonGroup isAttached>
                {left.map((page) => {
                    const isSeparator = typeof page === 'string';

                    return (
                        <Button
                            key={page}
                            fontSize="14px"
                            fontWeight="400"
                            disabled={isSeparator}
                            isActive={page === pageIdx}
                            variant={isSeparator ? '' : 'outline'}
                            onClick={setPagIndex(page - 1, isSeparator)}
                            _active={{
                                color: 'white',
                                bgColor: '#A2A2A2',
                            }}
                        >
                            {page}
                        </Button>
                    );
                })}
            </ButtonGroup>
            {!!right.length && (
                <Flex p="2" mt="4" h="full" alignItems="flex-end">
                    ...
                </Flex>
            )}
            <ButtonGroup isAttached>
                {right.map((page) => {
                    const isSeparator = typeof page === 'string';

                    return (
                        <Button
                            key={page}
                            fontSize="14px"
                            fontWeight="400"
                            isActive={page === pageIdx}
                            variant={isSeparator ? '' : 'outline'}
                            onClick={setPagIndex(page - 1, isSeparator)}
                            disabled={isSeparator}
                        >
                            {page}
                        </Button>
                    );
                })}
            </ButtonGroup>
            {table.getCanNextPage() && (
                <IconButton
                    variant="ghost"
                    aria-label="next"
                    icon={<ArrowRight2 size={16} />}
                    onClick={() => table.nextPage()}
                />
            )}
        </HStack>
    );
}
