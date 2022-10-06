import React from 'react'

function List({ employees, handleEdit, handleDelete }) {
  return (
    <div className='w-full h-full'>
      <table className='w-full h-full mt-7' >
        <tr className='text-center'>
          <th className='text-xl uppercase'>No.</th>
          <th className='text-xl uppercase'>Name</th>
          <th className='text-xl uppercase'>Email</th>
          <th className='text-xl uppercase'>Company</th>
          <th className='text-xl uppercase' colSpan={2} >
            Actions
          </th>
        </tr>
        <tbody>
        {employees.length > 0 ? (
            employees.map((employee, i) => (
                <tr key={employee.id} className=" even:bg-slate-200 h-16 text-center">
                    <td>{i + 1}</td>
                    <td>{employee.fullName}</td>
                    <td>{employee.email}</td>
                    <td>{employee.company}</td>
                    <td className="text-right">
                        <button
                            onClick={() => handleEdit(employee.id)}
                            className="w-14 h-8 rounded-xl cursor-pointer border border-slate-300 flex items-center justify-around bg-green-200">Edit</button>
                    </td>
                    <td className="text-left">
                        <button
                            onClick={() => handleDelete(employee.id)}
                            className="w-14 h-8 rounded-xl cursor-pointer border border-slate-300 flex items-center justify-around bg-red-200">Delete</button>
                    </td>
                </tr>
            ))
        ): (
            <tr>
                <td colSpan={7}>No Employee</td>
            </tr>
        )}
        </tbody>
      </table>
    </div>
  )
}

export default List