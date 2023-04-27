import { useEffect, useState } from 'react'
import './Registration.css'

function Registration() {
    const data = { name: "", email: "", password: "" };
    const [inputData, setInputData] = useState(data)
    const [flag, setFlag] = useState(false)
    useEffect(() => {
        console.log("Registered")

    }, [flag])
    function handleData(e) {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
        console.log(inputData)
    }
    function handlesubmit(e) {
        e.preventDefault();
        if (!inputData.name || !inputData.email || !inputData.password) {
            alert("All field are Mandatory")
        }
        else {
            setFlag(true)
        }
    }
    return (
        <>

            <div className='container mt-2'>

                <pre>{(flag) ? <h4 className='text-center bg-info p-2 mt-3'>hello {inputData.name}, You've Registered successfully</h4> : ""}</pre>
                <form className='registration-form' onSubmit={handlesubmit}>
                    <label for="name" class="form-label">User Name</label>
                    <div className='input-group mb-1'>
                        <span class="input-group-text  rounded-0">
                            <i class="bi bi-person-bounding-box"></i>
                        </span>
                        <input class="form-control rounded-0 " type="text" placeholder="Enter Name" name="name" value={inputData.name} onChange={handleData} />
                    </div>

                    <label for="name" class="form-label">Email</label>
                    <div className='input-group mb-1'>
                        <span class="input-group-text  rounded-0">
                            <i class="bi bi-envelope"></i>
                        </span>
                        <input class="form-control rounded-0  rounded-0" type="email" placeholder="Enter Email" name="email" value={inputData.email} onChange={handleData} />
                    </div>

                    <label for="name" class="form-label">Password</label>
                    <div className='input-group mb-1'>
                        <span class="input-group-text  rounded-0">
                            <i class="bi bi-key"></i>
                        </span>
                        <input class="form-control rounded-0" type="Password" placeholder="Enter Password" name="password" value={inputData.password} onChange={handleData} />
                    </div>
                    <button type='submit' className='btn btn-success rounded-1 w-100 mt-4'>
                        Submit
                    </button>
                </form>
            </div>

        </>
    )
}

export default Registration;