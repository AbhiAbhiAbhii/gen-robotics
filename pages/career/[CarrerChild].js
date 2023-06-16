/* eslint-disable @next/next/no-img-element */
import { SliceZone } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'

import { createClient, linkResolver } from '../../prismicio'
import { components } from '../../slices'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import { useState } from 'react'


export default function Page({ page }) {

  const [ fullName, setFullName ] = useState('');
  const [ mobile, setMobile ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ linkedIn, setLinkedIn ] = useState('');

  // Errors
  const [ errors, setErrors ] = useState({});

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


 
  return (
    <>
      <Header />
      <SliceZone slices={page.data.slices} components={components} />
      <section className='carrChild_Form'>
        <div className='carrChild_Form_Container'>
          <div className='carrChildForm_Left_Text'>
            <p>
              Interested to join our team?
            </p>
          </div>
          <div className='carrChild_Form_Div'>
            <form className='carrChild_Form_form'>

              <div className='carrChild_Form_Input'>
                <label>
                  Full Name*
                </label>
                <input
                  type='text'
                  id='fullName'
                  // value={fullName}
                  // onChange={handleChange}
                  placeholder='Elon Musk' />
                {errors.fullName && <p className='form_Error'>{errors.fullName}</p>}
              </div>

              <div style={{position:'relative'}} className='carrChild_Form_Input carrChild_Form_InputMobile'>
                <label>
                  Mobile*
                </label>
                <input placeholder='' />
                <img src='/IN.png' style={{position:'absolute', left:'0%', bottom:'25%', height:'2em', width:'5em', scale:'0.7'}} alt='' /> 
                {errors.mobile && <p className='form_Error'>{errors.mobile}</p>}
              </div>

              <div className='carrChild_Form_Input'>
                <label>
                  Email*
                </label>
                <input placeholder='Elon Musk' />
                {errors.email && <p className='form_Error'>{errors.email}</p>}
              </div>

              <div className='carrChild_Form_Input'>
                <label>
                  LinkedIn*
                </label>
                <input placeholder='Elon Musk' />
                {errors.linkedIn && <p className='form_Error'>{errors.linkedIn}</p>}
              </div>

              <div className='carrChild_Form_Btn'>
                <button>
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



