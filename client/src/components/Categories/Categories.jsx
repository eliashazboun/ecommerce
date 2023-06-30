import React from 'react'
import "./Categories.scss"
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <Link className='link' to="/products/3">
                    <img src="https://images.unsplash.com/photo-1622975696911-c1c444035f43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
                    <h1>Cards</h1>
                </Link>
            </div>
        </div>
        <div className="col">
            <div className="row">
                <Link className='link' to="/products/2">
                    <img src="https://images.unsplash.com/photo-1586165368502-1bad197a6461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1258&q=80" alt="" />
                    <h1>Chess</h1>   
                </Link>
            </div>
        </div>
        <div className="col">
            <div className="row">
                <Link className='link' to="/products/1">
                <img src="https://images.unsplash.com/photo-1586173806725-797f4d632f5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1194&q=80" alt="" />
                <h1>Cubes</h1>
                </Link>
            </div>
        </div>
        <div className="col">
                <div className="row">
                    <Link className='link' to="/products/4">
                        <img src="https://images.unsplash.com/photo-1554825959-e9a6670d4f18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" alt="" />
                        <h1>Accesories</h1>
                    </Link>
                </div>
        </div>
      
        
    </div>
  )
}

export default Categories