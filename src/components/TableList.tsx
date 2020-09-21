import React, { useEffect, useState } from 'react'


const TableList = () => {
    const [isLoading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<any>([]);
    useEffect(() => {
        fetch('https://5f0c22f99d1e150016b37d39.mockapi.io/api/v1/users')
          .then((response) => response.json())
          .then((json) => {setData(json); console.log(json)})
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);
    return (
        <div>
            {/* <div className="table-responsive-xl"> */}
            <table className="table table-sm">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Username</th>
                    <th scope="col">Balance</th>
                    </tr>
                </thead>
                <tbody>
                {data.map(
                (item: any) => (
                    <tr>
                    <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.username}</td>
                    <td>{item.balance}</td>
                    </tr>

                )
            )}
                </tbody>
            </table>
            </div>
          
        // </div>
    )
}

export default TableList
