import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { employeesData } from "../data/EmpolyeeData";
import Swal from 'sweetalert2';
import Add from "./Add";
import List from "./List";
import Edit from "./Edit";

function Home() {
    const [employees, setEmployees] = useState(employeesData);
    const [selectedEmployee, setSelectedEmployees] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const history = useNavigate();
    const userLogout = () => {
        localStorage.removeItem("user_login")
        history("/");
    }
    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [employee] = employees.filter(employee => employee.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${employee.fullName}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setEmployees(employees.filter(employee => employee.id !== id));
            }
        });
    }
    const handleEdit = (id) => {
        
    
    }
  return (
    <div className='w-full h-full'>
        <div className='w-full h-20 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 flex items-center justify-between' >
            <h1 className='text-2xl ml-4'>Listing Page</h1>
            <div className='w-[30%] h-full flex justify-around items-center'>
                <button className='bg-white w-24 h-11 rounded-xl cursor-pointer text-lg items-end transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white duration-300 ' onClick={userLogout}>Logout</button>
                <button className='bg-white w-24 h-11 rounded-xl cursor-pointer text-lg items-end transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white duration-300' onClick={() => setIsAdding(true)}>Add Data</button>
            </div>
        </div>
        <div className='w-full h-auto'>
            {/* list */}
            {!isAdding && !isEditing && (
              <List
                employees={employees}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
            {/* add */}
            {isAdding && (
                <Add
                    employees={employees}
                    setEmployees={setEmployees}
                    setIsAdding={setIsAdding}
                />
            )}
            {isEditing && (
                <Edit
                    employees={employees}
                    selectedEmployee={selectedEmployee}
                    setEmployees={setEmployees}
                    setIsEditing={setIsEditing}
                />
            )}
        </div>
    </div>
  )
}

export default Home