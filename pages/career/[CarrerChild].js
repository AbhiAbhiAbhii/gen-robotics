/* eslint-disable @next/next/no-img-element */
import { SliceZone } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'

import { createClient, linkResolver } from '../../prismicio'
import { components } from '../../slices'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import { useEffect, useRef, useState } from 'react'

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

// react-dropzone
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'



export default function Page({ page }) {

  const [ fullName, setFullName ] = useState('');
  const [ mobile, setMobile ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ linkedIn, setLinkedIn ] = useState('');
  const [ files, setFiles ] = useState(null);

  const inputRef = useRef();


  // Errors
  const [ errors, setErrors ] = useState({});

  // Handle Change on input
  const handleChange = (event) => {
    const { name, value } = event.target;

    switch(name) {
      case 'fullName':
        setFullName(value);
        break;
      case 'mobile':
        setMobile(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'linkedIn':
        setLinkedIn(value);
        break;
      default:
        break;
    }
    
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationError = validate();

    if(Object.keys(validationError).length === 0) {
      console.log('Form Submitted')
    }

  }

  //  Validate Form

  const validate = () => {
    let temp = {}
    temp.fullName = fullName ? '' : 'This field is required'
    temp.mobile = mobile ? '' : 'This field is required'
    temp.email = email ? '' : 'This field is required'
    temp.linkedIn = linkedIn ? '' : 'This field is required'

    setErrors({
      ...temp
    })

    return Object.values(temp).every(x => x === '')
  }


  // Focus and Blur

  // Full Name focus & blur
  const [ fullNameFocus, setFullNameFocus ] = useState(false);
  const handleFullNameFocus = () => {
    setFullNameFocus(true)
  }

  const handleFullNameBlur = () => {
    setFullNameFocus(false)
  }

  // Mobile focus & blur
  const [ mobileFocus, setMobileFocus] = useState(false)
  const handleMobileFocus = () => {
    setMobileFocus(true)
  }

  const handleMobileBlur = () => {
    setMobileFocus(false)
  }

  // Email focus & blur
  const [ emailFocus, setEmailFocus ] = useState(false)
  const handleEmailFocus = () => {
    setEmailFocus(true)
  }

  const handleEmailBlur = () => {
    setEmailFocus(false)
  }

  // LinkedIn focus & blur
  const [ linkedInFocus, setLinkedInFocus ] = useState(false)
  const handleLinkedInFocus = () => {
    setLinkedInFocus(true)
  }

  const handleLinkedInBlur = () => {
    setLinkedInFocus(false)
  }


  let quart = 'cubic-bezier(0.76, 0.00, 0.24, 1.00)';

  useEffect(() => {


//   gsap.to('.carrChildForm_Left_Text', {
//     scrollTrigger: {
//         trigger: '.carrChild_Form',
//         start: 'top center',
//         end: 'bottom center',
//         scrub: 0.1,
//         toggleActions: 'play none none reverse'
//     },
//     y: 500,
//     duration: 2,
//     ease: quart
// })

  },[])

  // React-DropZone
  // const onDrop = useCallback((acceptedFiles) => {

  //   console.log(acceptedFiles,"Accepted")
  // }, []);

  // const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  // ----------------


  // Drag Drop
  const handleDragOver = (event) => {
    event.preventDefault();
  }

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files)

    console.log(event.dataTransfer.files)


    // if(files) {
    //   return(
    //     <p>Uploaded</p>
    //   )
    // } else return <p>upload</p>

  }
 
  return (
    <>
      <Header />
      <SliceZone slices={page.data.slices} components={components} />
      <section className='carrChild_Form'>
        <div className='carrChildForm_Left_Text'>
          <p>
            Interested to join our team?
          </p>
        </div>
        <div className='carrChild_Form_Container'>
          {/* <div className='carrChildForm_Left_Text'>
            <p>
              Interested to join our team?
            </p>
          </div> */}
          <div className='carrChild_Form_Div'>
            <form className='carrChild_Form_form' onSubmit={ handleSubmit }>

              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>

                <div className='carrChild_Form_Input' style={{width:'46%'}}>
                  <label>
                    Full Name*
                  </label>
                  <input
                    type='text'
                    id='fullName'
                    name='fullName'
                    value={fullName}
                    onChange={handleChange} 
                    onFocus={handleFullNameFocus}
                    onBlur={handleFullNameBlur}
                    className={ fullNameFocus ? 'focus' : 'notFocus'}
                    placeholder='Elon Musk' />
                  {errors.fullName && <p className='form_Error'>{errors.fullName}</p>}
                </div>

                <div style={{position:'relative', width:'46%' }} className='carrChild_Form_Input carrChild_Form_InputMobile'>
                  <label>
                    Mobile*
                  </label>
                  <input 
                    type='text'
                    id='mobile'
                    name='mobile'
                    value={mobile}
                    onChange={handleChange}
                    onFocus={handleMobileFocus}
                    onBlur={handleMobileBlur}
                    className={ mobileFocus ? 'focus' : 'notFocus'}
                  />
                  <img src='/IN.png' 
                  style={{position:'absolute', left: '0%', bottom: errors.mobile ? '35.5%': mobileFocus ? '23%':'22%', height:'2em', width:'5em', scale:'0.65'}} alt='img' /> 
                  {errors.mobile && <p className='form_Error'>{errors.mobile}</p>}
                </div>

              </div>

              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <div className='carrChild_Form_Input' style={{ width:'46%' }}>
                  <label>
                    Email*
                  </label>
                  <input 
                    type='email'
                    id='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    onFocus={handleEmailFocus}
                    onBlur={handleEmailBlur}
                    className={ emailFocus ? 'focus' : 'notFocus'}
                    placeholder='elonmusk@tesla.com' />
                  {errors.email && <p className='form_Error'>{errors.email}</p>}
                </div>

                <div className='carrChild_Form_Input' style={{width:'46%'}}>
                  <label>
                    LinkedIn*
                  </label>
                  <input 
                    type='text'
                    id='linkedIn'
                    name='linkedIn'
                    value={linkedIn}
                    onChange={handleChange}
                    onFocus={handleLinkedInFocus}
                    onBlur={handleLinkedInBlur}
                    className={ linkedInFocus ? 'focus':'notFocus'}
                    placeholder='Elon Musk' />
                  {errors.linkedIn && <p className='form_Error'>{errors.linkedIn}</p>}
                </div>
              </div>

              {/* <div id="drop-area" className='' style={{border:'1px #EEEEEA solid', margin:'1em 0 0 0'}}>
                <label>
                  Upload Resume
                </label>
                <input type="file" id="myFile" name="filename" onChange="handleFiles(this.files)" style={{margin:'1em 0', width:'100%'}} />
              </div> */}

              {
                files ? (
                  <div 
                    // onClick={() => inputRef.current.click()}
                    className='drop-zone'
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                      >
                    <div className='drop-zone-container'>
                      <p>
                        File has been uploaded
                      </p>
                      <input 
                        type='file'
                        onChange={(event) => setFiles(event.target.files)}
                        hidden
                        ref={inputRef}
                      />
                      <div onClick={() => setFiles(null)}>
                        <p style={{fontSize:'0.9em'}}>Cancel</p>
                      </div>
                    </div>
                  </div>
                ) : 
                (
                  <div 
                    onClick={() => inputRef.current.click()}
                    className='drop-zone'
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                      >
                    <div className='drop-zone-container'>
                      <p>
                        Drag and Drop Files to Upload
                      </p>
                      <p>Or</p>
                      <input 
                        type='file'
                        onChange={(event) => setFiles(event.target.files)}
                        hidden
                        ref={inputRef}
                      />
                      <div>
                        <p style={{fontSize:'0.9em'}}>Select Files</p>
                      </div>
                    </div>
                  </div>
                )
              }

              <div  className='carrChild_Form_Btn'>
                <button type="submit"> 
                  <p>
                  Submit Application
                  </p>
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}



export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID('career_child_page', params.CarrerChild)
  
  return {
    props: {
      page,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()

  const pages = await client.getAllByType('career_child_page')
  
  return {
    paths: pages.map((page) => prismicH.asLink(page, linkResolver)),
    fallback: false,
  }
}



