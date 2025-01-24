import React from 'react';
import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

 const Footer = () => {
  return (
    <footer>
        <div className='footer'>
            <div className='sb_section_padding'>
                <div className='sb_footer-links'>
                    <div className='sb_footer-links-div'>
                        <h4>AKash</h4>
                        <a href='/'>
                            <p>Employee</p>
                        </a>
                        <a href='/'>
                            <p>Employee</p>
                        </a>
                        <a href='/'>
                            <p>xyz</p>
                        </a>
                        <a href='/'>
                            <p>abc</p>
                        </a>
                    </div>
                    <div className='sb_fotter-links-div'>
                        <h4>Resources</h4>
                        <a href='/'>
                            <p>Employee</p>
                        </a>
                        <a href='/'>
                            <p>Employee</p>
                        </a>
                        <a href='/'>
                            <p>xyz</p>
                        </a>
                        <a href='/'>
                            <p>abc</p>
                        </a>
                    </div>
                    <div className='sb_footer-links-div'>
                        <h4>Partners</h4>
                        <a href='/'>
                            <p>Employee</p>
                        </a>
            
                    </div>
                    <div className='sb_footer-links-div'>
                        <h4>Resources</h4>
                        <a href='/'>
                            <p>Employee</p>
                        </a>
                        <a href='/'>
                            <p>Employee</p>
                        </a>
                        <a href='/'>
                            <p>xyz</p>
                        </a>
                        <a href='/'>
                            <p>abc</p>
                        </a>
                    </div>
                    <div className='sb_footer-links_div'>
                        <h4>Comming soon on</h4>
                        <div >
                            <div className='socialmedia' style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                                <IconButton color="primary" aria-label="Facebook">
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton color="primary" aria-label="Twitter">
                                    <TwitterIcon />
                                </IconButton>
                                <IconButton color="primary" aria-label="LinkedIn">
                                    <LinkedInIcon />
                                </IconButton>
                                <IconButton color="secondary" aria-label="Instagram">
                                    <InstagramIcon />
                                </IconButton>
                            </div>


                        </div>

                    </div>
                    
                    
                </div>
            </div>
            
        </div>
    </footer>
  )
}

export default Footer
