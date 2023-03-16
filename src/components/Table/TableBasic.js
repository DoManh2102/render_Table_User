import React from 'react';
import Table from 'react-bootstrap/Table';


function TableBasic({ headerList, data, }) {
    return (
        <Table bordered style={{ color: '#black' }}>
            <thead>
                <tr>
                    {headerList?.map((title, index) =>
                        <th key={index} style={{ textAlign: 'center' }}>{title.fields.toUpperCase()}</th>
                    )}
                </tr>
            </thead>
            <tbody>
                {data && data.length > 0 && data.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name.title} {item.name.first} {item.name.last}</td>
                            <td>{item.login.username}</td>
                            <td className='text-center'>
                                <img src={item.picture.thumbnail} />
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table >
    );
}

export default TableBasic;