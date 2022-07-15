import React from 'react'

export default function Error({ error }) {
    return (
        <div className='danger error-component'>
            <div class="alert alert-danger" role="alert">
            { error }!
            </div>

        </div>
    )
}
