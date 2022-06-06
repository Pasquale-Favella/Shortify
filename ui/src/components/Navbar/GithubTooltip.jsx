import { BsGithub } from 'react-icons/bs';

const GitHubTooltip =  ()=>{
    return (
        <div className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]" data-tip="github">
            <a className="btn btn-ghost btn-circle normal-case btn-sm" href="https://github.com/nuvolaris/nuvolaris" target="_blank" rel="noopener noreferrer">
            <BsGithub className='w-6 h-6'/>
            </a>
        </div>
    )
}

export default GitHubTooltip;