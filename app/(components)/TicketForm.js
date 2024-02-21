"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const TicketForm = () => {
    const router = useRouter();
    const startingTicketdata = {
        title: "",
        description: "",
        priority: 1,
        progress: 0,
        status: "not started",
        category: "hardware problem"
    }

    const [formData, setFormData] = useState(startingTicketdata);

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handlesubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/Tickets", {
            method: "POST",
            body: JSON.stringify({ formData }),
            "content-type": "application/json"
        })

        if (!res.ok) {
            throw new Error("Failed to create ticket")
        }
        router.refresh()
        router.push("/")
    }
    return (
        <div className='flex justify-center '>
            <form className='flex flex-col gap-3 w-1/2' method='post' onSubmit={handlesubmit}>
                <h3>Create Your ticketF</h3>
                <label >Title</label>
                <input type="text" id='title' name="title" onChange={handleChange} required value={formData.title} />
                <label >Description</label>
                <textarea type="text" id='description' name="description" onChange={handleChange} required value={formData.description} rows="5" />
                <label>Category</label>
                <select name="category" value={formData.category} onChange={handleChange}>
                    <option value="hardware problem">Hardware Problem</option>
                    <option value="Software problem">Software Problem</option>
                    <option value="Software problem">Software Problem</option>
                </select>
                <label>Priority</label>
                <div>
                    <input id='priority-1' name='priority' type="radio" onChange={handleChange} value={1} checked={formData.priority == 1} />
                    <label>1</label>
                    <input id='priority-1' name='priority' type="radio" onChange={handleChange} value={2} checked={formData.priority == 2} />
                    <label>2</label>
                    <input id='priority-1' name='priority' type="radio" onChange={handleChange} value={3} checked={formData.priority == 3} />
                    <label>3</label>
                    <input id='priority-1' name='priority' type="radio" onChange={handleChange} value={4} checked={formData.priority == 4} />
                    <label>4</label>
                    <input id='priority-1' name='priority' type="radio" onChange={handleChange} value={5} checked={formData.priority == 5} />
                    <label>5</label>
                </div>
                <label >Progress</label>
                <input type="range" id='progress' name='progress' value={formData.progress} min={0} max="100" onChange={handleChange} />
                <label >Status</label>
                <select name="status" value={formData.status} onChange={handleChange} id="">
                    <option value="not started">Not started</option>
                    <option value="started"> Started</option>
                    <option value="done">Done</option>
                </select>
                <input type="submit" value="careate ticket" className='btn' />
            </form>
        </div>
    )
}

export default TicketForm