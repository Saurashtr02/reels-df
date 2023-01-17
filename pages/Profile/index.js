import ProfileComp from '@/components/ProfileComp'
import { AuthContext } from '@/context/auth';
import { useRouter } from 'next/router';
import React, { useContext } from 'react'

function Index() {

    const {user} = useContext(AuthContext)

  const Redirect = ()=>{
    const router = useRouter();
    router.push('/login')
    return null;
  }

  return (
    <div>
        {
            user?.uid?
             <ProfileComp/> 
             :<Redirect/>
        }
    </div>
  )
}

export default Index