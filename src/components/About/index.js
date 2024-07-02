import { useEffect, useState } from 'react'
import {
  faSlack,
  faCss3,
  faGithub,
  faHtml5,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          I am currently persuing my B.Tech in Computer Science and Engineering from National Institute of Technology,Patna. During my coding journey till date, I have become proficient in various programming languages such as C,C++, Python, JavaScript and have developed a strong foundation in Data Structures and Algorithms.</p>
         
          
          <p align="LEFT">
         I also take keen interset in Competitive Programming to  improve upon my problem-solving skills through participation in coding competitions on platforms such as Codeforces, LeetCode, and CodeChef.
          </p>
          <p>
          I am passionate about learning and am always looking for opportunities to expand my knowledge and grow as a developer.
          </p>

          {/* </p> */}
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faSlack} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faNodeJs} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
