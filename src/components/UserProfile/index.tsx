import { useSession } from 'next-auth/react';
import Image from 'next/future/image';
import React from 'react'
import { FaUser } from "react-icons/fa";

const UserProfile = () => {
  const { data: session, status } = useSession()
  const user = session?.user
  const userId= session?.user?.id
  if(userId){
    return (
    <div className='flex items-center'>
      <Image width={36} height={36} src={user?.image} alt={`${user?.name} profile picture`} className="rounded-full"/>
    <h3 className='pl-2'>{user?.name}</h3>
  </div>
  )
}
  return (
    <div className='flex items-center'>
      <div className={`shadow p-2 rounded-full flex `}>
        <FaUser className='' size={24}/>
      </div>
      <h3 className='pl-2'>Divyansh</h3>
    </div>
  )
}

export default UserProfile