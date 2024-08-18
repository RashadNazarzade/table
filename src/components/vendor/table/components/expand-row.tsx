import { Center } from '@chakra-ui/react';
import { ArrowUp2, ArrowDown2 } from 'iconsax-react';

import { TCellContext } from '../types/table';

export default function ExpandRow({ row }: TCellContext) {
    const canExpand = row.getCanExpand();

    if (!canExpand) return;

    const isExpanded = row.getIsExpanded();
    const Icon = isExpanded ? ArrowUp2 : ArrowDown2;

    return (
        <Center cursor="pointer" onClick={row.getToggleExpandedHandler()}>
            <Icon size={24} />
        </Center>
    );
}
