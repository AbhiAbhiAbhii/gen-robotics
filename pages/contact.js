/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react';

//gsap
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

export default function RegistrationForm() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [organization, setOrganization] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Update state based on input name
    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'mobileNumber':
        setMobileNumber(value);
        break;
      case 'organization':
        setOrganization(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, you can submit or perform further actions here
      console.log('Form submitted');
    }
  };

  const validateForm = () => { // validation for form
    const errors = {};

    if (!firstName.trim()) {
      errors.firstName = 'First name is required';
    } else if (!/^[A-Za-z]+$/.test(firstName)) {
      errors.firstName = 'First name should contain only alphabets';
    }

    if (!lastName.trim()) {
      errors.lastName = 'Last name is required';
    } else if (!/^[A-Za-z]+$/.test(lastName)) {
      errors.lastName = 'Last name should contain only alphabets';
    }

    if (!email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
    }

    if (!mobileNumber.trim()) {
        errors.mobileNumber = 'Mobile number is required';
      }  else if (!/^[0-9]+$/.test(mobileNumber)) {
        errors.mobileNumber = 'Mobile number should contain only numbers';
      } else if (!/^\d{10}$/.test(mobileNumber)) {
        errors.mobileNumber = 'Mobile number should be 10 digits';
      }

    return errors;
  };

  // focus 
  // focus&blur FirstName
  const [firstNameFocused, setFirstNameFocused] = useState(false);
  const handleFirstNameFocus = () => {
    setFirstNameFocused(true);
  };

  const handleFirstNameBlur = () => {
    setFirstNameFocused(false);
  };
  // focus&blur LastName
  const [lastNameFocused, setLastNameFocused] = useState(false);
  const handleLastNameFocus = () => {
    setLastNameFocused(true);
  };

  const handleLastNameBlur = () => {
    setLastNameFocused(false);
  };
  // focus&blur Email
  const [emailFocused, setEmailFocused] = useState(false);
  const handleEmailFocus = () => {
    setEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setEmailFocused(false);
  };
   // focus&blur MobileNumber
   const [mobileFocused, setMobileFocused] = useState(false);
   const handleMobileFocus = () => {
     setMobileFocused(true);
   };
 
   const handleMobileBlur = () => {
     setMobileFocused(false);
   };
   // focus&blur Organization
   const [organizationFocused, setOrganizationFocused] = useState(false);
   const handleOrganizationFocus = () => {
    setOrganizationFocused(true);
   };
 
   const handleOrganizationBlur = () => {
    setOrganizationFocused(false);
   };
   // focus&blur Message
   const [messageFocused, setMessageFocused] = useState(false);
   const handleMessageFocus = () => {
     setMessageFocused(true);
   };
 
   const handleMessageBlur = () => {
     setMessageFocused(false);
   };

  // Data 
  let Title = "Need the world's best cleaning companion?"
  let Subtitle = "Let us know how we can reach you and we'll respond as soon as possible"

  let terms = "By Submitting, you understand, and agree to Genrobotics's Privacy Policy and Terms and Conditions."

  // Contact Bottom
  let BottomText = "Come say hello to us." 

  let Address = [
    {
        Country: "India",
        Addrress: 'Genrobotic Innovations, CDAC Building, Technopark Campus Thiruvananthapuram Kerala, 695581',
        Mail: "Media & support contact: info@genrobotics.org",
        Tel: "+91 2346789012",
        Dir: "Get Directions",
        src:'/contact/india.svg'
    },
    {
        Country: "United Kingdom",
        Addrress: 'Genrobotic Innovations, CDAC Building, Technopark Campus Thiruvananthapuram Kerala, 695581',
        Mail: "Media & support contact: info@genrobotics.org",
        Tel: "+91 2346789012",
        Dir: "Get Directions",
        src:'/contact/uk.svg'
    },
    {
        Country: "United Arab Emirates",
        Addrress: 'Genrobotic Innovations, CDAC Building, Technopark Campus Thiruvananthapuram Kerala, 695581',
        Mail: "Media & support contact: info@genrobotics.org",
        Tel: "+91 2346789012",
        Dir: "Get Directions",
        src:'/contact/uae.svg'
    },
    {
        Country: "South Korea",
        Addrress: 'Genrobotic Innovations, CDAC Building, Technopark Campus Thiruvananthapuram Kerala, 695581',
        Mail: "Media & support contact: info@genrobotics.org",
        Tel: "+91 2346789012",
        Dir: "Get Directions",
        src:'/contact/south-korea.svg'
    },
  ]

    // Animation
    // Transition
    let quint = 'cubic-bezier(0.85, 0, 0.15, 1)';
    let quart = 'cubic-bezier(0.76, 0.00, 0.24, 1.00)';

    let hide = 'translateY(100%)';
    let reveal = 'translateY(0%)';

    const titleRef= useRef();
    const subTitleRef = useRef();

    const formRef = useRef();

  useEffect(() => {
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                titleRef.current.style.transform = reveal;
                setTimeout(() => {
                    subTitleRef.current.style.transform = reveal;
                }, 1000)
            }            
        })
    })
    observer.observe(document.querySelector('.contact'));

    const formObserve = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                formRef.current.style.opacity = '1'
                formRef.current.style.scale = '1'
            }
        })
    }, { threshold: 0.3 })
    formObserve.observe(document.querySelector('.contact_FormContainer_Pad'));

    //gsap
    gsap.to('.contact_BottomContentA', {
        scrollTrigger: {
            trigger: '.contact_BottomContentA',
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
            toggleActions: 'play none none reverse'
        },
        y: 230,
        duration: 2,
        ease: quart
    })
    gsap.to('.bottomTextAnim', {
        scrollTrigger: {
            trigger: '.contact_BottomContentA',
            start: 'top bottom',
            end: 'bottom center',
        },
        y: 0,
    })

    // --------------------------------------

    const AddressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                document.querySelectorAll(".AddressItemCountry").forEach(assetDiv => {  // asset anim
                    assetDiv.style.transform = reveal;
                })
                setTimeout(() => {
                    document.querySelectorAll(".AddressItemAddress").forEach(assetDiv => {  // asset anim
                        assetDiv.style.opacity = '1';
                    })
                }, 1000)
                setTimeout(() => {
                    document.querySelectorAll(".AddressItemMail").forEach(assetDiv => {  // asset anim
                        assetDiv.style.opacity = '1';
                    })
                }, 1500)
                setTimeout(() => {
                    document.querySelectorAll(".AddressItemTel").forEach(assetDiv => {  // asset anim
                        assetDiv.style.opacity = '1';
                    })
                }, 2000)
            }
        })
    })
    AddressObserver.observe(document.querySelector('.contact_BottomContainer'));

  }, [])
  

  return (
    <>
    <section className='contact'>
        <div className='contact_Container'>
            <div className='contact_TitleContainer'>
                <div className='contact_Title ofh'>
                    <p ref={titleRef} style={{transform: hide, transition: `all 1s ${quint}`}}>
                        { Title }
                    </p>
                </div>
                <div className='contact_SubTitle ofh'>
                    <p ref={subTitleRef} style={{transform: hide, transition: `all 1s ${quint}`}}>
                        { Subtitle }
                    </p>
                </div>
            </div>
            {/* form */}
            <div ref={formRef} className='contact_FormContainer_Pad' style={{opacity: '0', scale:'0.8', transition: `all 1s ${quart}`}}>
                <div className='contact_FormContainer'>
                    <form className='contact_Form' onSubmit={handleSubmit}>     
                        <div className='formFieldA'> {/* Field A */}
                            <div className='input form_FirstName'>
                                <label htmlFor="firstName" 
                                className={firstNameFocused ? 'textFocused' : 'textNotFocused'}>
                                    First Name*
                                </label> {/* First Name */}
                                <input 
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={firstName}
                                onChange={handleChange}
                                onFocus={handleFirstNameFocus}
                                onBlur={handleFirstNameBlur}
                                className={firstNameFocused ? 'focused' : 'notFocused'}
                                placeholder='First Name..'
                                />
                                {errors.firstName && <p className='form_Error'>{errors.firstName}</p>}
                            </div>
                            <div className='input form_LastName'>
                                <label htmlFor="lastName" 
                                className={lastNameFocused ? 'textFocused' : 'textNotFocused'}>
                                    Last Name*
                                </label> {/* Last Name */}
                                <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={lastName}
                                onChange={handleChange}
                                onFocus={handleLastNameFocus}
                                onBlur={handleLastNameBlur}
                                className={lastNameFocused ? 'focused' : 'notFocused'}
                                placeholder='Last Name..'
                                />
                                {errors.lastName && <p className='form_Error'>{errors.lastName}</p>}
                            </div>
                        </div>
                        <div className='input form_Email'>
                            <label htmlFor="email" 
                            className={emailFocused ? 'textFocused' : 'textNotFocused'}>
                                Email Address*
                            </label> {/* Email */}
                            <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            onFocus={handleEmailFocus}
                            onBlur={handleEmailBlur}
                            className={emailFocused ? 'focused' : 'notFocused'}
                            placeholder='Email..'
                            />
                            {errors.email && <p className='form_Error'>{errors.email}</p>}
                        </div>
                        <div className='input form_MobileNumber'>
                            <label htmlFor="mobileNumber" 
                            className={mobileFocused ? 'textFocused' : 'textNotFocused'}>
                                Mobile Number*
                            </label> {/* Mobile Number */}
                            <input
                            type="text"
                            id="mobileNumber"
                            name="mobileNumber"
                            value={mobileNumber}
                            onChange={handleChange}
                            onFocus={handleMobileFocus}
                            onBlur={handleMobileBlur}
                            className={mobileFocused ? 'focused' : 'notFocused'}
                            placeholder='Mobile Number..'
                            />
                            {errors.mobileNumber && <p className='form_Error'>{errors.mobileNumber}</p>}
                        </div>
                        <div className='input form_MobileNumber'>
                            <label htmlFor="mobileNumber" 
                            className={organizationFocused ? 'textFocused' : 'textNotFocused'}>
                                Organization
                            </label> {/* Organization */}
                            <input
                            type="text"
                            id="organization"
                            name="organization"
                            value={organization}
                            onChange={handleChange}
                            onFocus={handleOrganizationFocus}
                            onBlur={handleOrganizationBlur}
                            className={organizationFocused ? 'focused' : 'notFocused'}
                            />
                        </div>
                        <div className='input form_MobileNumber'>
                            <label htmlFor="mobileNumber" 
                            className={messageFocused ? 'textFocused' : 'textNotFocused'}>
                                Message
                            </label> {/* Message */}
                            <textarea
                            type="text"
                            id="message"
                            name="message"
                            value={message}
                            onChange={handleChange}
                            onFocus={handleMessageFocus}
                            onBlur={handleMessageBlur}
                            className={messageFocused ? 'focused' : 'notFocused'}
                            rows={4} // Specify the number of rows for the textarea
                            cols={40} // Specify the number of columns for the textarea
                            />
                        </div>
                        <div className='form_BtnContainer'>
                            <button className='form_Btn' type="submit"><p>Submit Enquiry</p></button> {/* Submit Enquiry */}
                            <div className='form_Terms'>
                                <p>
                                    { terms }
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* form-end */}
        </div>
        <div className='contact_BottomContainer'>
                <div className='contact_BottomContent'>
                    <div className='contact_BottomContentA ofh' style={{height:'fit-content'}}>
                        <div className='bottomContentAText ofh' >
                          <p className='bottomTextAnim' style={{transform: hide, transition: `all 1s ${quart}`}}>
                              { BottomText }
                          </p>
                        </div>
                        <div className='contactWhatsapp_Container'>
                            <div className='contactWhatsapp'>
                              <p style={{display:'flex', alignItems:'center'}}>Whatsapp Us <span style={{marginLeft:'1em'}}><img src='/contact/whatsappIcon.svg' alt='whatsapp' /></span></p>
                            </div>
                        </div>
                        <div className='contactWhatsapp_Container callUs'>
                            <div className='contactWhatsapp callUs'>
                              <p style={{display:'flex', alignItems:'center'}}>Call us<span style={{marginLeft:'1em'}}><img src='/contact/phoneIcon.svg' alt='whatsapp' /></span></p>
                            </div>
                        </div>
                    </div>
                    <div className='contact_BottomContentB'>
                        {
                            Address.map((data, i) => {
                                return(
                                    <div className='contact_AddressItem' key={i}>
                                        <div className='contact_AddressItemContainer'>
                                            <div className='contact_AddressItemCountry ofh'>
                                                <p className='AddressItemCountry' style={{transform: hide, transition: `all 1s ${quint}`, display:'flex', alignItems:'center'}}>
                                                <span style={{marginRight:'0.25em'}}><img src={data.src} alt="country" /></span> { data.Country } 
                                                </p>
                                            </div>
                                            <div className='contact_AddressItemAddress'>
                                                <p className='AddressItemAddress' style={{opacity:'0', transition: `all 1s ${quint}`}}>
                                                    { data.Addrress }
                                                </p>
                                            </div>
                                            <div className='contact_AddressItemMail'>
                                                <p className='AddressItemMail' style={{opacity:'0', transition: `all 1s ${quint}`}}>
                                                    { data.Mail }
                                                </p>
                                            </div>
                                            <div className='contact_AddressItemTel'>
                                                <p className='AddressItemTel' style={{opacity:'0', transition: `all 1s ${quint}`}}>
                                                    { data.Tel }
                                                </p>
                                            </div>
                                            <div className='contact_AddressItemTel' style={{margin:'0.55em 0 0 0'}}>
                                                <p className='AddressItemTel' style={{opacity:'0', transition: `all 1s ${quint}`}}>
                                                    { data.Dir }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
    </section>
    </>
  );
}

