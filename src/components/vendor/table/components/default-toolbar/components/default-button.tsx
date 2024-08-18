import { Button } from '@chakra-ui/react';
import { AddCircle } from 'iconsax-react';

import { TTableProps } from '../../../types/table';
import { useTable } from '../../../context/table';

type Props = {
    toolbar: TTableProps['toolbar'];
};

export default function DefaultButton({ toolbar }: Props) {
    const { table } = useTable();

    if (toolbar?.BtnComp) return <toolbar.BtnComp table={table} />;

    const btnProps = toolbar?.btnProps ?? {};
    const Icon = toolbar?.btnIcon ? (
        <toolbar.btnIcon />
    ) : (
        <AddCircle size={24} />
    );

    return (
        <Button
            leftIcon={Icon}
            colorScheme="blue"
            fontWeight="400"
            fontSize="16px"
            fontFamily="'Poppins', sans-serif"
            {...btnProps}
        >
            {toolbar?.btnTitle ?? 'Əlavə et'}
        </Button>
    );
}
