import React from 'react'
import './AboutView.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from 'react-router-dom';

const AboutView = ({id}) => {
  return (
    <div className='aboutview'>
        {id === '1' && 
            <div className="view">
                <div className="item">
                    <div className="left">
                        <h1>Tech Stack</h1>
                    </div>
                    <div className="right">
                        <div className="image">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt=''/>
                        </div>
                        <div className="image">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt=''/>
                        </div>
                        <div className="image">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt=''/>
                        </div>
                        <div className="image">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt=''/>
                                  </div>
                        <div className="image">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt='' />
                        </div>
                        <div className="image">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"alt='' />
                        </div>
                        <div className="image">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt=''/>
                        </div>
                        
                    </div>
                </div>
                <div className="item">
                    <div className="left">
                        <h1>CI/CD Tools</h1>
                    </div>
                    <div className="right">
                        <div className="image">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" alt='' />
                        </div>
                        <div className="image">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt=''/>
                        </div>
                        <div className="image">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original-wordmark.svg" alt='' />
                        </div>
                    </div>
                </div>
            </div>
        }
        {id === '2' && 
            <div className="view">
                <h1 style={{textAlign:'center',margin:'0'}}>B.S Computer Science</h1>
                <h2 style={{textAlign:'center', margin:'0'}}>East Carolina University</h2>
                <span style={{width:'100%', display:'flex', justifyContent:'center'}}><img src={require('../../images/East_Carolina_Pirates_logo.svg.png')} height={'50px'} width={'50px'}></img></span>
            </div>
        }
        {id === '3' && 
            <div className="view">
                <div className="title">
                    <h1>Please feel free to contact me by the means below.</h1>
                    <h2>Email: hazbounelias96@gmail.com</h2>
                    <h2>Phone: (252)-469-8517</h2>
                </div>
                <span className='icons'>
                    <Link to='https://www.linkedin.com/in/elias-hazboun-5b6a0717a/' target='_blank' >
                        <LinkedInIcon className='icon'/>
                    </Link>
                    <Link to='https://github.com/eliashazboun' target='_blank' className='icon'>
                        <GitHubIcon className='icon'/>
                    </Link>
                    <Link to='https://eliashazboun.github.io/' target='_blank' className='icon'>
                        <LanguageIcon className='icon'/>
                    </Link>
                </span>
            </div>
        }
    </div>
  )
}

export default AboutView