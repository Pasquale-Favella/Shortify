import Countdown from 'react-countdown';
import { FcExpired } from 'react-icons/fc';

const EXPIRES_POLICY = 3600 * 24 * 2 *1000;//2 DAYS

const renderer = ({ days, hours, minutes, seconds, completed }) => {

    if (completed) {
      
      return (
        <div className="alert alert-error shadow-lg">
            <div>
            <FcExpired className='w-6 h-6'/>
                <span>Url expired!</span>
            </div>
        </div>
      )
    } 
     
      return (
        
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col text-xs">
          <span className="countdown font-mono">
            <span style={{['--value']: days}}></span>
          </span>
          days
        </div> 
        <div className="flex flex-col text-xs">
          <span className="countdown font-mono">
            <span style={{['--value']: hours}}></span>
          </span>
          hours
        </div> 
        <div className="flex flex-col text-xs">
          <span className="countdown font-mono">
            <span style={{['--value']: minutes}}></span>
          </span>
          min
        </div> 
        <div className="flex flex-col text-xs">
          <span className="countdown font-mono">
            <span style={{['--value']: seconds}}></span>
          </span>
          sec
        </div>
      </div>
      );
    
  };

export default function CountDown({createdAt}){

    return(
        <Countdown
            date={new Date(createdAt).getTime() + EXPIRES_POLICY}
            renderer={renderer}
            daysInHours
        />
    )
}