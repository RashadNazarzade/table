import {
    Menu,
    MenuList,
    MenuButton,
    IconButton,
    Center,
    Portal,
} from '@chakra-ui/react';
import { More } from 'iconsax-react';

import { noop } from '../utils/helpers';
import { TTableProps, TCellContext } from '../types/table';

type Props = TCellContext & {
    MenuItems: TTableProps['actionMenuItems'];
};

export default function DefaultActionMenu({ MenuItems, ...props }: Props) {
    const Comp = MenuItems ? MenuItems : noop;

    return (
        <Menu isLazy>
            <MenuButton
                w="full"
                _hover={{}}
                _active={{}}
                as={IconButton}
                variant="ghost"
                display="flex"
                alignItems="center"
                justifyItems="center"
            >
                <Center zIndex="0">
                    <More size={24} color="#A2A2A2" />
                </Center>
            </MenuButton>
            <Portal>
                <MenuList zIndex="1000">
                    <Comp {...props} />
                </MenuList>
            </Portal>
        </Menu>
    );
}
