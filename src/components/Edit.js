import React, {useState} from 'react'
import Swal from 'sweetalert2';

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {
    const id = selectedEmployee.id;
    const [fullName, setFullName] = useState(selectedEmployee.fullName);
    const [email, setEmail] = useState(selectedEmployee.email);
    const [number, setNumber] = useState(selectedEmployee.number);
    const [gender, setGender] = useState(selectedEmployee.gender);
    const [address, setAddress] = useState(selectedEmployee.address);
    const [company, setCompany] = useState(selectedEmployee.company);
    const [bank, setBank] = useState(selectedEmployee.bank);
    const [type, setType] = useState(selectedEmployee.type);
    const [territory, setTerritory] = useState(selectedEmployee.territory);
    const handleUpdate = e => {
      e.preventDefault();

      if(!fullName || !email ){
          return Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: 'All fields are required.',
              showConfirmButton: true
          });
      }

      const employee = {
        fullName,
        email,
        number,
        gender,
        address,
        company,
        bank,
        type,
        territory
      };

      for (let i = 0; i < employees.length; i++) {
          if (employees[i].id === id) {
              employees.splice(i, 1, employee);
              break;
          }
      }

      setEmployees(employees);
      setIsEditing(false);

      Swal.fire({
          icon: 'success',
          title: 'Updated!',
          text: `${employee.fullName}'s data has been updated.`,
          showConfirmButton: false,
          timer: 1500
      });
  };


  return (
    <div className='w-full h-full flex justify-center items-center'>
        <div className='w-[800px] h-[80vh] border border-slate-500 mt-10 rounded-xl shadow-xl'>
            <form className='flex flex-col' onSubmit={handleUpdate}>
                <div className='flex justify-around mt-2'>
                    <div className=''>
                        <h1 className='text-xl'>Full Name</h1>
                        <input className=' border border-b-black mt-5 w-64 outline-none ' 
                         type="text" 
                         id='fullName'
                         value={fullName}
                         onChange={e => setFullName(e.target.value)}
                         />
                    </div>
                    <div className='emailConatiner'>
                        <h1 className='text-xl'>Email</h1>
                        <input className=' border border-b-black mt-5 w-64 outline-none ' type="email"
                         id='email'
                         value={email}
                         onChange={e => setEmail(e.target.value)} 
                         />
                    </div>
                </div>
                <div className='flex justify-around mt-2 '>
                    <div className=''>
                        <h1 className='text-xl'>Gender</h1>
                        <div className='flex '>
                            <div className='flex justify-center mt-5 items-center'>
                                <input 
                                type="radio" 
                                id='gender'
                                value={gender}
                                onChange={e => setGender(e.target.value)} name="gender"
                                />
                                <p>Female</p>
                            </div>
                            <div className='ml-10 flex justify-center mt-5 items-center'>
                                <input 
                                type="radio" 
                                name="gender"
                                id='gender'
                                value={gender}
                                onChange={e => setGender(e.target.value)}
                                />
                                <p>Male</p>
                            </div>
                        </div>
                    </div>
                    <div className='ml-24'>
                        <h1 className='text-xl'>Mobile No</h1>
                        <input 
                        type="tel" 
                        id="number" 
                        name="number"
                        className='border border-b-black mt-5 w-64 outline-none '
                        value={number}  
                        onChange={e => setNumber(e.target.value)} 
                        />
                    </div>
                </div> 
                <div className='mt-6 ml-16'>
                    <h1 className='text-xl '>Address</h1>
                    <input type="address" className='border border-b-black mt-5 w-96 outline-none'
                    id="adress" 
                    value={address}  
                    onChange={e => setAddress(e.target.value)}
                    />
                </div>
                <div className='flex justify-around mt-6 '>
                    <div className='mr-20'> 
                        <h1 className='text-xl'>Represents Company</h1>
                        <select className='w-44 border border-slate-500 h-11 rounded-xl'
                        id='company'
                        value={company}
                        onChange={e => setCompany(e.target.value)}
                        >

                            <option className=''>8848 Digital LLP</option>
                            <option className=''>Wayne Enterprises</option>
                            <option className=''>Showbiz Pizza Place</option>
                            <option className=''>Pro Garden Management</option>
                            <option className=''>The Lawn Guru</option>
                        </select>
                    </div>
                    <div className='mr-11'>
                        <h1 className='text-xl'>Territory</h1>
                        <select
                        id='territory'
                        className='w-44 border border-slate-500 h-11 rounded-xl'
                        value={territory}
                        onChange={e => setTerritory(e.target.value)}
                        >
                            <option>East</option>
                            <option>West</option>
                            <option>North</option>
                            <option>South</option>
                        </select>
                    </div>
                </div>
                <div className='flex justify-around mt-6'>
                    <div className=''>
                        <h1 className='text-xl'>Type</h1>
                        <div className='flex'>
                        <div className='flex justify-center mt-5 items-center mr-11'>
                            <input type="radio" name="type"
                             id='type' value={type}
                            onChange={e => setType(e.target.value)}  
                            />
                            <p>Company</p>
                        </div>
                        <div className='flex justify-center mt-5 ml-7 items-center'>
                             <input type="radio" name="type" id='type' value={type}
                          onChange={e => setType(e.target.value)} 
                            />
                            <p>Individual</p>
                        </div>
                        </div>
                    </div>
                    <div className='mr-11'>
                        <h1 className='text-xl'>Bank</h1>
                        <select
                        className='w-44 border border-slate-500 h-11 rounded-xl mt-5'
                        value={bank} id='bank'
                        onChange={e => setBank(e.target.value)}
                        >
                            <option>Goldman Sachs</option>
                            <option>Citigroup Inc</option>
                            <option>Wells Fargo</option>
                            <option>Bank of America</option>
                            <option>HDFC</option>
                        </select>
                    </div>
                </div>
                <div className='flex justify-around text-xl'>
                    <button type='submit' className='w-40 h-10  bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 flex justify-center items-center rounded-lg mt-10 cursor-pointer' value="Update" >Save</button>
                    <button value="Cancle" className='w-40 h-10 bg-slate-400 cursor-pointer rounded-lg mt-10' onClick={() => setIsEditing(false)}>Cancle</button>
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default Edit