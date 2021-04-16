import "./Tab.css";
import React, {useReducer} from "react"

function Button({data}) {
    const [btnClick, toggle] = useReducer(
        (btnClick) => !btnClick, 
        false
    );

    return (
        <div>
            <button className="accordion" onClick={toggle}>
                {data.name.toUpperCase()}
            </button>
            {btnClick ? <Panel repo={data} /> : ''}
        </div>
    );
}

function Panel({repo}) {
    return (
        <div className="panel">
            <header className='panel-title'>{repo.full_name.toUpperCase()}</header>

            <div className='panel-desc'>{repo.description}</div>

            <div className='language'>Language: {repo.language}</div>
            <div className='panel-tiles'>
                <div className='tile-left'>
                    <span>{repo.forks}</span>
                    <p>Forks</p>
                </div>
                <div className='big-tile'>
                    <div className='big-tile-left'>
                        <span>{repo.open_issues}</span>
                        <p>Open Issues</p>
                    </div>
                    <div className='big-tile-right'>
                        <span>{repo.watchers}</span>
                        <p>Watchers</p>
                    </div>
                </div>
            </div>
            
            <div className='panel-url'>
                <a href={repo.url} rel='noreferrer noopener' target='_blank'>
                    {repo.url}
                </a>
            </div>
        </div>
    );
}

export default function Tab({repo}) {
    return (
        <div>
            <Button data={repo} />
        </div>
    );
}