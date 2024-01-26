import React, { useMemo } from 'react'
import './table.css'
import { useReactTable, flexRender, getCoreRowModel } from '@tanstack/react-table'
import mData from './MOCK_data.json'


const table = ({bmi}) => {

    console.log({bmi})

    const data = useMemo(() => mData , [])

    const columns = [
        {
            header: 'ID',
            accessorKey: 'id',
            footer: 'ID',
        },
        {
            header: 'Posture',
            accessorKey: 'ท่าในการเล่น',
            footer: 'Posture',
        },
        {
            header: 'Rep',
            accessorKey: 'จำนวน',
            footer: 'Rep',
        },
    ]

    const table = useReactTable({
        data, 
        columns, 
        getCoreRowModel : getCoreRowModel()})

  return ( 
    <div className='w3-display'>
        <h2>CHEST DAY BMI 18.50 or lower</h2>
    <div className='w3-container'>
        <table className='w3-table-all w3-xlarge w3-centered w3-hover-green'>
            <thead>
            {table.getHeaderGroups().map(headerGroup =>(
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                    <th key={header.id}>
                        {flexRender(header.column.columnDef.header,header.getContext()
                        )}
                    </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody>
            {table.getRowModel().rows.map(row => (
                    <tr key = {row.id}>
                        {row.getVisibleCells().map(cell => 
                            <td key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        )}
                    </tr>
                ))}
            </tbody>  
            <tfoot>
            {table.getFooterGroups().map(footerGroup =>(
                <tr key={footerGroup.id}>
                    {footerGroup.headers.map(header => (
                    <th key={header.id}>
                        {flexRender(header.column.columnDef.header,header.getContext()
                        )}
                    </th>
                    ))}
                </tr>
            ))}
            </tfoot>
        </table>
    </div>
</div> 
  )
}

export default table