import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ProgramItem({listing='Works', credit='Chang', link='', caption='', subitem_list=[]}) {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
        const elementId = location.hash.substring(1); // Remove '#' from hash
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        }
    }, [location]);

    return (
        <div className='program-container'>
            <div className='program-item'>
                <Link to={link} className='text-link h3'>{listing}</Link>
                <div className='dashed-line'></div>
                <div className='artist p-text font-italic'>{credit}</div>
            </div>
            <p className='program-item-caption'>{caption}</p>
            {/* {subitem_list==[] ? null : <div className='subitem-container'>
                {subitem_list.length!==0 &&
                    subitem_list.map((item) => (
                        <ProgramSubItem 
                            key={item.key}
                            listing={item.listing}
                            credit={item.credit}
                            link={item.link}
                            arranged={item.arranged}
                        />
                    ))
                }
            </div>} */}
        </div>
    )
}

export default ProgramItem