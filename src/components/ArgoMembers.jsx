import React from 'react';

// export default function ArgoMembers({ argo1, argo2, argo3 }) {

//     return(
//         <div className="ArgoMembers">
//             <div>
//                 {argo1.map((argos) => {
//                     return(
//                         <p argos={argos} key={argos.id} >{argos.name}</p>
//                     )
//                 })}
//             </div>
//             <div>
//                 {argo2.map((argos) => {
//                     return(
//                         <p argos={argos} key={argos.id} >{argos.name}</p>
//                     )
//                 })}
//             </div>
//             <div>
//                 {argo3.map((argos) => {
//                     return(
//                         <p argos={argos} key={argos.id} >{argos.name}</p>
//                     )
//                 })}
//             </div>
//         </div>
//     )
// }

// export default function ArgoMembers({ argo }) {
//     const limit = [''];

//     return(
//         <div className="ArgoMembers">
//             {limit.slice(0,3).map((member) => {
//                 console.log(limit);
//                 return(
//                     <div member={member} key={member.i}>
//                         {argo.slice(0,10).map((argos) => {
//                             return(
//                                 <p argos={argos} key={argos.id} >{argos.name}</p>
//                             )
//                         })}
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }

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