import React from 'react'
import useStore from '../../store/use-store'
export default function Profile() {
    const user = useStore((set) => set.user)
    return (
        <div>{user}</div>
    )
}
