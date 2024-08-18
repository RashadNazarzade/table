import { Heading, HStack } from '@chakra-ui/react';

import { useTable } from '../../context/table';
import { TTableProps } from '../../types/table';
import ToolbarButton from './components/default-button';

type Props = {
    toolbar: TTableProps['toolbar'];
    Toolbar: TTableProps['Toolbar'];
};

export default function DefaultToolbar({ toolbar, Toolbar }: Props) {
    const { table } = useTable();
    const headingProps = toolbar?.titleProps ?? {};

    if (Toolbar) return <Toolbar table={table} />;

    return (
        <HStack justifyContent="space-between">
            <Heading
                size="18px"
                fontWeight="600"
                lineHeight="25px"
                fontFamily="'Poppins', sans-serif"
                {...headingProps}
            >
                {toolbar?.title ?? ''}
            </Heading>

            <ToolbarButton toolbar={toolbar} />
        </HStack>
    );
}
