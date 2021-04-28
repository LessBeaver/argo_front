import React from 'react';

export default function ArgoMembers({ argo }) {

    return(
        <div className="ArgoMembers">
            <div>
                {argo.slice(0,10).map((argos) => {
                    return(
                        <p argos={argos} key={argos.id} >{argos.name}</p>
                    )
                })}
            </div>
            <div>
                {argo.slice(10,20).map((argos) => {
                    return(
                        <p argos={argos} key={argos.id} >{argos.name}</p>
                    )
                })}
            </div>
            <div>
                {argo.slice(20,30).map((argos) => {
                    return(
                        <p argos={argos} key={argos.id} >{argos.name}</p>
                    )
                })}
            </div>
        </div>
    )
}