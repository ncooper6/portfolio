import React from 'react';
import { Link } from 'react-router-dom';
import './items.css';

const PortItem = ({items}) => {
    return (
        <div className="port-item-wrapper">
            {items.map((portItem)=>{
                const {id, title, tags, desc, img, logo} = portItem;
                return(
                    <Link to={`/project/${id}`} className="port-link">
                    <article key={id} className="port-item">
                        <div className="item-info">
                            <h1>{title}</h1>
                            <div className="tag-wrapper-item">
                            {tags.map((portTags)=>{
                                return(
                                    <div className="tag-item">
                                        {portTags}
                                    </div>
                                );
                            })}
                            </div>
                            <p>{desc}</p>
                        </div>
                        <div className="item-imgs">
                            <img className="img-preview" src={img} alt="project preview"/>
                            <div className="logo-wrap">
                                <img className="img-logo" src={logo} alt="project logo"/>
                            </div>
                        </div>
                    </article>
                </Link>
                );
            })}
        </div>
    )
}

export default PortItem
