import React,{useContext,useEffect} from 'react'
import TextField from '@mui/material/TextField'
import Image from 'next/image'
import instalogo from '../../assets/instalogo.png'
import Button from '@mui/material/Button';
import Link from 'next/link'
import {useRouter} from 'next/router'
import { AuthContext } from '@/context/auth';
import { storage,db } from '@/firebase';
import {ref,getDownloadURL,uploadBytesResumable} from 'firebase/storage'
import { doc, setDoc } from 'firebase/firestore';

function Index() {

    const router = useRouter();
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [name,setName] = React.useState('');
    const [file,setFile] = React.useState(null);
    const [error,setError] = React.useState('');
    const [loading,setLoading] = React.useState(false);

    const {signup,user} = useContext(AuthContext)

    const handleClick = async() =>{
        // console.log(file)
        try{
            setLoading(true)
            setError('')
            const user = await signup(email,password)
            console.log("signed up")

            const storageRef = ref(storage, `${user.user.uid}/Profilec`);


                const uploadTask = uploadBytesResumable(storageRef, file);

                // Register three observers:
                // 1. 'state_changed' observer, called any time the state changes
                // 2. Error observer, called on failure
                // 3. Completion observer, called on successful completion
                uploadTask.on('state_changed', 
                (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    }
                }, 
                (error) => {
                    // Handle unsuccessful uploads
                    console.log(error)
                }, 
                () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    console.log('File available at', downloadURL);
                    let obj = {
                        name : name,
                        email : email,
                        uid : user.user.uid,
                        dpURL : downloadURL
                    }
                    await setDoc(doc(db,"users",user.user.uid),obj)
                    console.log('doc added')
                    });
                }
                );
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
    <div className='signup-container'>
        <div className='signup-card '>
            <Image src={instalogo}></Image>
            <TextField id="outlined-basic" margin='dense' size='small' fullWidth label="Email" variant="outlined"
            value={email} onChange={(e)=>setEmail(e.target.value)} />
            <TextField id="outlined-basic" margin='dense' size='small' type="password" fullWidth label="password" variant="outlined"
            value={password} onChange={(e)=>setPassword(e.target.value)} />
            <TextField id="outlined-basic" margin='dense' size='small' fullWidth label="Full Name" variant="outlined"
            value={name} onChange={(e)=>setName(e.target.value)} />
            <Button variant="outlined" style={{marginTop:"1rem"}} fullWidth component="label"
                >
                Upload
                <input hidden accept="image/*" multiple type="file" 
                onChange={(e)=>setFile(e.target.files[0])}/>
            </Button>                                     
            <Button variant="contained" style={{marginTop:"1rem"}} fullWidth component="span"
              disabled={loading}  onClick={handleClick}>
                Sign UP
                
            </Button>                                     
        
        </div>
        <div className='bottom-card'>
            Already have an account? 
            <Link href="/login">
            <span style={{color:'blue'}}>Login</span>
            </Link>
        </div>
    </div>
  )
}

export default Index