import React,{useContext,useEffect} from 'react'
import TextField from '@mui/material/TextField'
import Image from 'next/image'
import instalogo from '../../assets/instalogo.png'
import Button from '@mui/material/Button';
import { Carousel } from 'react-responsive-carousel';
import bg1 from '../../assets/bg1.png'
import bg2 from '../../assets/bg2.png'
import bg3 from '../../assets/bg3.png'
import bg4 from '../../assets/bg4.png'
import { AuthContext } from '@/context/auth';
import {useRouter} from 'next/router'
import Link from 'next/link'

function Index() {

    const router = useRouter()
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [error,setError] = React.useState('');
    const [loading,setLoading] = React.useState(false);

    const {login,user} = useContext(AuthContext)

    const handleClick = async() =>{
        try{
            setLoading(true)
            setError('')
            await login(email,password)
            console.log("logged in")
        }
        catch(err){
            console.log(err)
            setError(err.message)
            setTimeout(()=>{
                setError('')
            },2000)
        }
        setLoading(false)
        // console.log(email+" "+password)
    }

    useEffect(()=>{
        if(user){
            router.push("/")
        }
        else{
            console.log("user not present")
        }
    },[user])

  return (
    <div className='login-container'>

        <div className='carobg'>
            <div className='caro'>
                <Carousel showIndicators={false} showArrows={false} showStatus={false}
                    interval={2000} autoPlay={true} infiniteLoop={true} 
                    >
                    <Image src={bg1}></Image>
                    <Image src={bg2}></Image>
                    <Image src={bg3}></Image>
                    <Image src={bg4}></Image>
                </Carousel>
            </div>
        </div>
        <div>
            <div className='login-card '>
                <Image src={instalogo}></Image>
                <TextField id="outlined-basic" margin='dense' size='small' fullWidth label="Email" variant="outlined"
                    value={email}  onChange={(e)=>setEmail(e.target.value)} />
                <TextField id="outlined-basic" margin='dense' size='small' type="password" fullWidth label="password" variant="outlined"
                    value={password} onChange={(e)=>setPassword(e.target.value)} />
                {
                    error != '' && 
                <div style={{color:"red"}}>
                    {error}
                </div>
                }
                <Button variant="contained" style={{marginTop:"1rem"}} fullWidth component="span" onClick={handleClick}
                    disabled={loading}>
                    Login
                </Button>
                <Link href='/forgotPass'>
                <div style={{color:'blue',marginTop:'0.5rem'}}>
                Forgot password    
                </div>                                     
                </Link>
            
            </div>
            <div className='bottom-card'>
                Don&apos;t have an account? 
                <Link href="/signup">
                <span style={{color:'blue'}}>Sign up</span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Index