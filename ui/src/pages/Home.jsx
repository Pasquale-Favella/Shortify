import { Link } from 'react-router-dom';
import landingImg from '../assets/landing.svg';

import { TbUnlink } from 'react-icons/tb';
import { SiFastify , SiReact , SiNodedotjs , SiMongodb } from 'react-icons/si';

export default function Home(){
    return(
      <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-8 md:py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img className="object-cover object-center rounded" width={400} height={400} alt="hero" src={landingImg}/>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary">Shortify is a 
              <br className="hidden lg:inline-block"/>Url shortener 
              <br className="hidden lg:inline-block"/>and QR generator
          </h1>
          <p className=" leading-relaxed">
              Made with
          </p>
          <div className="my-4 flex gap-2">
            
            <div className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]" data-tip="Fastify">
                <a href="https://www.fastify.io/" target="_blank" rel="noopener noreferrer">
                  <SiFastify className='w-10 h-10 hover:text-primary ease-in duration-300'/>
                </a>
            </div>

            <div className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]" data-tip="React">
                <a href="https://it.reactjs.org/" target="_blank" rel="noopener noreferrer">
                  <SiReact className='w-10 h-10 hover:text-primary ease-in duration-300'/>
                </a>
            </div>

            <div className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]" data-tip="Node Js">
                <a href="https://nodejs.org/it/" target="_blank" rel="noopener noreferrer">
                  <SiNodedotjs className='w-10 h-10 hover:text-primary ease-in duration-300'/>
                </a>
            </div>

            <div className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]" data-tip="Mongo Db">
                <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
                  <SiMongodb className='w-10 h-10 hover:text-primary ease-in duration-300'/>
                </a>
            </div>

          </div>
          <div className="flex justify-center">
              <Link to="shortify">
                  <button className="btn btn-primary text-white hover:text-white/80 gap-2">
                      
                      <TbUnlink className="h-6 w-6"/>
                      go short
                  </button>
              </Link>
          </div>
          </div>
      </div>
      </section>
    )
}