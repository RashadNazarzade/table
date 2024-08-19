import { Table } from '@/components';
import { ColumnDef } from '@tanstack/react-table';
import { useMemo } from 'react';

import { data } from './data';
import { Center, MenuItem } from '@chakra-ui/react';

import { TCellContext } from '@/components/vendor/table/types/table';

const MenuList = ({ cell }: TCellContext) => (
    <>
        <MenuItem>{cell.row.original.first_name}</MenuItem>
        <MenuItem>Hello</MenuItem>
        <MenuItem>lkasjdlsa</MenuItem>
        <MenuItem>sadasd</MenuItem>
    </>
);

export default function Home() {
    const columns = useMemo(
        () =>
            [
                {
                    accessorKey: 'first_name',
                    header: 'Namme',
                },
                {
                    accessorKey: 'last_name',
                    header: 'Surename',
                    // cell: () => <h1>Helloo</h1>,
                },
                {
                    accessorKey: 'email',
                    header: 'Email',
                    // cell: () => <h1>Helloo</h1>,
                },
                {
                    accessorKey: 'gender',
                    header: 'Gender',
                    // cell: () => <h1>Helloo</h1>,
                },
                {
                    accessorKey: 'ip_address',
                    header: 'Ip Adresss',
                },
            ] as ColumnDef<any>[],
        [],
    );

    return (
        <Center w="full">
            {/* Sadə table avtomatik ona verilən bütün sahəni tuturç responsivdir */}
            {/* Bidə table olan modellər memoraized edimişəm deyə hər properti dəyişəndə tam ekranda göstəməyə bilər, səhifəni  yeniləsəz düzələcək */}
            {/* <Table
                data={data}
                columns={columns}
                // enablePagination

                // enableActions
                // actionMenuItems={MenuList}
                // // actionColumn={{
                // //     // header: "Nennen",
                // //     cell: ({ row }) => <span>{row.original.last_name}</span>
                // // }}4

                // toolbar={{
                //     title: "Ödənişlər"
                // }}

                // enableExpanding
                // getSubRows={(row) => row.sub}

                // enableFilters
                // onFilter={(props) =>{
                //     console.log(props)
                // }}
            /> */}

            {/* ================================================================ */}

            {/* 
            
                Sadə table pagination ilə 
                enablePagination propsu ile active olur 
                her seyi ozü hell edir təkcə react query ilə
                işlədiləndə doc dan manual pagiantion nan maraqlansınlar
            
            */}

            {/* <Table data={data} columns={columns} enablePagination /> */}

            {/* ================================================================ */}

            {/* 
            
                Action column mu enableActions propsu ilə açilir amma actionMenuİtems i içinə göndərməsəz bos bir menu göstərir default

                default right pinned di stickydi

                actionMenuİtems adi Chakra Ui da olan Menuİtem lərdən bir componentdi, argument olaraq TCellContext ötürürəm 

                ! actionColumn göndərildikdə içində cell propsu varsa avtomatik menu ləğv olunur üstünə yazılır
                // const MenuList = ({ cell }: TCellContext) => (
                    <>
                            <MenuItem>{cell.row.original.first_name}</MenuItem>
                            <MenuItem>Hello</MenuItem>
                            <MenuItem>lkasjdlsa</MenuItem>
                            <MenuItem>sadasd</MenuItem>
                        </>
                    );

                Bunan sonra actionColumn props u var action ın yuxarda columnlarda təyin olunduğu kimi istənilən propsunun bu tanstack table da aidi dəyişmək olur 
                Bu propslara header ı, cell i, belə column definition-unda olan her props daxildi
                
            */}

            {/* <Table
                data={data}
                columns={columns}
                enableActions
                actionMenuItems={MenuList}
                actionColumn={{
                    header: "Actions",
                    cell: ({ row }) => <span>{row.original.last_name}</span>
                }}
            /> */}

            {/* ================================================================ */}

            {/* 
            
                Toolbar disable edilə bilmir həmişə activdir,

                Default toolbarı dəyişmək üçün toolbar propsu var içinədə props laraq

                {
                    title?: string;  Ümumi tollbarın soldakı title i dəyişir göndrilməssə title olmur bos bir string göstərilir


                    titleProps?: HeadingProps; Titleın içinə göndərilən propslardin HeadingProps (Charkra Uİ) olaraq qaəbul edir


                    btnTitle?: string; Buttonun yazısıdır

                    btnProps?: ButtonProps; Buttonun propslarıdır Onclick ....


                    btnIcon?: React.ComponentType; Buttonun İconudur dəuişmək üçün


                    BtnComp?: React.ComponentType<{
                        table: TTable
                    }>  Ümumi button Compenintine öz componentiniz ilə dəyişmək üçün Hımın comoponentin içinə table göndərirəm 
                }
            
                Bidə Toolbar ın özü içinə table göndərdiyim toolbar ı əvəz edəcək olan componentdir toolbar ın önəmi qalmır bu propsu işlətidiyinizdə
            
            
            */}

            {/* <Table
                data={data}
                columns={columns}
             
                // // Toolbar={() => null}
                // toolbar={{
                //     title: "Ödənişlər"
                // }}

    
            /> */}

            {/* ================================================================ */}

            {/* 
                Expanding da enableExpanding prospu ilə active olur,
                Bundan əlavə sub rows u seçməliziniz aşağıda yazdığım row 
                data nın özüdür ordan sub row olan propertini seçməlisiniz 
                əgər collection da hır hası birində bu data yoxdurdsa boş xana
                kimi görsənəcək

                İç içə nə qədər subRow olsa o qədər açıla bilər depth leveli istənilən qədərdir
            
            */}

            {/* <Table
                data={data}
                columns={columns}
              

                // enableExpanding
                // getSubRows={(row) => row.sub}

    
            /> */}

            {/* ================================================================ */}

            {/* 
                enableFilters bütün siz daxil etdiyiniz columnlara əlavə olunur
                Əgər onFİlter methodu yazilmarsa birbaşa columnu filter edir
                Əgər daxil edilibsə o functsiani işlərir argumentləri

                {
                 
                    column: TColumn, // hansı columnda olarsa o column 

                    table: TTable,
                    event: React.ChangeEvent<HTMLInputElement>
    
                }
            
            */}

            {/* <Table
                data={data}
                columns={columns}

                // enableFilters
                // onFilter={(props) =>{
                //     console.log(props)
                // }}
            /> */}
        </Center>
    );
}
